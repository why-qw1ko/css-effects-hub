/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(240 249 255 / <alpha-value>)',
          100: 'rgb(224 242 254 / <alpha-value>)',
          200: 'rgb(186 230 253 / <alpha-value>)',
          300: 'rgb(125 211 252 / <alpha-value>)',
          400: 'rgb(56 189 248 / <alpha-value>)',
          500: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
          600: 'rgb(2 132 199 / <alpha-value>)',
          700: 'rgb(3 105 161 / <alpha-value>)',
          800: 'rgb(7 89 133 / <alpha-value>)',
          900: 'rgb(12 74 110 / <alpha-value>)',
          950: 'rgb(8 47 73 / <alpha-value>)',
        },
        secondary: {
          50: 'rgb(253 244 255 / <alpha-value>)',
          100: 'rgb(250 232 255 / <alpha-value>)',
          200: 'rgb(245 208 254 / <alpha-value>)',
          300: 'rgb(240 171 252 / <alpha-value>)',
          400: 'rgb(232 121 249 / <alpha-value>)',
          500: 'rgb(var(--color-secondary-rgb) / <alpha-value>)',
          600: 'rgb(192 38 211 / <alpha-value>)',
          700: 'rgb(162 28 175 / <alpha-value>)',
          800: 'rgb(134 25 143 / <alpha-value>)',
          900: 'rgb(112 26 117 / <alpha-value>)',
          950: 'rgb(74 4 78 / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        }
      }
    },
  },
  plugins: [],
}