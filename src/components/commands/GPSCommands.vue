<template>
  <div class="space-y-4">
    <div class="grid grid-cols-2 gap-2">
      <button @click="emitCommand('gps')" class="command-btn bg-indigo-500 hover:bg-indigo-600 text-white">
        Get GPS Info
      </button>
      <button @click="emitCommand('gpsdata')" class="command-btn bg-indigo-500 hover:bg-indigo-600 text-white">
        GPS Data
      </button>
      <button @click="emitCommand('nmea')" class="command-btn bg-indigo-500 hover:bg-indigo-600 text-white">
        NMEA Data
      </button>
      <button @click="emitCommand('gpstracker -c start')" class="command-btn bg-green-500 hover:bg-green-600 text-white">
        Start Tracker
      </button>
      <button @click="emitCommand('gpstracker -c stop')" class="command-btn bg-red-500 hover:bg-red-600 text-white">
        Stop Tracker
      </button>
      <button @click="emitCommand('gpspoi -s')" class="command-btn bg-blue-500 hover:bg-blue-600 text-white">
        Save POI
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
