<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import { useThemeStore } from '../../stores/theme'
import { useEffectsStore } from '../../stores/effects'

// 确保 Pinia 在客户端正确初始化
const themeStore = ref(null)
const effectsStore = ref(null)

onMounted(async () => {
// 创建并设置为 active，这样后续的 useXStore() 调用不会失败
  const pinia = createPinia()
  setActivePinia(pinia)

  // 初始化 stores
  const themeStore = useThemeStore()
  const effectsStore = useEffectsStore()
  
  // 加载主题偏好设置（若有）
  themeStore.loadThemePreference?.()
  
  // 初始化动效数据（异步）
  await effectsStore.initializeSampleEffects?.()
  effectsStore.loadEffectsFromStorage?.()
  
  console.log('Pinia 状态管理已初始化')
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>