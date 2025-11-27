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
      <button @click="emitCommand('stopscan')" class="command-btn bg-gray-500 hover:bg-gray-600 text-white">
        Stop Attack
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

<style scoped>
.command-btn {
  @apply px-2 py-2 text-xs font-bold rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all;
}
</style>