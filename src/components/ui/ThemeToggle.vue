<template>
  <button
    @click="theme.toggle()"
    class="flex items-center justify-center w-9 h-9 rounded-btn border border-border bg-card hover:border-border-hover transition-all duration-200"
    :title="theme.isDark ? '切换到亮色模式' : '切换到暗色模式'"
  >
    <Sun v-if="theme.isDark" class="w-4 h-4 text-txt-secondary" />
    <Moon v-else class="w-4 h-4 text-txt-secondary" />
  </button>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next';
import { useThemeStore } from '../../stores/theme';
const theme = useThemeStore();
</script>
