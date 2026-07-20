<template>
  <div v-if="effect" class="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6" @click.self="$emit('close')">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="$emit('close')"></div>

    <!-- Modal -->
    <div class="relative bg-card border border-border rounded-[18px] w-full max-w-[780px] max-h-[85vh] flex flex-col shadow-lg overflow-hidden animate-modal-in">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-border">
        <div>
          <h3 class="font-display font-bold text-lg text-txt">{{ effect.name }}</h3>
          <span class="badge mt-1" :class="badgeClass">{{ categoryName }}</span>
        </div>
        <button @click="$emit('close')" class="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-txt-secondary hover:text-txt transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Tabs -->
      <div class="flex border-b border-border px-6">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="font-mono text-xs px-4 py-3 border-b-2 transition-all duration-150 -mb-px"
          :class="activeTab === tab.id
            ? 'text-primary border-primary'
            : 'text-txt-secondary border-transparent hover:text-txt'"
        >
          {{ tab.icon }} {{ tab.label }}
        </button>
      </div>

      <!-- Body -->
      <div class="flex-1 overflow-y-auto">
        <!-- Preview Tab -->
        <div v-if="activeTab === 'preview'" class="p-6">
          <div class="preview-container rounded-card border border-border" style="height: 260px" v-html="effect.previewHtml"></div>
          <p class="mt-4 font-mono text-xs text-txt-secondary">{{ effect.description }}</p>
        </div>

        <!-- HTML Tab -->
        <div v-if="activeTab === 'html'" class="p-6">
          <CodeBlock :code="effect.html" label="HTML" />
        </div>

        <!-- CSS Tab -->
        <div v-if="activeTab === 'css'" class="p-6">
          <CodeBlock :code="effect.css" label="CSS" />
          <div v-if="effect.js" class="mt-4">
            <CodeBlock :code="effect.js" label="JavaScript" />
          </div>
        </div>

        <!-- Prompt Tab -->
        <div v-if="activeTab === 'prompt'" class="p-6">
          <div class="bg-surface border border-border rounded-card p-5">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-lg">🤖</span>
              <span class="font-display font-bold text-sm text-txt">AI Prompt</span>
            </div>
            <p class="font-mono text-sm text-txt-secondary leading-relaxed mb-4">{{ effect.prompt }}</p>
            <button @click="copyPrompt" class="btn-primary text-xs">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {{ promptCopied ? '已复制 ✓' : '复制 Prompt' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Effect } from '../../types';
import { categories } from '../../data/effects';
import CodeBlock from './CodeBlock.vue';

const props = defineProps<{ effect: Effect | null }>();
defineEmits<{ close: [] }>();

const activeTab = ref('preview');
const promptCopied = ref(false);

const tabs = [
  { id: 'preview', label: '预览', icon: '👀' },
  { id: 'html', label: 'HTML', icon: '📄' },
  { id: 'css', label: 'CSS', icon: '🎨' },
  { id: 'prompt', label: 'AI Prompt', icon: '🤖' },
];

const categoryName = computed(() => {
  if (!props.effect) return '';
  const cat = categories.find(c => c.id === props.effect!.category);
  return cat ? cat.name : props.effect.category;
});

const badgeClass = computed(() => {
  if (!props.effect) return '';
  const map: Record<string, string> = {
    basic: 'badge-blue', text: 'badge-purple', cursor: 'badge-green',
    card: 'badge-orange', loading: 'badge-pink', background: 'badge-gray',
    scroll: 'badge-blue', button: 'badge-green', transition: 'badge-purple',
    micro: 'badge-orange', shape: 'badge-pink',
  };
  return map[props.effect.category] || 'badge-gray';
});

async function copyPrompt() {
  if (!props.effect) return;
  try {
    await navigator.clipboard.writeText(props.effect.prompt);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = props.effect!.prompt;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  promptCopied.value = true;
  setTimeout(() => { promptCopied.value = false; }, 2000);
}
</script>

<style scoped>
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.96) translateY(16px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-modal-in {
  animation: modalIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
</style>
