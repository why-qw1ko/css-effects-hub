import type { Effect, Category } from '../types';

export const categories: Category[] = [
  { id: 'basic', name: '基础动画', nameEn: 'Basic', icon: '✨', count: 0 },
  { id: 'text', name: '文字效果', nameEn: 'Text', icon: '✏️', count: 0 },
  { id: 'cursor', name: '光标交互', nameEn: 'Cursor', icon: '🖱️', count: 0 },
  { id: 'card', name: '卡片组件', nameEn: 'Card', icon: '🃏', count: 0 },
  { id: 'loading', name: '加载动画', nameEn: 'Loading', icon: '⏳', count: 0 },
  { id: 'background', name: '背景氛围', nameEn: 'Background', icon: '🌌', count: 0 },
  { id: 'scroll', name: '滚动效果', nameEn: 'Scroll', icon: '📜', count: 0 },
  { id: 'button', name: '按钮交互', nameEn: 'Button', icon: '🔘', count: 0 },
  { id: 'transition', name: '过渡转场', nameEn: 'Transition', icon: '🔀', count: 0 },
  { id: 'micro', name: '微交互', nameEn: 'Micro', icon: '⚡', count: 0 },
  { id: 'shape', name: '形状变换', nameEn: 'Shape', icon: '🔷', count: 0 },
];

