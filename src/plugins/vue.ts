import type { App } from 'vue';
import { createPinia } from 'pinia';

// 创建 Pinia 实例
const pinia = createPinia();

// 导出应用插件
export default (app: App) => {
  // 安装 Pinia
  app.use(pinia);
};
