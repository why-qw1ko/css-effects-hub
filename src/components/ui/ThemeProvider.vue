<script setup lang="ts">
import { onMounted, ref, watch, nextTick } from 'vue'
import { useThemeStore } from '../../stores/theme'

const themeStore = ref(null)

onMounted(() => {
  themeStore.value = useThemeStore()
  themeStore.value.loadThemePreference()
  
  // 确保主题类应用到html元素
  updateHTMLClass()
})

// 监听主题变化
watch(() => themeStore.value?.currentTheme, (newTheme) => {
  if (newTheme) {
    nextTick(() => {
      updateHTMLClass()
    })
  }
})

const updateHTMLClass = () => {
  const html = document.documentElement
  const currentTheme = themeStore.value?.currentTheme || 'light'
  
  // 移除所有主题相关类
  html.classList.remove('light', 'dark')
  
  // 添加当前主题类
  html.classList.add(currentTheme)
  
  // 更新body样式以确保主题生效
  if (currentTheme === 'dark') {
    document.body.style.backgroundColor = '#111827'
    document.body.style.color = '#f9fafb'
  } else {
    document.body.style.backgroundColor = '#ffffff'
    document.body.style.color = '#111827'
  }
}
</script>

<template>
  <div>
    <slot />
  </div>
</template>