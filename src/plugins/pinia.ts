import { createPinia } from 'pinia'
import type { App } from 'vue'

export function setupPinia(app: App) {
  const pinia = createPinia()
  
  // 如果有开发环境配置，可以在这里添加
  if (import.meta.env.DEV) {
    console.log('Pinia 初始化完成')
  }
  
  app.use(pinia)
  return pinia
}