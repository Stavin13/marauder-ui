import { ref, computed } from 'vue'

// Create singleton instance
const port = ref(null)
const reader = ref(null)
const isConnected = ref(false)
const terminalOutput = ref([])
const isDemoMode = ref(false)
let buffer = ''

export const useSerialConnection = () => {
  const connect = async (forceNewPort = false) => {
    console.log('Connect function called, forceNewPort:', forceNewPort)
    try {
      if (!navigator.serial) {
        console.error('Web Serial API not supported')
        throw new Error('Web Serial API not supported in this browser')
      }

      // First, try to get previously authorized ports (auto-detect)
      const ports = await navigator.serial.getPorts()
      console.log('Available ports:', ports.length)

      if (!forceNewPort && ports.length > 0) {
        // Use the first available port (auto-detect)
        port.value = ports[0]
        console.log('Using previously authorized port')
        addToTerminal('ℹ Using previously authorized port', 'normal')
      } else {
        // No previously authorized ports, request user to select one
        console.log('Requesting port selection...')
        addToTerminal('ℹ Please select a port from the browser dialog', 'normal')
        port.value = await navigator.serial.requestPort()
        console.log('Port selected by user')
      }

      // Get port info for debugging
      const portInfo = await port.value.getInfo()
      console.log('Port info - USB Vendor:', portInfo.usbVendorId, 'Product:', portInfo.usbProductId)

      // Try to close if already open (cleanup from previous session)
      try {
        if (port.value.readable || port.value.writable) {
          console.log('Port appears to be open, attempting cleanup...')
          await port.value.close()
          await new Promise(resolve => setTimeout(resolve, 200))
        }
      } catch (closeError) {
        console.warn('Cleanup error (may be normal):', closeError.message)
      }

      console.log('Opening port with baudRate: 115200...')
      addToTerminal('ℹ Opening serial port...', 'normal')
      
      await port.value.open({ 
        baudRate: 115200,
        dataBits: 8,
        stopBits: 1,
        parity: 'none',
        flowControl: 'none'
      })
      
      console.log('Port opened successfully')
      isConnected.value = true
      addToTerminal('✓ Connected to serial port successfully', 'success')
      startReading()
    } catch (error) {
      console.error('Connection error:', error)
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
      isConnected.value = false
      port.value = null
      
      // Provide more helpful error messages
      let errorMessage = error.message
      let suggestion = ''
      
      if (error.name === 'InvalidStateError') {
        errorMessage = 'Port is already open or in use'
        suggestion = 'Try: 1) Disconnect first, 2) Close other apps using the port, 3) Unplug and replug device'
      } else if (error.name === 'NetworkError') {
        errorMessage = 'Failed to open port'
        suggestion = 'Try: 1) Check device is plugged in, 2) Close Arduino IDE/PlatformIO/other serial apps, 3) Try "Select New Port" button'
      } else if (error.name === 'NotFoundError') {
        errorMessage = 'No port selected'
        suggestion = 'Click Connect again and select your device'
      }
      
      addToTerminal(`✗ Failed to connect: ${errorMessage}`, 'error')
      if (suggestion) {
        addToTerminal(`  ${suggestion}`, 'error')
      }
      throw error
    }
  }
  
  const forgetPort = async () => {
    try {
      const ports = await navigator.serial.getPorts()
      if (ports.length > 0) {
        await ports[0].forget()
        addToTerminal('✓ Port forgotten. Click Connect to select a new port.', 'success')
      }
    } catch (error) {
      addToTerminal(`✗ Error forgetting port: ${error.message}`, 'error')
    }
  }

  const disconnect = async () => {
    if (port.value) {
      try {
        if (reader.value) {
          try {
            await reader.value.cancel()
            reader.value.releaseLock()
          } catch (e) {
            console.warn('Reader cleanup error:', e)
          }
        }
        
        // Only close if the port is actually open
        if (port.value.readable || port.value.writable) {
          await port.value.close()
        }
        
        port.value = null
        reader.value = null
        isConnected.value = false
        buffer = '' // Clear buffer
        addToTerminal('✗ Disconnected from serial port', 'error')
      } catch (error) {
        console.error('Disconnection error:', error)
        // Force cleanup even if there's an error
        port.value = null
        reader.value = null
        isConnected.value = false
        buffer = ''
        addToTerminal(`✗ Error disconnecting: ${error.message}`, 'error')
      }
    }
  }

  const startReading = async () => {
    while (port.value && port.value.readable) {
      try {
        const textDecoder = new TextDecoderStream()
        const readableStreamClosed = port.value.readable.pipeTo(textDecoder.writable)
        reader.value = textDecoder.readable.getReader()

        try {
          while (true) {
            const { value, done } = await reader.value.read()
            if (done) break

            if (value) {
              // Accumulate the buffer and process complete lines
              buffer += value
              const lines = buffer.split('\n')
              buffer = lines.pop() // Keep the last incomplete line in buffer

              // Process complete lines
              lines.forEach(line => {
                if (line.trim()) {
                  addToTerminal(line.trim())
                }
              })
            }
          }
        } catch (error) {
          console.error('Read error:', error)
        } finally {
          if (reader.value) {
            reader.value.releaseLock()
          }
        }
      } catch (error) {
        addToTerminal(`✗ Read error: ${error.message}`, 'error')
        break
      }
    }
  }

  const sendCommand = async (command) => {
    console.log(isDemoMode.value)
    if (isDemoMode.value) {
      // Handle demo commands
      addToTerminal(`> ${command}`, 'command')

      // Simulate responses based on command
      switch (command) {
        case 'scanap':
          addToTerminal('Starting AP scan. Stop with stopscan')
          setTimeout(() => {
            generateDemoData().forEach(ap => {
              addToTerminal(`RSSI: ${ap.rssi} Ch: ${ap.channel} BSSID: ${ap.bssid} ESSID: ${ap.essid}`)
            })
          }, 500)
          break
        case 'list -a':
          generateDemoData().forEach(ap => {
            addToTerminal(`[${ap.index}][CH:${ap.channel}] ${ap.essid}${ap.isSelected ? ' (selected)' : ''}`)
          })
          break
        case 'stopscan':
          addToTerminal('Stopping all scans...')
          break
        default:
          addToTerminal(`Executing: ${command}`)
      }
      return
    }

    if (!command || !port.value) {
      addToTerminal('✗ No command or not connected', 'error')
      return
    }

    try {
      const writer = port.value.writable.getWriter()
      const encoder = new TextEncoder()
      const data = encoder.encode(command + '\n')
      await writer.write(data)
      addToTerminal(`> ${command}`, 'command')
      writer.releaseLock()
    } catch (error) {
      console.error('Send error:', error)
      addToTerminal(`✗ Failed to send command: ${error.message}`, 'error')
    }
  }

  const addToTerminal = (text, type = 'normal') => {
    console.log('Adding to terminal:', text, type) // Debug log
    if (text.trim()) {
      const lineClass = getTypeClass(type)
      terminalOutput.value = [...terminalOutput.value, `<span class="${lineClass}">${text}</span>`]

      // Keep only last 1000 lines
      if (terminalOutput.value.length > 1000) {
        terminalOutput.value = terminalOutput.value.slice(-1000)
      }
    }
  }

  const getTypeClass = (type) => {
    const classes = {
      normal: 'text-green-400',
      success: 'text-blue-400',
      error: 'text-red-500',
      command: 'text-yellow-400'
    }
    return classes[type] || classes.normal
  }

  return {
    isConnected: computed(() => isConnected.value), // Make it computed
    isDemoMode,
    terminalOutput,
    connect,
    disconnect,
    sendCommand,
    forgetPort
  }
}