import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    vue({ appEntrypoint: '/src/plugins/vue.ts' }),
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
  server: { port: 3000, host: true },
});
