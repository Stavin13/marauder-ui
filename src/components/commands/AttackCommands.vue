<script setup>
const emit = defineEmits(['command-built'])

const emitCommand = (command) => {
  emit('command-built', command)
}
</script>

<template>
  <div class="space-y-4">
    <div class="grid grid-cols-2 gap-2">
      <button @click="emitCommand('attack -t beacon -l')" class="command-btn bg-red-500 hover:bg-red-600 text-white">
        Beacon List
      </button>
      <button @click="emitCommand('attack -t beacon -r')" class="command-btn bg-red-500 hover:bg-red-600 text-white">
        Random Beacon
      </button>
      <button @click="emitCommand('attack -t deauth')" class="command-btn bg-red-500 hover:bg-red-600 text-white">
        Deauth Flood
      </button>
      <button @click="emitCommand('attack -t probe')" class="command-btn bg-red-500 hover:bg-red-600 text-white">
        Probe Flood
      </button>
      <button @click="emitCommand('attack -t rickroll')" class="command-btn bg-purple-500 hover:bg-purple-600 text-white">
        Rickroll
      </button>
      <button @click="emitCommand('blespam -t all')" class="command-btn bg-blue-500 hover:bg-blue-600 text-white">
        BLE Spam
      </button>
      <button @click="emitCommand('evilportal -c start')" class="command-btn bg-orange-500 hover:bg-orange-600 text-white">
        Start Evil Portal
      </button>
      <button @click="emitCommand('karma -p')" class="command-btn bg-purple-500 hover:bg-purple-600 text-white">
        Karma Attack
      </button>
      <button @click="emitCommand('spoofat -t')" class="command-btn bg-purple-500 hover:bg-purple-600 text-white">
        Spoof Target
      </button>
      <button @click="emitCommand('attack -t badmsg')" class="command-btn bg-red-500 hover:bg-red-600 text-white">
        Bad Message
      </button>
      <button @click="emitCommand('stopscan')" class="command-btn bg-gray-500 hover:bg-gray-600 text-white">
        Stop Attack
      </button>
    </div>
  </div>
</template>