export const effects: Effect[] = [
  // ═══ 基础动画 ═══
  {
    id: 'fade-in',
    name: '淡入',
    nameEn: 'Fade In',
    category: 'basic',
    difficulty: 'easy',
    tags: ['淡入', '入场', '基础', '透明度'],
    description: '元素从完全透明渐变到可见，最基础的入场动效。',
    html: '<div class="element">Content</div>',
    css: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.element {
  animation: fadeIn 0.6s ease forwards;
}`,
    prompt: '请用纯CSS实现一个淡入动画效果。要求：使用@keyframes定义动画，从opacity:0过渡到opacity:1，动画时长0.6秒，缓动函数为ease，动画填充模式为forwards保持最终状态。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:fadeIn_ 1.5s ease infinite"></div>',
  },
  {
    id: 'fade-out',
    name: '淡出',
    nameEn: 'Fade Out',
    category: 'basic',
    difficulty: 'easy',
    tags: ['淡出', '退场', '基础', '透明度'],
    description: '元素从可见渐变到完全透明，常用于退场。',
    html: '<div class="element">Content</div>',
    css: `@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
.element {
  animation: fadeOut 0.6s ease forwards;
}`,
    prompt: '请用纯CSS实现一个淡出动画效果。要求：使用@keyframes定义动画，从opacity:1过渡到opacity:0，动画时长0.6秒，缓动函数为ease。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:fadeOut_ 1.5s ease infinite"></div>',
  },
  {
    id: 'slide-in-left',
    name: '滑入左',
    nameEn: 'Slide In Left',
    category: 'basic',
    difficulty: 'easy',
    tags: ['滑入', '入场', '左', '位移'],
    description: '元素从左侧滑入到原位，适用于列表和面板。',
    html: '<div class="element">Slide</div>',
    css: `@keyframes slideInLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.element {
  animation: slideInLeft 0.5s ease forwards;
}`,
    prompt: '请用纯CSS实现一个从左侧滑入的动画效果。要求：使用@keyframes，从translateX(-100%)和opacity:0过渡到translateX(0)和opacity:1，时长0.5秒。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:slideL_ 1.5s ease infinite"></div>',
  },
  {
    id: 'slide-in-right',
    name: '滑入右',
    nameEn: 'Slide In Right',
    category: 'basic',
    difficulty: 'easy',
    tags: ['滑入', '入场', '右', '位移'],
    description: '元素从右侧滑入到原位。',
    html: '<div class="element">Slide</div>',
    css: `@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.element {
  animation: slideInRight 0.5s ease forwards;
}`,
    prompt: '请用纯CSS实现一个从右侧滑入的动画效果。要求：使用@keyframes，从translateX(100%)和opacity:0过渡到translateX(0)和opacity:1，时长0.5秒。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:slideR_ 1.5s ease infinite"></div>',
  },
  {
    id: 'slide-in-up',
    name: '滑入上',
    nameEn: 'Slide In Up',
    category: 'basic',
    difficulty: 'easy',
    tags: ['滑入', '入场', '上', '位移'],
    description: '元素从下方滑入到原位，适用于底部弹出面板。',
    html: '<div class="element">Slide</div>',
    css: `@keyframes slideInUp {
  from { transform: translateY(60px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.element {
  animation: slideInUp 0.5s ease forwards;
}`,
    prompt: '请用纯CSS实现一个从下方滑入的动画效果。要求：使用@keyframes，从translateY(60px)和opacity:0过渡到translateY(0)和opacity:1，时长0.5秒。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:slideU_ 1.5s ease infinite"></div>',
  },
  {
    id: 'slide-in-down',
    name: '滑入下',
    nameEn: 'Slide In Down',
    category: 'basic',
    difficulty: 'easy',
    tags: ['滑入', '入场', '下', '位移'],
    description: '元素从上方滑入，用于下拉菜单和通知栏。',
    html: '<div class="element">Slide</div>',
    css: `@keyframes slideInDown {
  from { transform: translateY(-60px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.element {
  animation: slideInDown 0.5s ease forwards;
}`,
    prompt: '请用纯CSS实现一个从上方滑入的动画效果。要求：使用@keyframes，从translateY(-60px)和opacity:0过渡到translateY(0)和opacity:1，时长0.5秒。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:slideD_ 1.5s ease infinite"></div>',
  },
  {
    id: 'scale-in',
    name: '缩放入',
    nameEn: 'Scale In',
    category: 'basic',
    difficulty: 'easy',
    tags: ['缩放', '入场', '弹出'],
    description: '元素从小到大缩放出现，配合透明度营造弹出感。',
    html: '<div class="element">Pop</div>',
    css: `@keyframes scaleIn {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.element {
  animation: scaleIn 0.4s cubic-bezier(.175,.885,.32,1.275) forwards;
}`,
    prompt: '请用纯CSS实现一个缩放入场动画。要求：使用@keyframes，从scale(0)和opacity:0过渡到scale(1)和opacity:1，缓动函数使用cubic-bezier(.175,.885,.32,1.275)实现弹性效果。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:scaleI_ 1.5s cubic-bezier(.175,.885,.32,1.275) infinite"></div>',
  },
  {
    id: 'bounce-in',
    name: '弹跳入场',
    nameEn: 'Bounce In',
    category: 'basic',
    difficulty: 'medium',
    tags: ['弹跳', '入场', '弹性'],
    description: '元素以弹跳效果出现，有明显的回弹感。',
    html: '<div class="element">Bounce</div>',
    css: `@keyframes bounceIn {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.1); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}
.element {
  animation: bounceIn 0.8s ease forwards;
}`,
    prompt: '请用纯CSS实现一个弹跳入场动画。要求：使用@keyframes定义多段动画，0%时scale(0.3)透明，50%时scale(1.1)放大，70%时scale(0.9)回弹，100%时scale(1)正常。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:bounceI_ 1.8s ease infinite"></div>',
  },
  {
    id: 'flip-in',
    name: '翻转入场',
    nameEn: 'Flip In',
    category: 'basic',
    difficulty: 'medium',
    tags: ['翻转', '入场', '3D'],
    description: '元素沿Y轴翻转出现，像翻开一页纸。',
    html: '<div class="element">Flip</div>',
    css: `@keyframes flipIn {
  from { transform: perspective(400px) rotateY(90deg); opacity: 0; }
  to { transform: perspective(400px) rotateY(0); opacity: 1; }
}
.element {
  animation: flipIn 0.6s ease forwards;
}`,
    prompt: '请用纯CSS实现一个翻转入场动画。要求：使用@keyframes，配合perspective(400px)创建3D空间，从rotateY(90deg)翻转到rotateY(0)，同时opacity从0到1。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:flipI_ 1.8s ease infinite"></div>',
  },
  {
    id: 'rotate-in',
    name: '旋转入场',
    nameEn: 'Rotate In',
    category: 'basic',
    difficulty: 'medium',
    tags: ['旋转', '入场', '变换'],
    description: '元素旋转出现，适合加载完成后的内容展示。',
    html: '<div class="element">Rotate</div>',
    css: `@keyframes rotateIn {
  from { transform: rotate(-180deg) scale(0); opacity: 0; }
  to { transform: rotate(0) scale(1); opacity: 1; }
}
.element {
  animation: rotateIn 0.6s ease forwards;
}`,
    prompt: '请用纯CSS实现一个旋转入场动画。要求：使用@keyframes，从rotate(-180deg) scale(0)和opacity:0过渡到rotate(0) scale(1)和opacity:1，时长0.6秒。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:rotateI_ 1.8s ease infinite"></div>',
  },
  {
    id: 'elastic-scale',
    name: '弹性缩放',
    nameEn: 'Elastic Scale',
    category: 'basic',
    difficulty: 'medium',
    tags: ['弹性', '缩放', '物理'],
    description: '元素先放大再缩小的弹性效果，活泼且有反馈感。',
    html: '<div class="element"></div>',
    css: `@keyframes elasticScale {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}
.element {
  animation: elasticScale 0.6s ease forwards;
}`,
    prompt: '请用纯CSS实现一个弹性缩放动画。要求：使用@keyframes，0%时scale(0)，50%时scale(1.2)过度放大，70%时scale(0.9)回弹，100%时scale(1)归位。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:elaS_ 1.5s ease infinite"></div>',
  },
  {
    id: 'drop-bounce',
    name: '弹性掉落',
    nameEn: 'Drop Bounce',
    category: 'basic',
    difficulty: 'medium',
    tags: ['掉落', '弹跳', '物理'],
    description: '元素从上方掉落并弹跳数次后静止。',
    html: '<div class="element">Drop</div>',
    css: `@keyframes dropBounce {
  0% { transform: translateY(-80px); opacity: 0; }
  60% { transform: translateY(8px); opacity: 1; }
  75% { transform: translateY(-4px); }
  90% { transform: translateY(2px); }
  100% { transform: translateY(0); }
}
.element {
  animation: dropBounce 0.8s ease forwards;
}`,
    prompt: '请用纯CSS实现一个弹性掉落动画。要求：使用@keyframes，元素从上方translateY(-80px)掉落，60%时落到translateY(8px)，75%弹起translateY(-4px)，90%再落translateY(2px)，100%归位。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:dropB_ 2s ease infinite"></div>',
  },
];

// Preview keyframes (injected globally for preview containers)
export const previewKeyframes = `
@keyframes fadeIn_{0%{opacity:0}100%{opacity:1}}
@keyframes fadeOut_{0%{opacity:1}100%{opacity:0}}
@keyframes slideL_{0%{transform:translateX(-100%);opacity:0}100%{transform:translateX(0);opacity:1}}
@keyframes slideR_{0%{transform:translateX(100%);opacity:0}100%{transform:translateX(0);opacity:1}}
@keyframes slideU_{0%{transform:translateY(60px);opacity:0}100%{transform:translateY(0);opacity:1}}
@keyframes slideD_{0%{transform:translateY(-60px);opacity:0}100%{transform:translateY(0);opacity:1}}
@keyframes scaleI_{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}
@keyframes bounceI_{0%{transform:scale(.3);opacity:0}50%{transform:scale(1.1)}70%{transform:scale(.9)}100%{transform:scale(1);opacity:1}}
@keyframes flipI_{0%{transform:perspective(400px) rotateY(90deg);opacity:0}100%{transform:perspective(400px) rotateY(0);opacity:1}}
@keyframes rotateI_{0%{transform:rotate(-180deg) scale(0);opacity:0}100%{transform:rotate(0) scale(1);opacity:1}}
@keyframes elaS_{0%{transform:scale(0)}50%{transform:scale(1.2)}70%{transform:scale(.9)}100%{transform:scale(1)}}
@keyframes dropB_{0%{transform:translateY(-80px);opacity:0}60%{transform:translateY(8px);opacity:1}75%{transform:translateY(-4px)}90%{transform:translateY(2px)}100%{transform:translateY(0)}}
`;
