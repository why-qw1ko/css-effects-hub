<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// 只在客户端动态导入 Pinia store
let useThemeStore: () => any
const themeStore = ref(null)

onMounted(async () => {
  // 动态导入 store，确保只在客户端执行
  const { useThemeStore: importedUseThemeStore } = await import('../../stores/theme')
  useThemeStore = importedUseThemeStore
  
  themeStore.value = useThemeStore()
})

const isDark = computed(() => themeStore.value?.isDark || false)

const toggleTheme = () => {
  themeStore.value?.toggleTheme()
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
    :title="isDark ? '切换到亮色主题' : '切换到暗色主题'"
  >
    <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  </button>
</template>