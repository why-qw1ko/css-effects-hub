<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// 只在客户端动态导入 Pinia store
let useThemeStore: () => any
const themeStore = ref(null)

const presetColors = [
  '#0ea5e9', // 默认蓝色
  '#d946ef', // 默认紫色
  '#ef4444', // 红色
  '#f59e0b', // 橙色
  '#10b981', // 绿色
  '#8b5cf6', // 紫色
  '#ec4899', // 粉色
  '#06b6d4', // 青色
]

const customColor = ref('#0ea5e9')
const colorType = ref<'primary' | 'secondary'>('primary')

onMounted(async () => {
  // 动态导入 store，确保只在客户端执行
  const { useThemeStore: importedUseThemeStore } = await import('../../stores/theme')
  useThemeStore = importedUseThemeStore
  
  themeStore.value = useThemeStore()
  customColor.value = themeStore.value.primaryColor
})

// 计算属性
const primaryColor = computed(() => themeStore.value?.primaryColor || '#0ea5e9')
const secondaryColor = computed(() => themeStore.value?.secondaryColor || '#d946ef')

const applyCustomColor = () => {
  if (colorType.value === 'primary') {
    themeStore.value?.setPrimaryColor(customColor.value)
  } else {
    themeStore.value?.setSecondaryColor(customColor.value)
  }
}

const selectPresetColor = (color: string) => {
  if (colorType.value === 'primary') {
    themeStore.value?.setPrimaryColor(color)
  } else {
    themeStore.value?.setSecondaryColor(color)
  }
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center space-x-4">
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">选择颜色类型：</span>
      <div class="flex space-x-2">
        <button
          @click="colorType = 'primary'"
          :class="[
            'px-3 py-1 text-xs rounded-full transition-colors',
            colorType === 'primary'
              ? 'bg-primary-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          ]"
        >
          主色
        </button>
        <button
          @click="colorType = 'secondary'"
          :class="[
            'px-3 py-1 text-xs rounded-full transition-colors',
            colorType === 'secondary'
              ? 'bg-secondary-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          ]"
        >
          辅助色
        </button>
      </div>
    </div>

    <div class="space-y-3">
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          自定义颜色：
        </label>
        <div class="flex items-center space-x-3">
          <input
            v-model="customColor"
            type="color"
            class="w-12 h-8 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
            @change="applyCustomColor"
          />
          <span class="text-sm text-gray-600 dark:text-gray-400 font-mono">{{ customColor }}</span>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          预设颜色：
        </label>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="color in presetColors"
            :key="color"
            @click="selectPresetColor(color)"
            :style="{ backgroundColor: color }"
            :class="[
              'w-8 h-8 rounded-full border-2 transition-all duration-200',
              (colorType === 'primary' && color === primaryColor) ||
              (colorType === 'secondary' && color === secondaryColor)
                ? 'border-gray-900 dark:border-white scale-110'
                : 'border-gray-300 dark:border-gray-600 hover:scale-105'
            ]"
            :title="`选择 ${color} 作为${colorType === 'primary' ? '主' : '辅助'}色`"
          />
        </div>
      </div>
    </div>

    <div class="pt-3 border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-600 dark:text-gray-400">当前主题预览：</span>
        <div class="flex items-center space-x-2">
          <div
            class="w-4 h-4 rounded-full border"
            :style="{ backgroundColor: primaryColor }"
          />
          <div
            class="w-4 h-4 rounded-full border"
            :style="{ backgroundColor: secondaryColor }"
          />
        </div>
      </div>
    </div>
  </div>
</template>