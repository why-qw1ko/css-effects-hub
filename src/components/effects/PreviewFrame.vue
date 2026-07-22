<template>
  <div
    ref="frameRef"
    class="preview-frame relative w-full flex items-center justify-center overflow-hidden"
    :style="{ height: height + 'px', background: bg }"
  >
    <div v-html="html" class="preview-content"></div>
    <div
      v-if="showOverlay"
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse at center, transparent 60%, var(--surface) 100%)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const props = withDefaults(defineProps<{
  html: string;
  height?: number;
  bg?: string;
  showOverlay?: boolean;
  injectScripts?: boolean;
}>(), {
  height: 220,
  bg: '',
  showOverlay: true,
  injectScripts: false,
});

const frameRef = ref<HTMLElement | null>(null);

function injectScriptContent() {
  if (!props.injectScripts || !frameRef.value) return;
  const scripts = frameRef.value.querySelectorAll('script');
  scripts.forEach(old => {
    const newScript = document.createElement('script');
    if (old.src) {
      newScript.src = old.src;
    } else {
      newScript.textContent = old.textContent;
    }
    old.parentNode?.replaceChild(newScript, old);
  });
}

onMounted(() => {
  injectScriptContent();
});

watch(() => props.html, () => {
  setTimeout(injectScriptContent, 50);
});
</script>
