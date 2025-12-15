<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useEffectsStore } from '../../stores/effects'
const props = defineProps<{
  id: string
}>()

const effectsStore = ref(null)
const effect = ref(null)
const showCode = ref(false)
const activeTab = ref('html')

onMounted(() => {
  effectsStore.value = useEffectsStore()
  // 从路由参数或props获取动效ID
  const effectId = props.id || window.location.pathname.split('/').pop()
  
  if (effectId) {
    effect.value = effectsStore.value.effects.find(e => e.id === effectId)
    
    // 如果动效不存在，显示404
    if (!effect.value) {
      window.location.href = '/404'
    }
  }
})

const toggleCode = () => {
  showCode.value = !showCode.value
}

const copyToClipboard = (code: string) => {
  navigator.clipboard.writeText(code).then(() => {
    // 可以添加复制成功的提示
    console.log('代码已复制到剪贴板')
  })
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div v-if="effect" class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 导航面包屑 -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav class="flex items-center space-x-2 text-sm">
          <a href="/" class="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
            首页
          </a>
          <svg class="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <a href="/effects" class="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
            动效博客
          </a>
          <svg class="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="text-gray-900 dark:text-white font-medium">{{ effect.name }}</span>
        </nav>
      </div>
    </div>

    <!-- 文章头部 -->
    <div class="bg-white dark:bg-gray-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center mb-8">
          <!-- 分类标签 -->
          <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 mb-4">
            {{ effect.category }}
          </div>
          
          <!-- 标题 -->
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {{ effect.name }}
          </h1>
          
          <!-- 描述 -->
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
            {{ effect.description }}
          </p>
          
          <!-- 元信息 -->
          <div class="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center">
              <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {{ effect.author || 'MiniMax Agent' }}
            </div>
            <div class="flex items-center">
              <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l6-6m-6 0l6 6" />
              </svg>
              {{ formatDate(effect.createdAt) }}
            </div>
            <div class="flex items-center">
              <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {{ effect.likes }} 点赞
            </div>
            <div class="flex items-center">
              <span class="px-2 py-1 text-xs font-medium rounded-full"
                    :class="{
                      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': effect.difficulty === 'easy',
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': effect.difficulty === 'medium',
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': effect.difficulty === 'hard'
                    }">
                {{ effect.difficulty === 'easy' ? '简单' : effect.difficulty === 'medium' ? '中等' : '困难' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 演示区域（类似博客的hero图） -->
    <div class="bg-gray-100 dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          <div class="p-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">在线演示</h2>
              <button
                @click="toggleCode"
                class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg v-if="!showCode" class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <svg v-else class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {{ showCode ? '隐藏代码' : '查看代码' }}
              </button>
            </div>
            
            <!-- 演示容器 -->
            <div class="min-h-96 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 flex items-center justify-center">
              <div v-if="effect.demoComponent" class="w-full">
                <component :is="effect.demoComponent" />
              </div>
              <div v-else class="text-center text-gray-500 dark:text-gray-400">
                <svg class="h-16 w-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>演示组件加载中...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 代码展示区域（类似博客文章内容） -->
    <div v-if="showCode" class="bg-white dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="bg-gray-900 rounded-2xl overflow-hidden">
          <!-- 代码标签页 -->
          <div class="flex border-b border-gray-700">
            <button
              @click="activeTab = 'html'"
              class="px-6 py-3 text-sm font-medium transition-colors"
              :class="activeTab === 'html' 
                ? 'bg-gray-800 text-white border-b-2 border-blue-500' 
                : 'text-gray-400 hover:text-white'"
            >
              HTML
            </button>
            <button
              @click="activeTab = 'css'"
              class="px-6 py-3 text-sm font-medium transition-colors"
              :class="activeTab === 'css' 
                ? 'bg-gray-800 text-white border-b-2 border-blue-500' 
                : 'text-gray-400 hover:text-white'"
            >
              CSS
            </button>
          </div>
          
          <!-- 代码内容 -->
          <div class="relative">
            <pre class="p-6 overflow-x-auto"><code class="text-sm text-gray-300">{{ activeTab === 'html' ? effect.html : effect.css }}</code></pre>
            <button
              @click="copyToClipboard(activeTab === 'html' ? effect.html : effect.css)"
              class="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
              title="复制代码"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 标签区域 -->
    <div class="bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in effect.tags" :key="tag" 
                class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 404页面 -->
  <div v-else class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">动效未找到</p>
      <a href="/effects" class="btn-primary">
        返回动效列表
      </a>
    </div>
  </div>
</template>

<style scoped>
/* 额外的样式可以根据需要添加 */
</style>