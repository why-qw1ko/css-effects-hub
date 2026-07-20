<template>
  <div class="relative">
    <div class="flex items-center bg-surface border border-border rounded-btn px-3 py-2 gap-2 transition-colors duration-200"
         :class="{ 'border-primary': focused }">
      <svg class="w-4 h-4 text-txt-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @focus="focused = true"
        @blur="focused = false"
        placeholder="搜索动效..."
        class="w-full bg-transparent border-none outline-none font-mono text-sm text-txt placeholder:text-txt-tertiary"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ modelValue: string }>();
defineEmits<{ 'update:modelValue': [value: string] }>();

const focused = ref(false);
</script>
