<template>
  <div class="cat-nav-wrap">
    <div class="cat-nav-inner">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="$emit('select', cat.id)"
        class="cat-btn"
        :class="{ active: active === cat.id }"
      >
        <span class="cat-icon">{{ cat.icon }}</span>
        <span class="cat-name">{{ cat.name }}</span>
        <span class="cat-count">{{ cat.count }}</span>
      </button>
    </div>
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

<style scoped>
.cat-nav-wrap {
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.cat-nav-wrap::-webkit-scrollbar { display: none; }

.cat-nav-inner {
  display: flex;
  gap: 6px;
  padding: 2px;
}

.cat-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: transparent;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
}
.cat-btn:hover {
  background: var(--surface);
  color: var(--text);
  border-color: var(--border);
}
.cat-btn.active {
  background: var(--card);
  color: var(--primary);
  border-color: var(--border);
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  font-weight: 600;
}
.cat-btn.active::before {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 2px;
  background: var(--primary);
  border-radius: 1px;
}

.cat-icon {
  font-size: 13px;
  line-height: 1;
}
.cat-name {
  letter-spacing: 0;
}
.cat-count {
  font-size: 10px;
  font-weight: 600;
  color: var(--text-tertiary);
  background: var(--surface-2);
  padding: 1px 6px;
  border-radius: 8px;
  min-width: 18px;
  text-align: center;
}
.cat-btn.active .cat-count {
  background: var(--primary-dim);
  color: var(--primary);
}
</style>
