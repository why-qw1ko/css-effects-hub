<template>
  <div>
    <!-- Filters: 手机端搜索在上、分类横向滑动；桌面端左分类右搜索 -->
    <div class="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between md:gap-4 mb-6">
      <div class="w-full min-w-0 md:flex-1">
        <CategoryNav
          :categories="allCategories"
          :active="activeCategory"
          @select="setCategory"
        />
      </div>
      <div class="w-full md:w-64 flex-shrink-0">
        <SearchBar :modelValue="searchQuery" @update:modelValue="setSearch" />
      </div>
    </div>

    <!-- Count -->
    <div class="font-sans text-xs text-txt-tertiary mb-4">
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
      <SearchX class="w-10 h-10 text-txt-tertiary mx-auto mb-4" :stroke-width="1.5" />
      <p class="font-display font-bold text-lg text-txt mb-2">未找到匹配的动效</p>
      <p class="font-sans text-sm text-txt-secondary">试试其他关键词或分类</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SearchX } from 'lucide-vue-next';
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
  { id: 'all', name: '全部', nameEn: 'All', icon: 'target', count: effects.length },
  ...store.allCategories.filter(c => c.count > 0),
]);

function setCategory(id: string) {
  store.setCategory(id);
}

function setSearch(query: string) {
  store.setSearch(query);
}
</script>
