<template>
  <div class="flex flex-wrap gap-2 justify-center">
    <button
      v-for="cat in categories"
      :key="cat.id"
      @click="$emit('select', cat.id)"
      class="font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap"
      :class="active === cat.id
        ? 'bg-gradient-to-r from-[#4F7CFF] to-[#a855f7] border-transparent text-white font-medium'
        : 'bg-surface border-border text-txt-secondary hover:border-border-hover hover:text-txt'"
    >
      {{ cat.icon }} {{ cat.name }}
      <span class="ml-1 opacity-60">{{ cat.count }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '../../types';

defineProps<{
  categories: Category[];
  active: string;
}>();

defineEmits<{ select: [id: string] }>();
</script>
