<template>
  <div>
    <!-- Filters -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
      <CategoryNav
        :categories="allCategories"
        :active="activeCategory"
        @select="setCategory"
      />
      <SearchBar :modelValue="searchQuery" @update:modelValue="setSearch" />
    </div>

    <!-- Count -->
    <div class="font-mono text-xs text-txt-tertiary mb-4">
      显示 <span class="text-primary font-medium">{{ filteredCount }}</span> / {{ totalCount }}
    </div>

    <!-- Grid -->
    <div
      v-if="filteredEffects.length"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
    >
      <a
        v-for="effect in filteredEffects"
        :key="effect.id"
        :href="`${base}effect/${effect.id}`"
        class="block no-underline"
      >
        <EffectCard :effect="effect" />
      </a>
    </div>

    <!-- Empty -->
    <div v-else class="text-center py-20">
      <div class="text-4xl mb-4">🔍</div>
      <p class="font-display font-bold text-lg text-txt mb-2">未找到匹配的动效</p>
      <p class="font-mono text-sm text-txt-secondary">试试其他关键词或分类</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { effects } from '../../data/effects';
import { useEffectsStore } from '../../stores/effects';
import EffectCard from './EffectCard.vue';
import CategoryNav from '../ui/CategoryNav.vue';
import SearchBar from '../ui/SearchBar.vue';

const base = import.meta.env.BASE_URL;
const store = useEffectsStore();

const searchQuery = computed(() => store.searchQuery);
const activeCategory = computed(() => store.activeCategory);
const filteredEffects = computed(() => store.filteredEffects);
const totalCount = computed(() => store.totalCount);
const filteredCount = computed(() => store.filteredCount);

const allCategories = computed(() => [
  { id: 'all', name: '全部', nameEn: 'All', icon: '🎯', count: effects.length },
  ...store.allCategories.filter(c => c.count > 0),
]);

function setCategory(id: string) {
  store.setCategory(id);
}

function setSearch(query: string) {
  store.setSearch(query);
}
</script>
