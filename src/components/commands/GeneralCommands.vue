<template>
  <div class="space-y-4">
    <!-- Quick Actions -->
    <div class="grid grid-cols-2 gap-2">
      <button @click="emitCommand('reboot')" class="command-btn bg-orange-500 hover:bg-orange-600 text-white">
        Reboot
      </button>
      <button @click="emitCommand('clearlist -a')" class="command-btn bg-yellow-500 hover:bg-yellow-600 text-white">
        Clear List
      </button>
      <button @click="emitCommand('list -a')" class="command-btn bg-green-500 hover:bg-green-600 text-white">
        List APs
      </button>
      <button @click="emitCommand('list -s')" class="command-btn bg-green-500 hover:bg-green-600 text-white">
        List SSIDs
      </button>
      <button @click="emitCommand('settings -s')" class="command-btn bg-gray-500 hover:bg-gray-600 text-white">
        Settings
      </button>
      <button @click="emitCommand('info')" class="command-btn bg-blue-500 hover:bg-blue-600 text-white">
        Device Info
      </button>
      <button @click="emitCommand('packetcount')" class="command-btn bg-blue-500 hover:bg-blue-600 text-white">
        Packet Count
      </button>
    </div>

    <!-- Channel Selection -->
    <div class="flex gap-2 items-center">
      <input 
        v-model="channel" 
        type="number" 
        placeholder="Ch" 
        class="w-16 px-2 py-1 text-sm border-2 border-black rounded"
        @keyup.enter="setChannel"
      >
      <button @click="setChannel" class="flex-1 command-btn bg-gray-200 hover:bg-gray-300">
        Set Channel
      </button>
    </div>

    <!-- LED Control -->
    <div class="flex gap-2 items-center">
      <input 
        v-model="ledColor" 
        type="color" 
        class="w-16 h-8 border-2 border-black rounded cursor-pointer"
      >
      <button @click="setLed" class="flex-1 command-btn bg-gray-200 hover:bg-gray-300">
        Set LED
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['command-built'])
const channel = ref('')
const ledColor = ref('#000000')

const emitCommand = (command) => {
  emit('command-built', command)
}

const setChannel = () => {
  if (channel.value) {
    emitCommand(`channel -s ${channel.value}`)
    channel.value = ''
  }
}

const setLed = () => {
  // Convert hex to format required by marauder if needed, or just send hex
  // Assuming led -s <hex color> format e.g. led -s #ff0000
  emitCommand(`led -s ${ledColor.value}`)
}
</script>
