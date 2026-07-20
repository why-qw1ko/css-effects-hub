import type { App } from 'vue';
import pinia from './pinia';

export default (app: App) => {
  app.use(pinia);
};
