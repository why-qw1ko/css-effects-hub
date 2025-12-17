// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import { createPinia } from 'pinia';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: '/src/plugins/vue.ts'
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: node({
    mode: 'standalone'
  }),
  output: 'server',
  server: {
    port: 3000,
    host: true
  },
  // 显式配置 content 目录的位置
  contentDir: './content'
});
