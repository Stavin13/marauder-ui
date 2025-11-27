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

<style scoped>
.command-btn {
  @apply px-2 py-2 text-xs font-bold rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all;
}
</style>
