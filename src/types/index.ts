export interface Effect {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  description: string;
  html: string;
  css: string;
  js?: string;
  prompt: string;
  previewHtml: string;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  count: number;
}

export interface ThemeColors {
  primary: string;
  bg: string;
  card: string;
  text: string;
}
