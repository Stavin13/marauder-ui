<template>
  <div class="space-y-4">
    <!-- Category Tabs -->
    <div class="flex space-x-1 overflow-x-auto pb-2">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="currentTab = tab.id"
        class="px-3 py-1 text-xs font-bold rounded border-2 border-black whitespace-nowrap transition-all"
        :class="currentTab === tab.id ? 'bg-orange-500 text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] translate-x-[1px] translate-y-[1px]' : 'bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Command Components -->
    <div class="min-h-[200px]">
      <ScanCommands v-if="currentTab === 'scan'" @command-built="sendCommand" />
      <AttackCommands v-if="currentTab === 'attack'" @command-built="sendCommand" />
      <SniffCommands v-if="currentTab === 'sniff'" @command-built="sendCommand" />
      <GeneralCommands v-if="currentTab === 'general'" @command-built="sendCommand" />
    </div>

    <!-- Custom Command -->
    <div class="flex space-x-2 pt-2 border-t-2 border-black border-dashed">
      <input 
        v-model="customCommand"
        @keyup.enter="sendCustomCommand"
        type="text"
        class="flex-1 px-3 py-2 text-sm bg-white rounded border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Custom command..."
      >
      <button 
        @click="sendCustomCommand"
        class="px-3 py-2 text-sm font-bold bg-blue-500 text-white rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSerialConnection } from '../utils/serialConnection'
import ScanCommands from './commands/ScanCommands.vue'
import AttackCommands from './commands/AttackCommands.vue'
import SniffCommands from './commands/SniffCommands.vue'
import GeneralCommands from './commands/GeneralCommands.vue'

const { sendCommand: serialSendCommand } = useSerialConnection()
const customCommand = ref('')
const currentTab = ref('scan')

const tabs = [
  { id: 'scan', label: 'Scan' },
  { id: 'attack', label: 'Attack' },
  { id: 'sniff', label: 'Sniff' },
  { id: 'general', label: 'General' }
]

const sendCommand = async (cmd) => {
  await serialSendCommand(cmd)
}

const sendCustomCommand = async () => {
  if (customCommand.value.trim()) {
    await sendCommand(customCommand.value)
    customCommand.value = ''
  }
}
</script>