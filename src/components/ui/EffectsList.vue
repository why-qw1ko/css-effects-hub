<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useEffectsStore } from '../../stores/effects'

const effectsStore = ref(null)

// 搜索和分类状态
const searchQuery = ref('')
const currentCategory = ref('all')

onMounted(async () => {
  effectsStore.value = useEffectsStore()
  await effectsStore.value.initializeSampleEffects()
})

// 计算属性
const categories = computed(() => {
  return effectsStore.value?.categories || []
})

const filteredEffects = computed(() => {
  let filtered = effectsStore.value?.effects || []
  
  // 分类过滤
  if (currentCategory.value !== 'all') {
    filtered = filtered.filter(effect => effect.category === currentCategory.value)
  }
  
  // 搜索过滤
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(effect =>
      effect.name.toLowerCase().includes(query) ||
      effect.description.toLowerCase().includes(query) ||
      effect.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }
  
  return filtered
})

// 方法
const updateSearchQuery = (event: Event) => {
  const target = event.target as HTMLInputElement
  searchQuery.value = target.value
}

const updateCategory = (event: Event) => {
  const target = event.target as HTMLSelectElement
  currentCategory.value = target.value
}

const navigateToEffect = (effectId: string) => {
  window.location.href = `/effect/${effectId}`
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'hard':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
}

const getDifficultyText = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return '简单'
    case 'medium':
      return '中等'
    case 'hard':
      return '困难'
    default:
      return '未知'
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- 搜索和过滤 -->
    <div class="mb-8">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- 搜索框 -->
        <div class="flex-1">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="搜索动效..."
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              :value="searchQuery"
              @input="updateSearchQuery"
            />
          </div>
        </div>

        <!-- 分类过滤 -->
        <div class="md:w-48">
          <select
            class="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            :value="currentCategory"
            @change="updateCategory"
          >
            <option value="all">所有分类</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- 动效文章列表 -->
    <div v-if="filteredEffects.length > 0" class="space-y-8">
      <article
        v-for="effect in filteredEffects"
        :key="effect.id"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 cursor-pointer"
        @click="navigateToEffect(effect.id)"
      >
        <div class="p-6">
          <!-- 文章头部 -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex-1">
              <!-- 分类标签 -->
              <div class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 mb-3">
                {{ effect.category }}
              </div>
              
              <!-- 标题 -->
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {{ effect.name }}
              </h2>
              
              <!-- 描述 -->
              <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {{ effect.description }}
              </p>
            </div>
            
            <!-- 难度标签 -->
            <div class="ml-4">
              <span :class="getDifficultyColor(effect.difficulty)" 
                    class="px-2 py-1 text-xs font-medium rounded-full">
                {{ getDifficultyText(effect.difficulty) }}
              </span>
            </div>
          </div>
          
          <!-- 文章元信息 -->
          <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
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
          </div>
          
          <!-- 标签 -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in effect.tags" :key="tag" 
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
              #{{ tag }}
            </span>
          </div>
          
          <!-- 阅读更多 -->
          <div class="flex items-center text-primary-600 dark:text-primary-400 font-medium">
            <span>阅读全文</span>
            <svg class="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </div>
    
    <!-- 空状态 -->
    <div v-else class="text-center py-12">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.084-2.291.15-.291.318-.571.5-.838M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <h3 class="mt-2 text-lg font-medium text-gray-900 dark:text-white">
        没有找到动效
      </h3>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
        尝试调整搜索条件
      </p>
    </div>
  </div>
</template>