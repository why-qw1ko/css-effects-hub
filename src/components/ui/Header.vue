<template>
  <header class="sticky top-0 z-100 bg-card/80 backdrop-blur-xl border-b border-border">
    <div class="max-w-[1400px] mx-auto flex items-center justify-between h-16 px-6">
      <!-- Logo -->
      <a :href="base" class="flex items-center gap-3 no-underline">
        <div class="w-7 h-7 rounded-btn bg-gradient-to-br from-[#4F7CFF] to-[#a855f7] flex items-center justify-center text-white text-xs font-bold font-display">C</div>
        <span class="font-display font-bold text-lg tracking-tight text-txt">CSS Design Plus</span>
      </a>

      <!-- Nav -->
      <nav class="hidden md:flex items-center gap-6">
        <a :href="base" class="font-mono text-sm text-txt-secondary hover:text-txt transition-colors">首页</a>
        <a :href="base + 'effects'" class="font-mono text-sm text-txt-secondary hover:text-txt transition-colors">动效库</a>
        <a :href="base + 'about'" class="font-mono text-sm text-txt-secondary hover:text-txt transition-colors">关于</a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';
import { useThemeStore } from '../../stores/theme';

const base = import.meta.env.BASE_URL;

const theme = useThemeStore();
if (typeof window !== 'undefined') {
  theme.init();
}
</script>
