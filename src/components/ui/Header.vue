<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useThemeStore } from '../../stores/theme'
import ThemeSwitcher from './ThemeSwitcher.vue'
import ColorPicker from './ColorPicker.vue'

const isMenuOpen = ref(false)
const showColorPicker = ref(false)
const themeStore = ref(null)

onMounted(() => {
  // 确保只在客户端初始化 store
  themeStore.value = useThemeStore()
})

const navigationItems = [
  { label: '首页', href: '/' },
  { label: '动效库', href: '/effects' },
  { label: '分类', href: '/categories' },
  { label: '关于', href: '/about' }
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">CSS</span>
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-white">动效中心</span>
          </a>
        </div>

        <!-- 桌面导航 -->
        <nav class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navigationItems"
            :key="item.href"
            :href="item.href"
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- 右侧工具 -->
        <div class="flex items-center space-x-4">
          <!-- 颜色选择器切换 -->
          <button
            @click="showColorPicker = !showColorPicker"
            class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            title="主题颜色"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
          </button>

          <!-- 主题切换 -->
          <ThemeSwitcher client:load />

          <!-- 移动端菜单按钮 -->
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 颜色选择器 -->
      <Transition name="slide-down">
        <div v-if="showColorPicker" class="border-t border-gray-200 dark:border-gray-700 py-4">
          <ColorPicker />
        </div>
      </Transition>

      <!-- 移动端导航 -->
      <Transition name="slide-down">
        <nav v-if="isMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
          <div class="flex flex-col space-y-4">
            <a
              v-for="item in navigationItems"
              :key="item.href"
              :href="item.href"
              @click="isMenuOpen = false"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
            >
              {{ item.label }}
            </a>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>