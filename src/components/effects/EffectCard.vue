<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useEffectsStore } from '../../stores/effects'
import type { Effect } from '../../types'

interface Props {
  effect: Effect
  showCode?: boolean
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showCode: false,
  compact: false
})

const emit = defineEmits<{
  like: [id: string]
  edit: [effect: Effect]
  delete: [id: string]
}>()

const effectsStore = ref(null)
const showFullCode = ref(false)
const activeTab = ref<'html' | 'css'>('html')
const isLiked = ref(false)
const styleElementId = ref(`effect-style-${Date.now()}-${Math.random()}`)

onMounted(() => {
  effectsStore.value = useEffectsStore()
  // 动态注入CSS样式
  injectDynamicStyles()
})

watch(() => props.effect.css, () => {
  if (props.showCode || showFullCode.value) {
    injectDynamicStyles()
  }
})

watch([() => props.showCode, showFullCode], ([showCode, fullCode]) => {
  if (showCode || fullCode) {
    nextTick(() => {
      injectDynamicStyles()
    })
  }
})

const injectDynamicStyles = () => {
  if (!props.effect.css) return
  
  // 移除之前的样式标签
  const existingStyle = document.getElementById(styleElementId.value)
  if (existingStyle) {
    existingStyle.remove()
  }
  
  // 创建新的样式标签
  const styleElement = document.createElement('style')
  styleElement.id = styleElementId.value
  styleElement.textContent = props.effect.css
  
  // 注入到文档头部
  document.head.appendChild(styleElement)
}

const difficultyColor = computed(() => {
  switch (props.effect.difficulty) {
    case 'easy':
      return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900'
    case 'medium':
      return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900'
    case 'hard':
      return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900'
    default:
      return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900'
  }
})

const difficultyText = computed(() => {
  switch (props.effect.difficulty) {
    case 'easy':
      return '简单'
    case 'medium':
      return '中等'
    case 'hard':
      return '困难'
    default:
      return '未知'
  }
})

const handleLike = () => {
  isLiked.value = !isLiked.value
  if (isLiked.value) {
    effectsStore.value?.likeEffect(props.effect.id)
  }
  emit('like', props.effect.id)
}
</script>

<template>
  <div class="effect-card" :class="{ 'compact': compact }">
    <!-- 动效预览 -->
    <div class="effect-preview">
      <div 
        class="demo-area"
        v-html="effect.html"
      />
    </div>

    <!-- 动效信息 -->
    <div class="effect-info">
      <div class="flex items-start justify-between mb-3">
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {{ effect.name }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ effect.description }}
          </p>
        </div>
        <button
          @click="handleLike"
          class="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
          :class="{ 'text-red-500': isLiked }"
          title="喜欢"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- 标签和难度 -->
      <div class="flex flex-wrap items-center gap-2 mb-3">
        <span
          class="px-2 py-1 text-xs font-medium rounded-full"
          :class="difficultyColor"
        >
          {{ difficultyText }}
        </span>
        <span class="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full">
          {{ effect.category }}
        </span>
        <span class="text-xs text-gray-500 dark:text-gray-400">
          ❤️ {{ effect.likes }}
        </span>
      </div>

      <!-- 标签 -->
      <div class="flex flex-wrap gap-1 mb-4">
        <span
          v-for="tag in effect.tags"
          :key="tag"
          class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- 代码展示 -->
      <div v-if="showCode || showFullCode" class="border-t border-gray-200 dark:border-gray-700 pt-4">
        <!-- 代码标签页 -->
        <div class="flex space-x-1 mb-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            @click="activeTab = 'html'"
            :class="[
              'px-3 py-1 text-sm rounded-md transition-colors',
              activeTab === 'html'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            HTML
          </button>
          <button
            @click="activeTab = 'css'"
            :class="[
              'px-3 py-1 text-sm rounded-md transition-colors',
              activeTab === 'css'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            CSS
          </button>
        </div>

        <!-- 代码内容 -->
        <CodeBlock
          :code="activeTab === 'html' ? effect.html : effect.css"
          :language="activeTab"
          :showLineNumbers="true"
          :maxHeight="compact ? '200px' : '300px'"
        />
      </div>

      <!-- 操作按钮 -->
      <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div class="text-xs text-gray-500 dark:text-gray-400">
          由 {{ effect.author || '匿名' }} 贡献
          <br>
          {{ new Date(effect.createdAt).toLocaleDateString('zh-CN') }}
        </div>
        <div class="flex items-center space-x-2">
          <button
            v-if="!showCode && !showFullCode"
            @click="$emit('edit', effect)"
            class="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
          >
            查看代码
          </button>
          <button
            @click="$emit('delete', effect.id)"
            class="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200"
          >
            删除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.effect-card {
  @apply bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg;
}

.effect-card.compact {
  @apply hover:shadow-md;
}

.effect-preview {
  @apply relative p-6 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700;
}

.demo-area {
  @apply flex items-center justify-center min-h-[120px] bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600;
}

.effect-info {
  @apply p-6;
}

/* 示例CSS样式 - 这些样式将应用到demo-area内的元素 */
.demo-area :deep(.floating-card) {
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.demo-area :deep(.floating-card:hover) {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.demo-area :deep(.floating-card h3) {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
}

.demo-area :deep(.floating-card p) {
  margin: 0;
  color: #6b7280;
}

.demo-area :deep(.pulse-button) {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.demo-area :deep(.pulse-button::before) {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.demo-area :deep(.pulse-button:hover::before) {
  width: 300px;
  height: 300px;
}

.demo-area :deep(.pulse-button:hover) {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.demo-area :deep(.pulse-button:active) {
  transform: scale(0.98);
}
</style>