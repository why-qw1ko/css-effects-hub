<script setup lang="ts">
import { onMounted, ref, watch, nextTick } from 'vue'

// 只在客户端动态导入 Pinia store
let useThemeStore: () => any
let themeStore = ref(null)

// 在客户端环境中导入和使用 Pinia store
onMounted(async () => {
  // 动态导入 store，确保只在客户端执行
  const { useThemeStore: importedUseThemeStore } = await import('../../stores/theme')
  useThemeStore = importedUseThemeStore
  
  // 使用 store
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