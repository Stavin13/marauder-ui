<template>
  <div class="space-y-4">
    <div class="grid grid-cols-2 gap-2">
      <button @click="emitCommand('sniffbeacon')" class="command-btn bg-blue-500 hover:bg-blue-600 text-white">
        Sniff Beacon
      </button>
      <button @click="emitCommand('sniffdeauth')" class="command-btn bg-blue-500 hover:bg-blue-600 text-white">
        Sniff Deauth
      </button>
      <button @click="emitCommand('sniffpmkid')" class="command-btn bg-blue-500 hover:bg-blue-600 text-white">
        Sniff PMKID
      </button>
      <button @click="emitCommand('sniffesp')" class="command-btn bg-blue-500 hover:bg-blue-600 text-white">
        Sniff ESP
      </button>
      <button @click="emitCommand('sniffmultissid')" class="command-btn bg-blue-500 hover:bg-blue-600 text-white">
        Sniff Multi-SSID
      </button>
      <button @click="emitCommand('sniffbt')" class="command-btn bg-indigo-500 hover:bg-indigo-600 text-white">
        Sniff Bluetooth
      </button>
      <button @click="emitCommand('sniffskim')" class="command-btn bg-indigo-500 hover:bg-indigo-600 text-white">
        Sniff Skimmers
      </button>
      <button @click="emitCommand('stopscan')" class="command-btn bg-gray-500 hover:bg-gray-600 text-white">
        Stop Sniff
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