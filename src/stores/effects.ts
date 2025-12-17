import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Effect {
  id: string
  name: string
  description: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
  html: string
  css: string
  demoComponent: string
  preview?: string
  author?: string
  createdAt: string
  likes: number
}

export const useEffectsStore = defineStore('effects', () => {
  // 状态 - 主要用于UI状态管理
  const currentCategory = ref('all')
  const searchQuery = ref('')
  
  // 用于存储用户交互数据，如点赞
  const likedEffects = ref<Set<string>>(new Set())
  
  // 方法 - 主要处理用户交互
  const likeEffect = (effectId: string) => {
    if (likedEffects.value.has(effectId)) {
      likedEffects.value.delete(effectId)
    } else {
      likedEffects.value.add(effectId)
    }
    saveLikesToStorage()
  }
  
  const setCurrentCategory = (category: string) => {
    currentCategory.value = category
  }
  
  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }
  
  // 本地存储相关 - 仅用于用户交互数据
  const loadLikesFromStorage = () => {
    const saved = localStorage.getItem('css-effects-likes')
    if (saved) {
      try {
        const likes = JSON.parse(saved)
        likedEffects.value = new Set(likes)
      } catch (error) {
        console.warn('Failed to load likes from storage:', error)
      }
    }
  }
  
  const saveLikesToStorage = () => {
    localStorage.setItem('css-effects-likes', JSON.stringify([...likedEffects.value]))
  }
  
  return {
    // 状态
    currentCategory,
    searchQuery,
    likedEffects,
    // 方法
    likeEffect,
    setCurrentCategory,
    setSearchQuery,
    loadLikesFromStorage,
    saveLikesToStorage
  }
})
