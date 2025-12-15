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

export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textSecondary: string
}

export interface NavigationItem {
  label: string
  href: string
  icon?: string
  external?: boolean
}

export interface CodeLanguage {
  id: string
  name: string
  highlight: string
}