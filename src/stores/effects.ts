import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

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
  // 状态
  const effects = ref<Effect[]>([])
  const currentCategory = ref('all')
  const searchQuery = ref('')
  
  // 计算属性
  const filteredEffects = computed(() => {
    let filtered = effects.value
    
    // 分类过滤
    if (currentCategory.value !== 'all') {
      filtered = filtered.filter(effect => effect.category === currentCategory.value)
    }
    
    // 搜索过滤
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(effect =>
        effect.name.toLowerCase().includes(query) ||
        effect.description.toLowerCase().includes(query) ||
        effect.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    return filtered
  })
  
  const categories = computed(() => {
    const cats = new Set(effects.value.map(effect => effect.category))
    return Array.from(cats)
  })
  
  const popularEffects = computed(() => {
    return [...effects.value]
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 6)
  })
  
  // 方法
  const addEffect = (effect: Omit<Effect, 'id' | 'createdAt' | 'likes'>) => {
    const newEffect: Effect = {
      ...effect,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      likes: 0
    }
    effects.value.push(newEffect)
    saveEffectsToStorage()
  }
  
  const updateEffect = (id: string, updates: Partial<Effect>) => {
    const index = effects.value.findIndex(effect => effect.id === id)
    if (index !== -1) {
      effects.value[index] = { ...effects.value[index], ...updates }
      saveEffectsToStorage()
    }
  }
  
  const deleteEffect = (id: string) => {
    effects.value = effects.value.filter(effect => effect.id !== id)
    saveEffectsToStorage()
  }
  
  const likeEffect = (id: string) => {
    const effect = effects.value.find(effect => effect.id === id)
    if (effect) {
      effect.likes++
      saveEffectsToStorage()
    }
  }
  
  const setCurrentCategory = (category: string) => {
    currentCategory.value = category
  }
  
  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }
  
  const loadEffectsFromStorage = () => {
    const saved = localStorage.getItem('css-effects')
    if (saved) {
      try {
        effects.value = JSON.parse(saved)
      } catch (error) {
        console.warn('Failed to load effects from storage:', error)
      }
    }
  }
  
  const saveEffectsToStorage = () => {
    localStorage.setItem('css-effects', JSON.stringify(effects.value))
  }

  // 解析Markdown文件
  const parseMarkdown = (content: string): { frontmatter: any, code: string } => {
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
    if (!frontmatterMatch) {
      return { frontmatter: {}, code: content }
    }
    
    const frontmatterText = frontmatterMatch[1]
    const code = frontmatterMatch[2]
    
    // 简单的YAML解析（仅支持基本类型）
    const frontmatter: any = {}
    frontmatterText.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(': ')
      if (key && valueParts.length > 0) {
        const value = valueParts.join(': ').trim()
        // 尝试解析JSON格式的数组
        if (value.startsWith('[') && value.endsWith(']')) {
          try {
            frontmatter[key] = JSON.parse(value)
          } catch {
            frontmatter[key] = value
          }
        } else {
          frontmatter[key] = value
        }
      }
    })
    
    return { frontmatter, code }
  }

  // 从Markdown文件中提取代码示例
  const extractCodeExamples = (content: string): { html: string, css: string } => {
    const codeBlocks = content.match(/```(\w+)?\n([\s\S]*?)```/g) || []
    let html = ''
    let css = ''
    
    codeBlocks.forEach(block => {
      const match = block.match(/```(\w+)?\n([\s\S]*?)```/)
      if (match) {
        const language = match[1] || ''
        const code = match[2].trim()
        
        if (language === 'html' || language === '') {
          html = code
        } else if (language === 'css') {
          css = code
        }
      }
    })
    
    return { html, css }
  }

  // 从Markdown文件加载动效数据
  const loadEffectsFromMarkdown = async () => {
    const effectFiles = [
      'floating-card.md',
      'pulse-button.md', 
      'loading-spinner.md',
      'gradient-border.md',
      'text-slide.md',
      'navigation-hover.md',
      'flip-card.md',
      'ripple-button.md',
      'text-shake.md',
      'marquee-text.md'
    ]
    
    const loadedEffects: Effect[] = []
    
    for (const fileName of effectFiles) {
      try {
        const response = await fetch(`/content/effects/${fileName}`)
        if (response.ok) {
          const content = await response.text()
          const { frontmatter } = parseMarkdown(content)
          const { html, css } = extractCodeExamples(content)
          
          const effect: Effect = {
            id: frontmatter.id || Date.now().toString(),
            name: frontmatter.name || 'Unknown Effect',
            description: frontmatter.description || '',
            category: frontmatter.category || '其他',
            difficulty: frontmatter.difficulty || 'easy',
            tags: frontmatter.tags || [],
            html: html,
            css: css,
            demoComponent: frontmatter.demoComponent || 'EffectCard',
            author: frontmatter.author || 'Anonymous',
            createdAt: frontmatter.createdAt || new Date().toISOString(),
            likes: parseInt(frontmatter.likes) || 0
          }
          
          loadedEffects.push(effect)
        }
      } catch (error) {
        console.warn(`Failed to load ${fileName}:`, error)
      }
    }
    
    return loadedEffects
  }

  // 初始化示例数据
  const initializeSampleEffects = async () => {
    if (effects.value.length === 0) {
      const markdownEffects = await loadEffectsFromMarkdown()
      
      if (markdownEffects.length > 0) {
        effects.value = markdownEffects
      } else {
        // 备用数据 - 简单的示例
        const fallbackEffects: Effect[] = [
          {
            id: '1',
            name: '浮动卡片',
            description: '具有悬停浮动效果的卡片组件，带有阴影和缩放动画',
            category: '卡片',
            difficulty: 'easy',
            tags: ['卡片', '悬停', '浮动', '阴影'],
            html: `<div class="floating-card"><h3>浮动卡片</h3><p>悬停我试试！</p></div>`,
            css: `.floating-card { padding: 2rem; background: white; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); } .floating-card:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }`,
            demoComponent: 'FloatingCard',
            author: 'MiniMax Agent',
            createdAt: new Date().toISOString(),
            likes: 42
          }
        ]
        effects.value = fallbackEffects
      }
      
      saveEffectsToStorage()
    }
  }
  
  return {
    // 状态
    effects,
    currentCategory,
    searchQuery,
    // 计算属性
    filteredEffects,
    categories,
    popularEffects,
    // 方法
    addEffect,
    updateEffect,
    deleteEffect,
    likeEffect,
    setCurrentCategory,
    setSearchQuery,
    loadEffectsFromStorage,
    saveEffectsToStorage,
    initializeSampleEffects
  }
})