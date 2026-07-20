/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        card: 'var(--card)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          dim: 'var(--primary-dim)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          2: 'var(--surface-2)',
        },
        txt: {
          DEFAULT: 'var(--text)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        border: {
          DEFAULT: 'var(--border)',
          hover: 'var(--border-hover)',
        },
      },
      fontFamily: {
        sans: ['Syne', 'DM Mono', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'SF Mono', 'monospace'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '14px',
        'btn': '8px',
        'full': '100px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.04)',
        'md': '0 4px 20px rgba(0,0,0,0.06)',
        'lg': '0 12px 44px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 30px rgba(79,124,255,0.12)',
      },
    },
  },
  plugins: [],
};
