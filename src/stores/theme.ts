import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false);

  function init() {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('cdp-theme');
    if (saved) {
      isDark.value = saved === 'dark';
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    apply();
  }

  function toggle() {
    isDark.value = !isDark.value;
    apply();
  }

  function apply() {
    if (typeof document === 'undefined') return;
    if (isDark.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('cdp-theme', isDark.value ? 'dark' : 'light');
  }

  return { isDark, init, toggle };
});
