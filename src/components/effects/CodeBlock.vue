<template>
  <div class="code-block relative">
    <div class="code-header">
      <span class="code-label">{{ label }}</span>
      <button
        @click="copy"
        class="font-mono text-[11px] px-3 py-1.5 rounded-btn border transition-all duration-200 flex items-center gap-1.5"
        :class="copied
          ? 'bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400'
          : 'bg-surface border-border text-txt-secondary hover:border-border-hover hover:text-txt'"
      >
        <svg v-if="!copied" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <svg v-else class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        {{ copied ? '已复制' : '复制' }}
      </button>
    </div>
    <pre class="code-content"><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  code: string;
  label: string;
}>();

const copied = ref(false);

async function copy() {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  } catch {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = props.code;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  }
}
</script>
