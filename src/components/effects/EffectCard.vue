<template>
  <div class="card cursor-pointer group" @click="$emit('click', effect)">
    <!-- Preview -->
    <div class="preview-container">
      <div class="preview-content relative z-10" v-html="effect.previewHtml"></div>
    </div>

    <!-- Info -->
    <div class="p-4">
      <div class="flex items-center justify-between mb-2 gap-3">
        <span class="badge" :class="categoryBadgeClass">{{ categoryName }}</span>
        <span class="font-sans text-[10px] text-txt-tertiary uppercase tracking-wider">{{ effect.nameEn }}</span>
      </div>
      <h3 class="font-display font-bold text-base text-txt mb-1">{{ effect.name }}</h3>
      <p class="font-sans text-xs text-txt-secondary leading-relaxed line-clamp-2">{{ effect.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Effect } from '../../types';
import { categories } from '../../data/effects';

const props = defineProps<{ effect: Effect }>();
defineEmits<{ click: [effect: Effect] }>();

const categoryName = computed(() => {
  const cat = categories.find(c => c.id === props.effect.category);
  return cat ? cat.name : props.effect.category;
});

const categoryBadgeClass = computed(() => {
  const map: Record<string, string> = {
    basic: 'badge-blue',
    text: 'badge-purple',
    color: 'badge-orange',
    geometry: 'badge-green',
    loading: 'badge-pink',
    hover: 'badge-green',
    scroll: 'badge-blue',
    button: 'badge-orange',
    transition: 'badge-purple',
    advanced: 'badge-pink',
    micro: 'badge-orange',
  };
  return map[props.effect.category] || 'badge-gray';
});
</script>
