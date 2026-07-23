<template>
  <header class="site-header">
    <div class="header-inner">
      <!-- Logo -->
      <a :href="base" class="logo-link">
        <div class="logo-icon">C</div>
        <span class="logo-text">CSS Design Plus</span>
      </a>

      <!-- Nav Tabs -->
      <nav class="header-nav">
        <a
          :href="base + 'effects'"
          class="nav-tab"
          :class="{ active: currentPage === 'effects' }"
        >
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7" rx="1.5"/>
            <rect x="14" y="3" width="7" height="7" rx="1.5"/>
            <rect x="3" y="14" width="7" height="7" rx="1.5"/>
            <rect x="14" y="14" width="7" height="7" rx="1.5"/>
          </svg>
          动效库
        </a>
        <a
          :href="base + 'themes'"
          class="nav-tab"
          :class="{ active: currentPage === 'themes' }"
        >
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          主题库
        </a>
        <a
          :href="base + 'advanced'"
          class="nav-tab"
          :class="{ active: currentPage === 'advanced' }"
        >
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          高级动效
        </a>
      </nav>

      <!-- Actions -->
      <div class="header-actions">
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ThemeToggle from './ThemeToggle.vue';
import { useThemeStore } from '../../stores/theme';

const base = import.meta.env.BASE_URL;

const theme = useThemeStore();
if (typeof window !== 'undefined') {
  theme.init();
}

const currentPage = computed(() => {
  if (typeof window === 'undefined') return '';
  const path = window.location.pathname;
  if (path.includes('/themes')) return 'themes';
  if (path.includes('/advanced')) return 'advanced';
  if (path.includes('/effects') || path.includes('/effect/')) return 'effects';
  return '';
});
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 9999;
  background: rgba(245, 246, 248, 0.85);
  backdrop-filter: blur(20px) saturate(1.3);
  -webkit-backdrop-filter: blur(20px) saturate(1.3);
  border-bottom: 1px solid var(--border);
}
:global(.dark) .site-header {
  background: rgba(10, 10, 12, 0.85);
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
.logo-icon {
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #4F7CFF, #a855f7);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 800;
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

@media (max-width: 768px) {
  .header-inner {
    padding: 0 16px;
  }
  .logo-text {
    display: none;
  }
  .nav-tab {
    padding: 6px 10px;
    font-size: 12px;
  }
  .nav-icon {
    width: 14px;
    height: 14px;
  }
}
</style>
