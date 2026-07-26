<template>
  <header class="site-header">
    <div class="header-inner">
      <!-- Logo -->
      <a :href="base" class="logo-link">
        <svg class="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect width="32" height="32" rx="9" fill="url(#logoGrad)" />
          <path d="M12.5 8.5 C9.8 8.5 9.8 10 9.8 12 C9.8 14 9.8 15 7.5 16 C9.8 17 9.8 18 9.8 20 C9.8 22 9.8 23.5 12.5 23.5" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none" />
          <path d="M19.5 8.5 C22.2 8.5 22.2 10 22.2 12 C22.2 14 22.2 15 24.5 16 C22.2 17 22.2 18 22.2 20 C22.2 22 22.2 23.5 19.5 23.5" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none" />
          <path d="M16 11.5 L17 14.8 L20.3 16 L17 17.2 L16 20.5 L15 17.2 L11.7 16 L15 14.8 Z" fill="#fff" />
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#4F7CFF" />
              <stop offset="0.55" stop-color="#8b5cf6" />
              <stop offset="1" stop-color="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <span class="logo-text">CSS Design Plus</span>
      </a>

      <!-- Nav Tabs -->
      <nav class="header-nav">
        <a
          v-for="link in navLinks"
          :key="link.page"
          :href="base + link.path"
          class="nav-tab"
          :class="{ active: currentPage === link.page }"
        >
          <component :is="link.icon" class="nav-icon" />
          {{ link.label }}
        </a>
      </nav>

      <!-- Actions -->
      <div class="header-actions">
        <ThemeToggle />
        <button class="menu-btn" aria-label="菜单" @click="menuOpen = !menuOpen">
          <Menu v-if="!menuOpen" />
          <X v-else />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="menu-fade">
      <nav v-if="menuOpen" class="mobile-menu">
        <a
          v-for="link in navLinks"
          :key="link.page"
          :href="base + link.path"
          class="mobile-menu-item"
          :class="{ active: currentPage === link.page }"
          @click="menuOpen = false"
        >
          <component :is="link.icon" class="nav-icon" />
          {{ link.label }}
        </a>
      </nav>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, markRaw } from 'vue';
import { LayoutGrid, Palette, Sparkles, Info, Home, Menu, X } from 'lucide-vue-next';
import ThemeToggle from './ThemeToggle.vue';
import { useThemeStore } from '../../stores/theme';

const base = import.meta.env.BASE_URL;
const menuOpen = ref(false);

const navLinks = [
  { page: 'home', path: '', label: '首页', icon: markRaw(Home) },
  { page: 'effects', path: 'effects', label: '动效库', icon: markRaw(LayoutGrid) },
  { page: 'themes', path: 'themes', label: '主题库', icon: markRaw(Palette) },
  { page: 'advanced', path: 'advanced', label: '高级动效', icon: markRaw(Sparkles) },
  { page: 'about', path: 'about', label: '关于', icon: markRaw(Info) },
];

const theme = useThemeStore();
if (typeof window !== 'undefined') {
  theme.init();
}

// Computed after mount to avoid SSR/client hydration class mismatch
const currentPage = ref('');
onMounted(() => {
  const path = window.location.pathname;
  if (path.includes('/themes')) currentPage.value = 'themes';
  else if (path.includes('/advanced')) currentPage.value = 'advanced';
  else if (path.includes('/about')) currentPage.value = 'about';
  else if (path.includes('/effects') || path.includes('/effect/')) currentPage.value = 'effects';
  else currentPage.value = 'home';
});
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 9999;
  background: color-mix(in srgb, var(--bg) 86%, transparent);
  backdrop-filter: blur(20px) saturate(1.3);
  -webkit-backdrop-filter: blur(20px) saturate(1.3);
  border-bottom: 1px solid var(--border);
}
:global(.dark) .site-header {
  background: color-mix(in srgb, var(--bg) 88%, transparent);
}

.header-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 24px;
}

/* Logo */
.logo-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}
.logo-mark {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.logo-link:hover .logo-mark {
  transform: rotate(-6deg) scale(1.06);
  box-shadow: 0 4px 14px rgba(139, 92, 246, 0.5);
}
.logo-text {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0;
}

/* Nav */
.header-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 10px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
}
.nav-tab:hover {
  color: var(--text);
  background: var(--surface);
}
.nav-tab.active {
  color: var(--primary);
  background: var(--primary-dim);
  font-weight: 600;
}
.nav-tab.active::after {
  content: '';
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: var(--primary);
  border-radius: 1px;
}
.nav-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

/* Hamburger (mobile only) */
.menu-btn {
  display: none;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s ease;
}
.menu-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}
.menu-btn svg {
  width: 18px;
  height: 18px;
  stroke-width: 2;
}

/* Mobile dropdown menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 2px;
  padding: 8px 12px 12px;
  border-top: 1px solid var(--border);
}
.mobile-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border-radius: 10px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}
.mobile-menu-item:active,
.mobile-menu-item:hover {
  background: var(--surface);
  color: var(--text);
}
.mobile-menu-item.active {
  color: var(--primary);
  background: var(--primary-dim);
  font-weight: 600;
}
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 768px) {
  .header-inner {
    padding: 0 16px;
  }
  .logo-text {
    display: none;
  }
  .header-nav {
    display: none;
  }
  .menu-btn {
    display: flex;
  }
  .mobile-menu {
    display: flex;
  }
}
</style>
