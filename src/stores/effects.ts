import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { effects, categories } from '../data/effects';
import type { Effect, Category } from '../types';

export const useEffectsStore = defineStore('effects', () => {
  const searchQuery = ref('');
  const activeCategory = ref('all');
  const copiedId = ref<string | null>(null);

  const filteredEffects = computed(() => {
    let result = effects;

    if (activeCategory.value !== 'all') {
      result = result.filter(e => e.category === activeCategory.value);
    }

    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase();
      result = result.filter(e =>
        e.name.toLowerCase().includes(q) ||
        e.nameEn.toLowerCase().includes(q) ||
        e.description.includes(q) ||
        e.tags.some(t => t.includes(q))
      );
    }

    return result;
  });

  const totalCount = computed(() => effects.length);
  const filteredCount = computed(() => filteredEffects.value.length);

  const allCategories = computed<Category[]>(() => {
    const cats = categories.map(cat => ({
      ...cat,
      count: effects.filter(e => e.category === cat.id).length,
    }));
    return cats;
  });

  function setCategory(cat: string) {
    activeCategory.value = cat;
  }

  function setSearch(query: string) {
    searchQuery.value = query;
  }

  function setCopied(id: string | null) {
    copiedId.value = id;
  }

  return {
    searchQuery,
    activeCategory,
    copiedId,
    filteredEffects,
    totalCount,
    filteredCount,
    allCategories,
    setCategory,
    setSearch,
    setCopied,
  };
});
