<template>
  <div class="relative">
    <div class="flex items-center bg-surface border border-border rounded-btn px-3 py-2 gap-2 transition-colors duration-200"
         :class="{ 'border-primary': focused }">
      <Search class="w-4 h-4 text-txt-tertiary flex-shrink-0" />
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @focus="focused = true"
        @blur="focused = false"
        placeholder="搜索动效..."
        class="w-full bg-transparent border-none outline-none font-sans text-sm text-txt placeholder:text-txt-tertiary"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search } from 'lucide-vue-next';

defineProps<{ modelValue: string }>();
defineEmits<{ 'update:modelValue': [value: string] }>();

const focused = ref(false);
</script>
