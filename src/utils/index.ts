import type { Effect, Category } from '../types';
import { categories } from '../data/effects';

/**
 * Get category display info by id
 */
export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

/**
 * Get category name (Chinese) by id
 */
export function getCategoryName(id: string): string {
  return getCategoryById(id)?.name ?? id;
}

/**
 * Get category badge CSS class by id
 */
export function getCategoryBadgeClass(id: string): string {
  const map: Record<string, string> = {
    basic: 'badge-blue',
    text: 'badge-purple',
    color: 'badge-orange',
    geometry: 'badge-green',
    loading: 'badge-pink',
    hover: 'badge-green',
    scroll: 'badge-blue',
    button: 'badge-orange',
    transition: 'badge-purple',
    advanced: 'badge-pink',
    micro: 'badge-orange',
  };
  return map[id] || 'badge-gray';
}

/**
 * Copy text to clipboard with fallback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;left:-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Slugify a string for URL-safe ids
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
