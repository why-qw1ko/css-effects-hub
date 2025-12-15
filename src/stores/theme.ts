import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textSecondary: string
}

export const useThemeStore = defineStore('theme', () => {
  // 状态
  const isDark = ref(false)
  const primaryColor = ref('#0ea5e9')
  const secondaryColor = ref('#d946ef')
  
  // 计算属性
  const currentTheme = computed(() => isDark.value ? 'dark' : 'light')
  
  const themeColors = computed((): ThemeColors => ({
    primary: primaryColor.value,
    secondary: secondaryColor.value,
    accent: isDark.value ? '#1f2937' : '#f3f4f6',
    background: isDark.value ? '#111827' : '#ffffff',
    surface: isDark.value ? '#1f2937' : '#f9fafb',
    text: isDark.value ? '#f9fafb' : '#111827',
    textSecondary: isDark.value ? '#d1d5db' : '#6b7280'
  }))
  
  // 方法
  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateCSSVariables()
    localStorage.setItem('theme-preference', JSON.stringify({
      isDark: isDark.value,
      primaryColor: primaryColor.value,
      secondaryColor: secondaryColor.value
    }))
  }
  
  const setPrimaryColor = (color: string) => {
    primaryColor.value = color
    updateCSSVariables()
    saveThemePreference()
  }
  
  const setSecondaryColor = (color: string) => {
    secondaryColor.value = color
    updateCSSVariables()
    saveThemePreference()
  }
  
  const updateCSSVariables = () => {
    const root = document.documentElement
    root.style.setProperty('--color-primary', primaryColor.value)
    root.style.setProperty('--color-secondary', secondaryColor.value)
    
    // 安全地切换主题类
    root.classList.remove('light', 'dark')
    root.classList.add(currentTheme.value)
  }
  
  const saveThemePreference = () => {
    localStorage.setItem('theme-preference', JSON.stringify({
      isDark: isDark.value,
      primaryColor: primaryColor.value,
      secondaryColor: secondaryColor.value
    }))
  }
  
  const loadThemePreference = () => {
    const saved = localStorage.getItem('theme-preference')
    if (saved) {
      try {
        const preference = JSON.parse(saved)
        isDark.value = preference.isDark || false
        primaryColor.value = preference.primaryColor || '#0ea5e9'
        secondaryColor.value = preference.secondaryColor || '#d946ef'
      } catch (error) {
        console.warn('Failed to parse theme preference:', error)
      }
    }
    updateCSSVariables()
  }
  
  return {
    // 状态
    isDark,
    primaryColor,
    secondaryColor,
    // 计算属性
    currentTheme,
    themeColors,
    // 方法
    toggleTheme,
    setPrimaryColor,
    setSecondaryColor,
    updateCSSVariables,
    saveThemePreference,
    loadThemePreference
  }
})