<template>
    <div class="command-group">
      <div class="grid grid-cols-2 gap-3">
        <button @click="emitCommand('scanap')" class="command-btn">
          Scan AP
        </button>
        <button @click="emitCommand('scansta')" class="command-btn">
          Scan Stations
        </button>
        <button @click="emitCommand('scanall')" class="command-btn">
          Scan All
        </button>
        <button @click="emitCommand('pingscan')" class="command-btn">
          Ping Scan
        </button>
        <button @click="emitCommand('arpscan')" class="command-btn">
          ARP Scan
        </button>
        <button @click="emitCommand('portscan')" class="command-btn">
          Port Scan
        </button>
        <button @click="emitCommand('wardrive -s')" class="command-btn">
          Wardrive
        </button>
        <button @click="emitCommand('stopscan')" class="command-btn bg-red-500 hover:bg-red-600 text-white">
          Stop Scan
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits(['command-built'])
  
  const emitCommand = (command) => {
    emit('command-built', command)
  }
  </script>