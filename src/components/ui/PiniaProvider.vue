<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useThemeStore } from '../../stores/theme'
import { useEffectsStore } from '../../stores/effects'

// 确保 Pinia 在客户端正确初始化
const themeStore = ref(null)
const effectsStore = ref(null)

onMounted(async () => {
  // 初始化 stores
  themeStore.value = useThemeStore()
  effectsStore.value = useEffectsStore()
  
  // 加载主题偏好设置
  themeStore.value.loadThemePreference()
  
  // 初始化动效数据（异步）
  await effectsStore.value.initializeSampleEffects()
  effectsStore.value.loadEffectsFromStorage()
  
  console.log('Pinia 状态管理已初始化')
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>