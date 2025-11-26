<template>
    <!-- Mobile Warning Banner (non-blocking) -->
    <div v-if="isMobileDevice && !dismissed"
        class="fixed top-0 left-0 right-0 bg-orange-400 border-b-2 border-black z-40 p-3 text-center">
        <div class="flex items-center justify-between max-w-4xl mx-auto">
            <div class="flex-1 text-left">
                <p class="text-xs sm:text-sm font-bold text-black">
                    📱 Mobile Mode: Hardware connection not available
                </p>
                <p class="text-xs text-gray-800">
                    Use "Demo" button to explore the interface
                </p>
            </div>
            <button 
                @click="dismissed = true"
                class="ml-2 px-2 py-1 bg-black text-white text-xs font-bold rounded hover:bg-gray-800">
                ✕
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileDevice = ref(false)
const dismissed = ref(false)

onMounted(() => {
    const checkMobile = () => {
        isMobileDevice.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            window.innerWidth <= 768
    }

    // Check on mount
    checkMobile()

    // Check on resize
    window.addEventListener('resize', checkMobile)

    // Cleanup
    onUnmounted(() => {
        window.removeEventListener('resize', checkMobile)
    })
})
</script>