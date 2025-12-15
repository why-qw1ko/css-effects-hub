<script setup lang="ts">
import { ref, computed } from 'vue'
import { highlightCode, copyToClipboard } from '../../utils'

interface Props {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  editable?: boolean
  maxHeight?: string
}

const props = withDefaults(defineProps<Props>(), {
  language: 'css',
  showLineNumbers: true,
  editable: false,
  maxHeight: '400px'
})

const emit = defineEmits<{
  update: [code: string]
}>()

const isCopied = ref(false)
const localCode = ref(props.code)

const highlightedCode = computed(() => {
  return highlightCode(localCode.value, props.language)
})

const copyCode = async () => {
  const success = await copyToClipboard(localCode.value)
  if (success) {
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  }
}

const updateCode = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  localCode.value = target.value
  emit('update', localCode.value)
}
</script>

<template>
  <div class="code-block-container">
    <!-- 文件名和操作按钮 -->
    <div v-if="filename || $slots.header" class="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
      <div class="flex items-center space-x-2">
        <slot name="header">
          <span v-if="filename" class="text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ filename }}
          </span>
          <span class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            {{ language }}
          </span>
        </slot>
      </div>
      <div class="flex items-center space-x-2">
        <button
          @click="copyCode"
          class="p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
          title="复制代码"
        >
          <svg v-if="!isCopied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <svg v-else class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 代码内容 -->
    <div class="relative">
      <pre 
        v-if="!editable"
        class="code-block overflow-x-auto"
        :style="{ maxHeight }"
        v-html="highlightedCode"
      />
      
      <textarea
        v-else
        :value="localCode"
        @input="updateCode"
        class="w-full min-h-[200px] p-4 bg-gray-50 dark:bg-gray-800 border-none outline-none resize-none font-mono text-sm"
        :style="{ maxHeight }"
        placeholder="输入代码..."
      />
      
      <!-- 复制成功提示 -->
      <Transition name="fade">
        <div
          v-if="isCopied"
          class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium"
        >
          已复制!
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.code-block {
  @apply text-sm leading-relaxed;
}

.code-block :deep(.token.comment),
.code-block :deep(.token.prolog),
.code-block :deep(.token.doctype),
.code-block :deep(.token.cdata) {
  @apply text-gray-500 dark:text-gray-400;
}

.code-block :deep(.token.punctuation) {
  @apply text-gray-700 dark:text-gray-300;
}

.code-block :deep(.token.property),
.code-block :deep(.token.tag),
.code-block :deep(.token.boolean),
.code-block :deep(.token.number),
.code-block :deep(.token.constant),
.code-block :deep(.token.symbol),
.code-block :deep(.token.deleted) {
  @apply text-red-500 dark:text-red-400;
}

.code-block :deep(.token.selector),
.code-block :deep(.token.attr-name),
.code-block :deep(.token.string),
.code-block :deep(.token.char),
.code-block :deep(.token.builtin),
.code-block :deep(.token.inserted) {
  @apply text-green-500 dark:text-green-400;
}

.code-block :deep(.token.operator),
.code-block :deep(.token.entity),
.code-block :deep(.token.url) {
  @apply text-blue-500 dark:text-blue-400;
}

.code-block :deep(.token.atrule),
.code-block :deep(.token.attr-value),
.code-block :deep(.token.keyword) {
  @apply text-purple-500 dark:text-purple-400;
}

.code-block :deep(.token.function),
.code-block :deep(.token.class-name) {
  @apply text-yellow-500 dark:text-yellow-400;
}
</style>