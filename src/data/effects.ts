import type { Effect, Category } from '../types';

export const categories: Category[] = [
  { id: 'basic', name: '基础动画', nameEn: 'Basic', icon: '✨', count: 12 },
  { id: 'text', name: '文字效果', nameEn: 'Text', icon: '✏️', count: 15 },
  { id: 'color', name: '颜色效果', nameEn: 'Color', icon: '🎨', count: 10 },
  { id: 'geometry', name: '几何变换', nameEn: 'Geometry', icon: '🔷', count: 10 },
  { id: 'loading', name: '加载动画', nameEn: 'Loading', icon: '⏳', count: 12 },
  { id: 'hover', name: '悬停交互', nameEn: 'Hover', icon: '🖱️', count: 10 },
  { id: 'scroll', name: '滚动效果', nameEn: 'Scroll', icon: '📜', count: 10 },
  { id: 'button', name: '按钮交互', nameEn: 'Button', icon: '🔘', count: 10 },
  { id: 'transition', name: '过渡转场', nameEn: 'Transition', icon: '🔀', count: 8 },
  { id: 'advanced', name: '高级效果', nameEn: 'Advanced', icon: '🚀', count: 16 },
  { id: 'micro', name: '微交互', nameEn: 'Micro', icon: '⚡', count: 10 },
];

export const effects: Effect[] = [
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
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:fadeIn_ 1.5s ease infinite"></div>'
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
    prompt: '请用纯CSS实现一个淡出动画效果。要求：使用@keyframes定义动画，从opacity:1过渡到opacity:0，动画时长0.6秒。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:fadeOut_ 1.5s ease infinite"></div>'
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
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:slideL_ 1.5s ease infinite"></div>'
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
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:slideR_ 1.5s ease infinite"></div>'
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
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:slideU_ 1.5s ease infinite"></div>'
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
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:slideD_ 1.5s ease infinite"></div>'
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
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:scaleI_ 1.5s cubic-bezier(.175,.885,.32,1.275) infinite"></div>'
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
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:bounceI_ 1.8s ease infinite"></div>'
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
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:flipI_ 1.8s ease infinite"></div>'
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
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:rotateI_ 1.8s ease infinite"></div>'
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
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:elaS_ 1.5s ease infinite"></div>'
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
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:dropB_ 2s ease infinite"></div>'
  },
  {
    id: 'typewriter',
    name: '打字机',
    nameEn: 'Typewriter',
    category: 'text',
    difficulty: 'easy',
    tags: ['打字机', '文字', '逐字', '输入'],
    description: '文字逐字显示，像打字机输入，适用于标题和代码展示。',
    html: '<div class="typewriter">Hello World</div>',
    css: `@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes blink {
  50% { border-color: transparent; }
}
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #fff;
  animation: typing 2s steps(8) forwards,
             blink 0.6s step-end infinite;
}`,
    prompt: '请用纯CSS实现一个打字机效果。要求：文字使用overflow:hidden隐藏溢出，通过@keyframes从width:0到width:100%逐步显示文字，配合border-right闪烁模拟光标，使用steps()实现逐字效果。',
    previewHtml: '<div style="font-family:monospace;font-size:14px;color:var(--primary);overflow:hidden;white-space:nowrap;border-right:2px solid var(--primary);animation:typ_ 2s steps(8) infinite,bl_ .6s step-end infinite">Motion Lab</div>'
  },
  {
    id: 'char-fade',
    name: '逐字淡入',
    nameEn: 'Char Fade',
    category: 'text',
    difficulty: 'medium',
    tags: ['逐字', '淡入', '文字', '节奏'],
    description: '每个字符依次淡入出现，节奏感强。',
    html: '<span class="char">H</span><span class="char">i</span>',
    css: `@keyframes charFade {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.char {
  display: inline-block;
  opacity: 0;
  animation: charFade 0.4s ease forwards;
}
.char:nth-child(2) { animation-delay: 0.05s; }`,
    prompt: '请用纯CSS实现逐字淡入效果。要求：每个字符用span包裹，使用@keyframes从opacity:0和translateY(10px)过渡到opacity:1和translateY(0)，通过nth-child设置不同的animation-delay实现依次入场。',
    previewHtml: '<div style="display:flex;gap:2px"><span style="animation:fadeIn_ .5s ease infinite alternate">M</span><span style="animation:fadeIn_ .5s ease .1s infinite alternate">o</span><span style="animation:fadeIn_ .5s ease .2s infinite alternate">t</span><span style="animation:fadeIn_ .5s ease .3s infinite alternate">i</span><span style="animation:fadeIn_ .5s ease .4s infinite alternate">o</span><span style="animation:fadeIn_ .5s ease .5s infinite alternate">n</span></div>'
  },
  {
    id: 'glitch',
    name: '故障抖动',
    nameEn: 'Glitch Text',
    category: 'text',
    difficulty: 'easy',
    tags: ['故障', '抖动', '科技', '文字'],
    description: '文字产生故障错位效果，科技感十足。',
    html: '<div class="glitch">GLITCH</div>',
    css: `@keyframes glitch {
  0%,100% { text-shadow: none; }
  20% { text-shadow: -2px 0 #ff00c1, 2px 0 #00fff9; }
  40% { text-shadow: 2px 0 #ff00c1, -2px 0 #00fff9; }
  60% { text-shadow: -1px 0 #ff00c1, 1px 0 #00fff9; }
  80% { text-shadow: 1px 0 #ff00c1, -1px 0 #00fff9; }
}
.glitch { animation: glitch 2s ease infinite; }`,
    prompt: '请用纯CSS实现文字故障抖动效果。要求：使用@keyframes通过text-shadow在红蓝两色之间交替偏移，模拟信号故障的错位感，动画时长2秒循环播放。',
    previewHtml: '<div style="font-family:monospace;font-size:16px;font-weight:bold;animation:glitch_ 2s ease infinite">GLITCH</div>'
  },
  {
    id: 'gradient-text',
    name: '渐变流动文字',
    nameEn: 'Gradient Text',
    category: 'text',
    difficulty: 'easy',
    tags: ['渐变', '流动', '文字', '彩色'],
    description: '文字颜色呈现渐变并持续流动。',
    html: '<div class="gradient-text">Gradient</div>',
    css: `@keyframes textGradient {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
.gradient-text {
  background: linear-gradient(90deg, #00e5a0, #0ea5e9, #fff, #0ea5e9, #00e5a0);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textGradient 3s linear infinite;
}`,
    prompt: '请用纯CSS实现渐变流动文字效果。要求：使用background-clip:text将渐变背景裁剪到文字上，通过@keyframes改变background-position实现颜色流动，background-size设为200%确保流畅过渡。',
    previewHtml: '<div style="font-family:monospace;font-size:16px;font-weight:bold;background:linear-gradient(90deg,var(--primary),#a855f7,#fff,#a855f7,var(--primary));background-size:200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:tGrad_ 3s linear infinite">Gradient</div>'
  },
  {
    id: 'bounce-char',
    name: '文字弹跳',
    nameEn: 'Bounce Char',
    category: 'text',
    difficulty: 'easy',
    tags: ['弹跳', '文字', '活力', '交替'],
    description: '每个字母交替上下弹跳，充满活力。',
    html: '<span class="char">B</span><span class="char">o</span>',
    css: `@keyframes bounceChar {
  from { transform: translateY(0); }
  to { transform: translateY(-10px); }
}
.char {
  display: inline-block;
  animation: bounceChar 0.6s ease infinite alternate;
}
.char:nth-child(2) { animation-delay: 0.1s; }`,
    prompt: '请用纯CSS实现文字弹跳效果。要求：每个字符用span包裹display:inline-block，使用@keyframes在translateY(0)和translateY(-10px)之间交替，通过animation-delay错开每个字符的起始时间。',
    previewHtml: '<div style="display:flex;gap:2px"><span style="animation:bC_ .6s ease infinite alternate">B</span><span style="animation:bC_ .6s ease .1s infinite alternate">o</span><span style="animation:bC_ .6s ease .2s infinite alternate">u</span><span style="animation:bC_ .6s ease .3s infinite alternate">n</span><span style="animation:bC_ .6s ease .4s infinite alternate">c</span><span style="animation:bC_ .6s ease .5s infinite alternate">e</span></div>'
  },
  {
    id: 'underline-slide',
    name: '下划线滑动',
    nameEn: 'Underline Slide',
    category: 'text',
    difficulty: 'easy',
    tags: ['下划线', '滑动', '悬停', '链接'],
    description: '下划线从左向右滑入覆盖文字，悬停常用。',
    html: '<a class="link" href="#">Hover me</a>',
    css: `@keyframes underlineSlide {
  from { transform: scaleX(0); transform-origin: left; }
  to { transform: scaleX(1); transform-origin: left; }
}
.link {
  position: relative;
  padding-bottom: 4px;
}
.link::after {
  content: "";
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.link:hover::after {
  transform: scaleX(1);
}`,
    prompt: '请用纯CSS实现下划线滑动效果。要求：使用::after伪元素创建下划线，宽度100%，默认scaleX(0)隐藏，悬停时通过transition从scaleX(0)过渡到scaleX(1)，transform-origin设为left。',
    previewHtml: '<div style="position:relative;display:inline-block;padding-bottom:4px;font-family:monospace;font-size:14px;color:var(--text)">Underline<div style="position:absolute;bottom:0;left:0;height:2px;background:var(--primary);animation:und_ 1.5s ease infinite"></div></div>'
  },
  {
    id: 'flip-char',
    name: '翻转揭示',
    nameEn: 'Flip Reveal',
    category: 'text',
    difficulty: 'medium',
    tags: ['翻转', '揭示', '3D', '文字'],
    description: '文字像翻牌一样逐字翻转显示。',
    html: '<span class="char">F</span><span class="char">l</span>',
    css: `@keyframes flipChar {
  0% { transform: rotateX(90deg); opacity: 0; }
  30% { transform: rotateX(0); opacity: 1; }
  100% { transform: rotateX(0); opacity: 1; }
}
.char {
  display: inline-block;
  animation: flipChar 2s ease forwards;
}`,
    prompt: '请用纯CSS实现翻转揭示效果。要求：每个字符使用@keyframes从rotateX(90deg)翻转到rotateX(0)，配合opacity从0到1，通过animation-delay逐字翻转出现。',
    previewHtml: '<div style="display:flex;gap:3px;perspective:200px"><span style="display:inline-block;animation:flipC_ 2s ease infinite">F</span><span style="display:inline-block;animation:flipC_ 2s ease .15s infinite">l</span><span style="display:inline-block;animation:flipC_ 2s ease .3s infinite">i</span><span style="display:inline-block;animation:flipC_ 2s ease .45s infinite">p</span></div>'
  },
  {
    id: 'wave-text',
    name: '文字波浪',
    nameEn: 'Wave Text',
    category: 'text',
    difficulty: 'easy',
    tags: ['波浪', '文字', '起伏', '标题'],
    description: '文字像波浪一样起伏波动，适合标题。',
    html: '<span class="char">W</span><span class="char">a</span><span class="char">v</span><span class="char">e</span>',
    css: `@keyframes wave {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.char {
  display: inline-block;
  animation: wave 1s ease infinite;
}
.char:nth-child(2) { animation-delay: 0.1s; }`,
    prompt: '请用纯CSS实现文字波浪效果。要求：每个字符使用@keyframes在translateY(0)和translateY(-8px)之间做正弦波运动，通过animation-delay错开每个字符形成波浪感。',
    previewHtml: '<div style="display:flex;gap:1px"><span style="animation:wave_ 1s ease infinite">W</span><span style="animation:wave_ 1s ease .1s infinite">a</span><span style="animation:wave_ 1s ease .2s infinite">v</span><span style="animation:wave_ 1s ease .3s infinite">e</span></div>'
  },
  {
    id: 'mask-slide',
    name: '遮罩滑入',
    nameEn: 'Mask Slide',
    category: 'text',
    difficulty: 'medium',
    tags: ['遮罩', '滑入', '设计', '文字'],
    description: '文字从色块遮罩后滑出，设计感强。',
    html: '<div class="mask-text"><span>Reveal</span></div>',
    css: `@keyframes maskSlide {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
.mask-text {
  overflow: hidden;
  display: inline-block;
}
.mask-text span {
  display: inline-block;
  transform: translateY(100%);
  animation: maskSlide 0.6s ease forwards;
}`,
    prompt: '请用纯CSS实现遮罩滑入效果。要求：外层容器overflow:hidden作为遮罩，内层span使用@keyframes从translateY(100%)滑到translateY(0)，实现文字从下方滑出的揭示效果。',
    previewHtml: '<div style="overflow:hidden"><div style="animation:maskS_ 2s ease infinite;font-family:monospace;font-size:16px;font-weight:bold">Reveal</div></div>'
  },
  {
    id: 'counter-num',
    name: '数字滚动',
    nameEn: 'Number Counter',
    category: 'text',
    difficulty: 'medium',
    tags: ['数字', '滚动', '计数', '数据'],
    description: '数字从0递增到目标值，适用于数据展示。',
    html: '<div class="counter" data-target="100">0</div>',
    css: `// JavaScript 驱动
function countUp(el, target, duration) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      clearInterval(timer);
      start = target;
    }
    el.textContent = Math.floor(start);
  }, 16);
}`,
    js: `const el = document.querySelector('.counter');
countUp(el, parseInt(el.dataset.target), 2000);`,
    prompt: '请用JavaScript实现数字滚动效果。要求：使用setInterval每16ms更新一次数值，从0递增到目标值，2秒内完成，使用Math.floor取整显示。',
    previewHtml: '<div style="font-family:monospace;font-size:20px;color:var(--primary);animation:cntP_ 2s ease infinite">0 → 100</div>'
  },
  {
    id: 'scramble',
    name: '文字解码',
    nameEn: 'Text Scramble',
    category: 'text',
    difficulty: 'hard',
    tags: ['解码', '乱码', '科技', '文字'],
    description: '从随机乱码逐帧解码为目标文本。',
    html: '<div class="scramble">Web Effects</div>',
    css: `// JS 驱动
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function scramble(el, text, duration) {
  let frame = 0;
  const total = Math.ceil(duration / 35);
  const timer = setInterval(() => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (i < frame) result += text[i];
      else result += chars[Math.floor(Math.random() * chars.length)];
    }
    el.textContent = result;
    frame++;
    if (frame > text.length) clearInterval(timer);
  }, 35);
}`,
    js: `const el = document.querySelector('.scramble');
scramble(el, 'Web Effects', 1500);`,
    prompt: '请用JavaScript实现文字解码效果。要求：使用setInterval每35ms更新一帧，每帧将未解码的字符替换为随机字符，逐个锁定为目标字符，直到完全解码。',
    previewHtml: '<div style="font-family:monospace;font-size:16px;font-weight:bold;color:var(--primary)">Web Effects</div>'
  },
  {
    id: 'marquee',
    name: '无限跑马灯',
    nameEn: 'Infinite Marquee',
    category: 'text',
    difficulty: 'easy',
    tags: ['跑马灯', '滚动', '无限', '循环'],
    description: '文字无限循环滚动。',
    html: '<div class="marquee"><span>Design</span><span>Develop</span><span>Deploy</span></div>',
    css: `@keyframes mqL {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee {
  display: flex;
  gap: 40px;
  width: max-content;
  animation: mqL 20s linear infinite;
}`,
    prompt: '请用纯CSS实现无限跑马灯效果。要求：内容复制一份确保无缝衔接，使用@keyframes从translateX(0)到translateX(-50%)，动画时长20秒，缓动函数linear，无限循环。',
    previewHtml: '<div style="display:flex;gap:8px;font-family:monospace;font-size:14px;color:var(--text-muted);overflow:hidden"><div style="display:flex;gap:40px;width:max-content;animation:mqL 20s linear infinite"><span>Design</span><span>Develop</span><span>Deploy</span><span>Iterate</span><span>Design</span><span>Develop</span><span>Deploy</span><span>Iterate</span></div></div>'
  },
  {
    id: 'text-wave-up',
    name: '文字上浮',
    nameEn: 'Text Wave Up',
    category: 'text',
    difficulty: 'medium',
    tags: ['上浮', '文字', '入场', '波浪'],
    description: '文字像波浪一样从下方上浮出现。',
    html: '<span class="char">H</span><span class="char">e</span><span class="char">l</span><span class="char">l</span><span class="char">o</span>',
    css: `@keyframes charUp {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.char {
  display: inline-block;
  transform: translateY(100%);
  animation: charUp 0.5s cubic-bezier(.16,1,.3,1) forwards;
}`,
    prompt: '请用纯CSS实现文字上浮效果。要求：每个字符使用@keyframes从translateY(100%)到translateY(0)，缓动函数cubic-bezier(.16,1,.3,1)实现弹性，通过animation-delay逐字入场。',
    previewHtml: '<div style="display:flex;gap:2px;overflow:hidden"><span style="display:inline-block;animation:wave_ 1s ease infinite">W</span><span style="display:inline-block;animation:wave_ 1s ease .08s infinite">a</span><span style="display:inline-block;animation:wave_ 1s ease .16s infinite">v</span><span style="display:inline-block;animation:wave_ 1s ease .24s infinite">e</span><span style="display:inline-block;animation:wave_ 1s ease .32s infinite">!</span></div>'
  },
  {
    id: 'neon-text',
    name: '霓虹文字',
    nameEn: 'Neon Text',
    category: 'text',
    difficulty: 'easy',
    tags: ['霓虹', '发光', '赛博朋克', '文字'],
    description: '模拟霓虹灯管发光效果，复古赛博朋克风格。',
    html: '<div class="neon">NEON</div>',
    css: `@keyframes neonFlicker {
  0%,19%,21%,23%,25%,54%,56%,100% {
    text-shadow: 0 0 5px #00e5a0, 0 0 10px #00e5a0,
      0 0 20px #00e5a0, 0 0 40px #00e5a0;
  }
  20%,24%,55% { text-shadow: none; }
}
.neon {
  color: #fff;
  animation: neonFlicker 2s ease infinite;
}`,
    prompt: '请用纯CSS实现霓虹灯文字效果。要求：使用text-shadow叠加多层发光效果，在正常发光和无阴影之间交替闪烁，模拟霓虹灯管忽明忽暗的特性。',
    previewHtml: '<div style="font-family:monospace;font-size:18px;font-weight:bold;color:var(--primary);text-shadow:0 0 5px var(--primary),0 0 10px var(--primary),0 0 20px var(--primary);animation:neonF_ 2s ease infinite">NEON</div>'
  },
  {
    id: 'smoke-text',
    name: '烟雾消散',
    nameEn: 'Smoke Text',
    category: 'text',
    difficulty: 'medium',
    tags: ['烟雾', '消散', '模糊', '文字'],
    description: '文字像烟雾一样向上消散消失。',
    html: '<div class="smoke-text">Smoke</div>',
    css: `@keyframes smoke {
  0% { opacity: 1; filter: blur(0); transform: translateY(0); }
  100% { opacity: 0; filter: blur(10px); transform: translateY(-30px) scale(1.5); }
}
.smoke-text {
  animation: smoke 2s ease forwards;
}`,
    prompt: '请用纯CSS实现烟雾消散效果。要求：使用@keyframes同时改变opacity(1→0)、filter:blur(0→10px)、translateY(0→-30px)和scale(1→1.5)，模拟文字像烟雾一样向上飘散消失。',
    previewHtml: '<div style="font-family:monospace;font-size:16px;font-weight:bold;animation:smk_ 2s ease infinite">Smoke</div>'
  },
  {
    id: 'breathe',
    name: '脉冲呼吸',
    nameEn: 'Breathe',
    category: 'color',
    difficulty: 'easy',
    tags: ['呼吸', '脉冲', '缩放', '活跃'],
    description: '元素持续做缩放呼吸运动，强调活跃状态。',
    html: '<div class="element"></div>',
    css: `@keyframes breathe {
  0%,100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 1; }
}
.element {
  animation: breathe 2s ease-in-out infinite;
}`,
    prompt: '请用纯CSS实现脉冲呼吸效果。要求：使用@keyframes在scale(1)和scale(1.15)之间做呼吸运动，同时opacity在0.8和1之间变化，缓动函数ease-in-out，无限循环。',
    previewHtml: '<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--primary),#a855f7);animation:breathe_ 2s ease-in-out infinite"></div>'
  },
  {
    id: 'glow-pulse',
    name: '光晕脉冲',
    nameEn: 'Glow Pulse',
    category: 'color',
    difficulty: 'easy',
    tags: ['光晕', '脉冲', '扩散', '光环'],
    description: '元素外部出现扩散的光环效果。',
    html: '<div class="glow-ring"></div>',
    css: `@keyframes glowPulse {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.6); opacity: 0; }
}
.glow-ring {
  width: 40px; height: 40px;
  border: 2px solid #00e5a0;
  border-radius: 50%;
  animation: glowPulse 2s ease infinite;
}`,
    prompt: '请用纯CSS实现光晕脉冲效果。要求：使用@keyframes从scale(1)和opacity:0.8扩散到scale(1.6)和opacity:0，形成向外扩散消失的光环。',
    previewHtml: '<div style="position:relative;width:36px;height:36px;display:flex;align-items:center;justify-content:center"><div style="width:20px;height:20px;border-radius:50%;background:var(--primary)"></div><div style="position:absolute;inset:0;border:2px solid var(--primary);border-radius:50%;animation:glowP_ 2s ease infinite"></div></div>'
  },
  {
    id: 'hue-rotate',
    name: '色相旋转',
    nameEn: 'Hue Rotate',
    category: 'color',
    difficulty: 'easy',
    tags: ['色相', '旋转', '彩虹', '颜色'],
    description: '元素颜色持续色相旋转，彩虹般流转。',
    html: '<div class="element">Rainbow</div>',
    css: `@keyframes hueRotate {
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
}
.element {
  animation: hueRotate 3s linear infinite;
}`,
    prompt: '请用纯CSS实现色相旋转效果。要求：使用@keyframes通过filter:hue-rotate从0deg到360deg实现颜色的彩虹流转，缓动函数linear，无限循环。',
    previewHtml: '<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--primary),#a855f7);animation:hueR_ 3s linear infinite"></div>'
  },
  {
    id: 'gradient-flow',
    name: '渐变流动',
    nameEn: 'Gradient Flow',
    category: 'color',
    difficulty: 'easy',
    tags: ['渐变', '流动', '背景', '色彩'],
    description: '背景渐变色持续流动，常用作大背景。',
    html: '<div class="gradient-bg">BG</div>',
    css: `@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.gradient-bg {
  background: linear-gradient(-45deg, #0a2e3e, #0e1a25, #0a3e2e, #00e5a0);
  background-size: 400% 400%;
  animation: gradientFlow 6s ease infinite;
}`,
    prompt: '请用纯CSS实现渐变流动效果。要求：使用background-size:400% 400%放大渐变背景，通过@keyframes改变background-position在0%和100%之间变化，实现渐变色的流动效果。',
    previewHtml: '<div style="width:100%;height:100%;background:linear-gradient(-45deg,var(--bg),var(--primary),#a855f7,var(--bg));background-size:400% 400%;animation:grFl_ 6s ease infinite"></div>'
  },
  {
    id: 'shine',
    name: '闪光扫过',
    nameEn: 'Shine Sweep',
    category: 'color',
    difficulty: 'easy',
    tags: ['闪光', '扫过', '金属', '光泽'],
    description: '一道光线从左到右扫过元素表面，金属质感常用。',
    html: '<div class="shine">Shine</div>',
    css: `@keyframes shine {
  from { left: -100%; }
  to { left: 200%; }
}
.shine {
  position: relative;
  overflow: hidden;
}
.shine::after {
  content: "";
  position: absolute;
  top: 0; left: -100%;
  width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  animation: shine 2s ease infinite;
}`,
    prompt: '请用纯CSS实现闪光扫过效果。要求：使用::after伪元素创建一个斜向渐变光带，通过@keyframes从left:-100%移动到left:200%，模拟光线从左到右扫过表面。',
    previewHtml: '<div style="position:relative;overflow:hidden;width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px"><div style="position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);animation:shine_ 2s ease infinite"></div></div>'
  },
  {
    id: 'rainbow-border',
    name: '边框颜色流转',
    nameEn: 'Rainbow Border',
    category: 'color',
    difficulty: 'easy',
    tags: ['边框', '颜色', '流转', '卡片'],
    description: '边框颜色持续流转变化，用于卡片高亮。',
    html: '<div class="rainbow-border">Card</div>',
    css: `.rainbow-border {
  border: 2px solid transparent;
  border-radius: 12px;
  background: linear-gradient(#111,#111) padding-box,
    conic-gradient(#00e5a0,#0ea5e9,#f43f5e,#00e5a0) border-box;
  animation: spin 3s linear infinite;
}`,
    prompt: '请用纯CSS实现边框颜色流转效果。要求：使用background-clip技巧，padding-box为纯色背景，border-box为conic-gradient锥形渐变，通过旋转动画实现颜色流转。',
    previewHtml: '<div style="width:44px;height:44px;border:2px solid transparent;background:linear-gradient(var(--bg),var(--bg)) padding-box,conic-gradient(var(--primary),#a855f7,#ec4899,var(--primary)) border-box;border-radius:8px;animation:spin_ 3s linear infinite"></div>'
  },
  {
    id: 'spotlight',
    name: '聚光灯',
    nameEn: 'Spotlight',
    category: 'color',
    difficulty: 'medium',
    tags: ['聚光灯', '光区', '跟随', '交互'],
    description: '圆形高亮光区跟随移动，照亮底层内容。',
    html: '<div class="spotlight">Content</div>',
    css: `.spotlight {
  background: radial-gradient(circle 150px at var(--x,50%) var(--y,50%),
    rgba(0,229,160,0.25), transparent);
}
// JS:
const el = document.querySelector('.spotlight');
el.addEventListener('mousemove', (e) => {
  const r = el.getBoundingClientRect();
  el.style.setProperty('--x', e.clientX-r.left+'px');
  el.style.setProperty('--y', e.clientY-r.top+'px');
});`,
    js: `const el = document.querySelector('.spotlight');
el.addEventListener('mousemove', (e) => {
  const r = el.getBoundingClientRect();
  el.style.setProperty('--x', e.clientX-r.left+'px');
  el.style.setProperty('--y', e.clientY-r.top+'px');
});`,
    prompt: '请用CSS+JavaScript实现聚光灯效果。要求：使用radial-gradient和CSS变量--x/--y作为圆心，mousemove事件实时更新变量，实现光区跟随鼠标移动。',
    previewHtml: '<div style="width:100%;height:100%;background:radial-gradient(circle at 30% 50%,rgba(79,124,255,.25),transparent 50%);animation:spot_ 3s ease infinite alternate"></div>'
  },
  {
    id: 'vignette',
    name: '暗角渐变',
    nameEn: 'Vignette',
    category: 'color',
    difficulty: 'easy',
    tags: ['暗角', '渐变', '聚焦', '氛围'],
    description: '四周渐暗中间亮的暗角效果，聚焦视觉中心。',
    html: '<div class="vignette"><div class="content">Focus</div></div>',
    css: `.vignette {
  background: radial-gradient(
    ellipse at center,
    transparent 35%,
    rgba(0,0,0,0.8) 100%
  );
}`,
    prompt: '请用纯CSS实现暗角渐变效果。要求：使用radial-gradient从中心透明向外渐变到半透明黑色，形成四周暗中间亮的聚焦效果。',
    previewHtml: '<div style="width:100%;height:100%;background:radial-gradient(ellipse at center,transparent 35%,rgba(0,0,0,.8) 100%);display:flex;align-items:center;justify-content:center"><div style="width:24px;height:24px;border-radius:50%;background:var(--primary)"></div></div>'
  },
  {
    id: 'neon-glow',
    name: '霓虹灯',
    nameEn: 'Neon Glow',
    category: 'color',
    difficulty: 'easy',
    tags: ['霓虹', '发光', '赛博朋克', '复古'],
    description: '模拟霓虹灯管发光效果，复古赛博朋克风格。',
    html: '<div class="neon">NEON</div>',
    css: `@keyframes neonGlow {
  0%,100% {
    text-shadow: 0 0 7px #fff, 0 0 10px #fff,
      0 0 21px #fff, 0 0 42px #00e5a0;
  }
  50% {
    text-shadow: 0 0 4px #fff, 0 0 7px #fff,
      0 0 14px #fff, 0 0 30px #00e5a0,
      0 0 60px #00e5a0;
  }
}
.neon {
  color: #fff;
  animation: neonGlow 2s ease-in-out infinite alternate;
}`,
    prompt: '请用纯CSS实现霓虹灯发光效果。要求：使用text-shadow叠加多层白色和主题色模糊阴影，在两个亮度级别之间交替变化，模拟霓虹灯的脉冲发光。',
    previewHtml: '<div style="font-family:monospace;font-size:18px;font-weight:bold;color:#fff;text-shadow:0 0 7px #fff,0 0 10px var(--primary),0 0 20px var(--primary);animation:neonF_ 2s ease infinite">NEON</div>'
  },
  {
    id: 'sat-pulse',
    name: '饱和度脉冲',
    nameEn: 'Saturation Pulse',
    category: 'color',
    difficulty: 'easy',
    tags: ['饱和度', '脉冲', '灰度', '彩色'],
    description: '元素饱和度周期性变化，从灰到彩色再回灰。',
    html: '<div class="element">Saturated</div>',
    css: `@keyframes satPulse {
  0%,100% { filter: saturate(0.3); }
  50% { filter: saturate(1.5); }
}
.element {
  animation: satPulse 3s ease infinite;
}`,
    prompt: '请用纯CSS实现饱和度脉冲效果。要求：使用@keyframes通过filter:saturate在0.3(接近灰度)和1.5(过饱和)之间变化，实现色彩周期性变化。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:satP_ 3s ease infinite"></div>'
  },
  {
    id: 'spin',
    name: '连续旋转',
    nameEn: 'Spin',
    category: 'geometry',
    difficulty: 'easy',
    tags: ['旋转', '匀速', '加载', '基础'],
    description: '元素持续匀速旋转，加载指示器的基础。',
    html: '<div class="element"></div>',
    css: `@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.element {
  animation: spin 1s linear infinite;
}`,
    prompt: '请用纯CSS实现连续旋转效果。要求：使用@keyframes从rotate(0deg)到rotate(360deg)，缓动函数linear，无限循环。',
    previewHtml: '<div style="width:36px;height:36px;border:3px solid transparent;border-top-color:var(--primary);border-radius:50%;animation:spin_ .8s linear infinite"></div>'
  },
  {
    id: 'sq-to-circle',
    name: '方形变圆',
    nameEn: 'Square to Circle',
    category: 'geometry',
    difficulty: 'easy',
    tags: ['方形', '圆形', '变形', '圆角'],
    description: '元素圆角从小到大方形到圆形的变形。',
    html: '<div class="element"></div>',
    css: `@keyframes sqToCircle {
  from { border-radius: 4px; }
  to { border-radius: 50%; }
}
.element {
  animation: sqToCircle 2s ease infinite alternate;
}`,
    prompt: '请用纯CSS实现方形变圆效果。要求：使用@keyframes在border-radius:4px和border-radius:50%之间变化，动画使用alternate实现来回变形。',
    previewHtml: '<div style="width:36px;height:36px;background:linear-gradient(135deg,var(--primary),#a855f7);animation:sqC_ 2s ease infinite alternate"></div>'
  },
  {
    id: 'flip-y',
    name: 'Y轴翻转',
    nameEn: 'Flip Y',
    category: 'geometry',
    difficulty: 'easy',
    tags: ['翻转', 'Y轴', '3D', '循环'],
    description: '元素沿Y轴做3D翻转，像翻书页。',
    html: '<div class="element">Flip</div>',
    css: `@keyframes flipY {
  from { transform: perspective(400px) rotateY(0); }
  to { transform: perspective(400px) rotateY(360deg); }
}
.element {
  animation: flipY 2s ease infinite;
}`,
    prompt: '请用纯CSS实现Y轴翻转效果。要求：使用@keyframes配合perspective(400px)创建3D空间，从rotateY(0)到rotateY(360deg)完成一圈翻转。',
    previewHtml: '<div style="width:36px;height:36px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;perspective:200px;animation:flipY_ 2s ease infinite"></div>'
  },
  {
    id: 'flip-x',
    name: 'X轴翻转',
    nameEn: 'Flip X',
    category: 'geometry',
    difficulty: 'easy',
    tags: ['翻转', 'X轴', '3D', '循环'],
    description: '元素沿X轴做3D翻转，翻跟头效果。',
    html: '<div class="element">Flip</div>',
    css: `@keyframes flipX {
  from { transform: perspective(400px) rotateX(0); }
  to { transform: perspective(400px) rotateX(360deg); }
}
.element {
  animation: flipX 2s ease infinite;
}`,
    prompt: '请用纯CSS实现X轴翻转效果。要求：使用@keyframes配合perspective(400px)创建3D空间，从rotateX(0)到rotateX(360deg)完成翻转。',
    previewHtml: '<div style="width:36px;height:36px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;perspective:200px;animation:flipX_ 2s ease infinite"></div>'
  },
  {
    id: 'elastic-s',
    name: '弹性缩放',
    nameEn: 'Elastic Scale Geo',
    category: 'geometry',
    difficulty: 'medium',
    tags: ['弹性', '缩放', '物理', '反馈'],
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
    prompt: '请用纯CSS实现弹性缩放效果。要求：使用@keyframes，0%时scale(0)，50%时scale(1.2)过度放大，70%时scale(0.9)回弹，100%时scale(1)归位。',
    previewHtml: '<div style="width:36px;height:36px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:elaS_ 1.5s ease infinite"></div>'
  },
  {
    id: 'shake',
    name: '摇晃',
    nameEn: 'Shake',
    category: 'geometry',
    difficulty: 'easy',
    tags: ['摇晃', '错误', '提示', '抖动'],
    description: '元素像不倒翁一样左右摇晃，常用于错误提示。',
    html: '<div class="element">Error!</div>',
    css: `@keyframes shake {
  0%,100% { transform: translateX(0); }
  10%,30%,50%,70%,90% { transform: translateX(-4px); }
  20%,40%,60%,80% { transform: translateX(4px); }
}
.element {
  animation: shake 0.5s ease;
}`,
    prompt: '请用纯CSS实现摇晃效果。要求：使用@keyframes在translateX(-4px)和translateX(4px)之间快速交替，10%为步长实现急促的左右摇晃，模拟错误提示。',
    previewHtml: '<div style="width:36px;height:36px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:bold;animation:shake_ .5s ease infinite">!</div>'
  },
  {
    id: 'wobble',
    name: '弹簧摇摆',
    nameEn: 'Wobble',
    category: 'geometry',
    difficulty: 'medium',
    tags: ['弹簧', '摇摆', '物理', '不倒翁'],
    description: '元素像弹簧一样反复摇摆，物理感强。',
    html: '<div class="element">Wobble</div>',
    css: `@keyframes wobble {
  0% { transform: rotate(0); }
  15% { transform: rotate(-15deg); }
  30% { transform: rotate(10deg); }
  45% { transform: rotate(-5deg); }
  60% { transform: rotate(3deg); }
  100% { transform: rotate(0); }
}
.element {
  transform-origin: top center;
  animation: wobble 0.8s ease;
}`,
    prompt: '请用纯CSS实现弹簧摇摆效果。要求：使用@keyframes从0度开始，依次摆到-15°、10°、-5°、3°，幅度递减归零，transform-origin设为top center模拟悬挂点。',
    previewHtml: '<div style="width:36px;height:36px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;transform-origin:top center;animation:wobble_ 1.5s ease infinite"></div>'
  },
  {
    id: 'heartbeat',
    name: '心跳',
    nameEn: 'Heartbeat',
    category: 'geometry',
    difficulty: 'easy',
    tags: ['心跳', '双峰', '点赞', '节律'],
    description: '元素模拟心跳的双峰节律，常用于点赞按钮。',
    html: '<div class="heart">♥</div>',
    css: `@keyframes heartbeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}
.heart {
  animation: heartbeat 1.2s ease infinite;
}`,
    prompt: '请用纯CSS实现心跳效果。要求：使用@keyframes模拟心脏双峰节律，14%和42%时scale(1.3)两个峰值，28%和70%回落到scale(1)，体现真实心跳节奏。',
    previewHtml: '<div style="font-size:28px;color:#e5484d;animation:hb_ 1.2s ease infinite">♥</div>'
  },
  {
    id: 'float',
    name: '浮动效果',
    nameEn: 'Float',
    category: 'geometry',
    difficulty: 'easy',
    tags: ['浮动', '悬浮', '轻柔', '循环'],
    description: '元素在垂直方向轻柔浮动，悬空悬浮感。',
    html: '<div class="element">Float</div>',
    css: `@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.element {
  animation: float 3s ease-in-out infinite;
}`,
    prompt: '请用纯CSS实现浮动效果。要求：使用@keyframes在translateY(0)和translateY(-15px)之间做正弦运动，缓动函数ease-in-out，营造轻柔悬浮感。',
    previewHtml: '<div style="width:36px;height:36px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:float_ 3s ease-in-out infinite"></div>'
  },
  {
    id: 'drop-b',
    name: '弹性掉落',
    nameEn: 'Drop Bounce Geo',
    category: 'geometry',
    difficulty: 'medium',
    tags: ['掉落', '弹跳', '物理', '重力'],
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
    prompt: '请用纯CSS实现弹性掉落效果。要求：使用@keyframes，元素从translateY(-80px)掉落，60%落到translateY(8px)，75%弹起translateY(-4px)，90%再落translateY(2px)，100%归位。',
    previewHtml: '<div style="width:36px;height:36px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:dropB_ 2s ease infinite"></div>'
  },
{
    id: 'spinner',
    name: '旋转环',
    nameEn: 'Spinner',
    category: 'loading',
    difficulty: 'easy',
    tags: ['旋转', '加载', '圆环', '经典'],
    description: '最经典的加载动画，圆环缺口旋转。',
    html: '<div class="spinner"></div>',
    css: `@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  width: 40px; height: 40px;
  border: 3px solid rgba(255,255,255,0.1);
  border-top-color: #00e5a0;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}`,
    prompt: '请用纯CSS实现旋转环加载效果。要求：使用border创建圆环，仅border-top-color为主题色，通过@keyframes旋转360度，缓动函数linear。',
    previewHtml: '<div style="width:36px;height:36px;border:3px solid var(--border);border-top-color:var(--primary);border-radius:50%;animation:spin_ .8s linear infinite"></div>'
  },
  {
    id: 'dot-bounce',
    name: '弹跳三点',
    nameEn: 'Dot Bounce',
    category: 'loading',
    difficulty: 'easy',
    tags: ['弹跳', '加载', '圆点', '聊天'],
    description: '三个圆点交替上下弹跳，常见于聊天加载。',
    html: '<div class="dot"></div><div class="dot"></div><div class="dot"></div>',
    css: `@keyframes dotBounce {
  from { transform: translateY(0); }
  to { transform: translateY(-12px); }
}
.dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: #00e5a0;
  display: inline-block;
  animation: dotBounce 0.6s ease infinite alternate;
}
.dot:nth-child(2) { animation-delay: 0.15s; }
.dot:nth-child(3) { animation-delay: 0.3s; }`,
    prompt: '请用纯CSS实现弹跳三点加载效果。要求：三个圆点使用@keyframes在translateY(0)和translateY(-12px)之间交替弹跳，通过animation-delay错开形成波浪。',
    previewHtml: '<div style="display:flex;gap:6px;align-items:end"><div style="width:8px;height:8px;border-radius:50%;background:var(--primary);animation:dB_ .6s ease infinite alternate"></div><div style="width:8px;height:8px;border-radius:50%;background:var(--primary);animation:dB_ .6s ease .15s infinite alternate"></div><div style="width:8px;height:8px;border-radius:50%;background:var(--primary);animation:dB_ .6s ease .3s infinite alternate"></div></div>'
  },
  {
    id: 'pulse-dot',
    name: '脉冲点',
    nameEn: 'Pulse Dots',
    category: 'loading',
    difficulty: 'easy',
    tags: ['脉冲', '加载', '呼吸', '圆点'],
    description: '多个圆点脉冲缩放，有节奏地呼吸。',
    html: '<div class="dot"></div><div class="dot"></div><div class="dot"></div>',
    css: `@keyframes pulseScale {
  0%,100% { transform: scale(0.5); opacity: 0.3; }
  50% { transform: scale(1); opacity: 1; }
}
.dot {
  animation: pulseScale 1s ease infinite;
}
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }`,
    prompt: '请用纯CSS实现脉冲点加载效果。要求：圆点使用@keyframes在scale(0.5)/opacity:0.3和scale(1)/opacity:1之间呼吸，通过animation-delay错开节奏。',
    previewHtml: '<div style="display:flex;gap:6px;align-items:center"><div style="width:8px;height:8px;border-radius:50%;background:var(--primary);animation:pS_ 1s ease infinite"></div><div style="width:8px;height:8px;border-radius:50%;background:var(--primary);animation:pS_ 1s ease .2s infinite"></div><div style="width:8px;height:8px;border-radius:50%;background:var(--primary);animation:pS_ 1s ease .4s infinite"></div></div>'
  },
  {
    id: 'skeleton',
    name: '骨架屏',
    nameEn: 'Skeleton',
    category: 'loading',
    difficulty: 'easy',
    tags: ['骨架', '加载', '占位', '闪烁'],
    description: '内容加载前显示占位骨架，模拟布局。',
    html: '<div class="skeleton" style="height:12px"></div><div class="skeleton" style="height:12px;width:60%"></div>',
    css: `@keyframes shimmer {
  0% { opacity: 0.3; }
  50% { opacity: 0.6; }
  100% { opacity: 0.3; }
}
.skeleton {
  background: #1a3040;
  border-radius: 4px;
  animation: shimmer 1.5s ease infinite;
}`,
    prompt: '请用纯CSS实现骨架屏加载效果。要求：使用@keyframes在opacity 0.3和0.6之间闪烁，灰色背景块模拟文字占位，多个块宽度不同模拟真实布局。',
    previewHtml: '<div style="width:80px;display:flex;flex-direction:column;gap:6px"><div style="height:6px;background:var(--border);border-radius:3px;animation:shm_ 1.5s ease infinite"></div><div style="height:6px;width:60%;background:var(--border);border-radius:3px;animation:shm_ 1.5s ease .2s infinite"></div><div style="height:6px;width:70%;background:var(--border);border-radius:3px;animation:shm_ 1.5s ease .4s infinite"></div></div>'
  },
  {
    id: 'progress-bar',
    name: '进度条',
    nameEn: 'Progress Bar',
    category: 'loading',
    difficulty: 'easy',
    tags: ['进度', '加载', '条形', '循环'],
    description: '水平进度条从左到右推进。',
    html: '<div class="progress-bar"><div class="progress-bar-fill"></div></div>',
    css: `@keyframes progress {
  0% { transform: scaleX(0); }
  50% { transform: scaleX(1); transform-origin: left; }
  51% { transform-origin: right; }
  100% { transform: scaleX(0); transform-origin: right; }
}
.progress-bar {
  width: 200px; height: 4px;
  background: #152535;
  border-radius: 2px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: #00e5a0;
  transform-origin: left;
  animation: progress 2s ease infinite;
}`,
    prompt: '请用纯CSS实现进度条加载效果。要求：使用@keyframes通过scaleX从0到1填充，50%时切换transform-origin从left到right实现回退效果。',
    previewHtml: '<div style="width:80px;height:4px;background:var(--border);border-radius:2px;overflow:hidden"><div style="width:100%;height:100%;background:linear-gradient(90deg,var(--primary),#a855f7);transform-origin:left;animation:prog_ 2s ease infinite"></div></div>'
  },
  {
    id: 'grid-spin',
    name: '旋转方块',
    nameEn: 'Grid Spinner',
    category: 'loading',
    difficulty: 'easy',
    tags: ['旋转', '方块', '加载', '网格'],
    description: '方块组旋转变化，像魔方加载器。',
    html: '<div class="grid-spinner"><div></div><div></div><div></div><div></div></div>',
    css: `@keyframes gridSpin {
  to { transform: rotate(360deg); }
}
.grid-spinner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  width: 40px;
  animation: gridSpin 2s linear infinite;
}`,
    prompt: '请用纯CSS实现旋转方块加载效果。要求：使用grid布局2x2方块组，整体通过@keyframes旋转360度，缓动函数linear。',
    previewHtml: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;width:32px;animation:spin_ 2s linear infinite"><div style="width:14px;height:14px;background:var(--primary);border-radius:3px"></div><div style="width:14px;height:14px;background:#a855f7;border-radius:3px"></div><div style="width:14px;height:14px;background:#a855f7;border-radius:3px"></div><div style="width:14px;height:14px;background:var(--primary);border-radius:3px"></div></div>'
  },
  {
    id: 'ripple-ld',
    name: '波纹扩散',
    nameEn: 'Ripple Loader',
    category: 'loading',
    difficulty: 'easy',
    tags: ['波纹', '扩散', '涟漪', '加载'],
    description: '同心圆环向外扩散消失，像水面涟漪。',
    html: '<div class="ripple"></div><div class="ripple" style="animation-delay:0.5s"></div>',
    css: `@keyframes ripple {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}
.ripple {
  position: absolute; inset: 0;
  border: 2px solid #00e5a0;
  border-radius: 50%;
  animation: ripple 2s ease infinite;
}`,
    prompt: '请用纯CSS实现波纹扩散加载效果。要求：使用@keyframes从scale(0.5)/opacity:1扩散到scale(2.5)/opacity:0，多个圆环通过animation-delay错开形成连续涟漪。',
    previewHtml: '<div style="position:relative;width:36px;height:36px;display:flex;align-items:center;justify-content:center"><div style="position:absolute;inset:0;border:2px solid var(--primary);border-radius:50%;animation:ripple_ 2s ease infinite"></div><div style="position:absolute;inset:0;border:2px solid #a855f7;border-radius:50%;animation:ripple_ 2s ease .5s infinite"></div></div>'
  },
  {
    id: 'line-load',
    name: '线条穿梭',
    nameEn: 'Line Loader',
    category: 'loading',
    difficulty: 'easy',
    tags: ['线条', '穿梭', '加载', '水平'],
    description: '线条在水平方向来回穿梭，指示进行中。',
    html: '<div class="line-loader"><div class="line-loader-fill"></div></div>',
    css: `@keyframes lineLoad {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(350%); }
}
.line-loader {
  width: 150px; height: 3px;
  background: #152535;
  border-radius: 2px;
  overflow: hidden;
}
.line-loader-fill {
  width: 40%; height: 100%;
  background: #00e5a0;
  animation: lineLoad 1.5s ease infinite;
}`,
    prompt: '请用纯CSS实现线条穿梭加载效果。要求：短线条在轨道内从左到右穿梭，使用@keyframes从translateX(-100%)到translateX(350%)，线条宽度为轨道的40%。',
    previewHtml: '<div style="width:80px;height:3px;background:var(--border);border-radius:2px;overflow:hidden"><div style="width:40%;height:100%;background:var(--primary);border-radius:2px;animation:lnL_ 1.5s ease infinite"></div></div>'
  },
  {
    id: 'letter-load',
    name: '字母加载',
    nameEn: 'Letter Load',
    category: 'loading',
    difficulty: 'easy',
    tags: ['字母', '加载', '闪烁', '文字'],
    description: '字母依次出现显示，如L-O-A-D。',
    html: '<span class="letter">L</span><span class="letter">O</span><span class="letter">A</span><span class="letter">D</span>',
    css: `@keyframes letterFade {
  0%,100% { opacity: 0.2; }
  50% { opacity: 1; }
}
.letter {
  animation: letterFade 2s ease infinite;
}
.letter:nth-child(2) { animation-delay: 0.15s; }`,
    prompt: '请用纯CSS实现字母加载效果。要求：每个字母使用@keyframes在opacity 0.2和1之间闪烁，通过animation-delay逐个错开形成依次出现的效果。',
    previewHtml: '<div style="display:flex;gap:3px;font-family:monospace;font-size:14px;font-weight:bold;color:var(--primary)"><span style="animation:ltF_ 2s ease infinite">L</span><span style="animation:ltF_ 2s ease .15s infinite">O</span><span style="animation:ltF_ 2s ease .3s infinite">A</span><span style="animation:ltF_ 2s ease .45s infinite">D</span></div>'
  },
  {
    id: 'spin-scale',
    name: '圆弧缩放旋转',
    nameEn: 'Spin Scale',
    category: 'loading',
    difficulty: 'easy',
    tags: ['旋转', '缩放', '苹果', '加载'],
    description: '圆弧缺口同时旋转和缩放，苹果风格。',
    html: '<div class="spinner"></div>',
    css: `@keyframes spinScale {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(0.8); }
  100% { transform: rotate(360deg) scale(1); }
}
.spinner {
  border: 3px solid transparent;
  border-top-color: #00e5a0;
  border-right-color: #0ea5e9;
  border-radius: 50%;
  animation: spinScale 1.2s ease infinite;
}`,
    prompt: '请用纯CSS实现苹果风格加载效果。要求：使用@keyframes同时旋转和缩放，0%时rotate(0)/scale(1)，50%时rotate(180deg)/scale(0.8)，100%时rotate(360deg)/scale(1)。',
    previewHtml: '<div style="width:36px;height:36px;border:3px solid transparent;border-top-color:var(--primary);border-right-color:#a855f7;border-radius:50%;animation:spSc_ 1.2s ease infinite"></div>'
  },
  {
    id: 'wave-load',
    name: '波浪加载',
    nameEn: 'Wave Loader',
    category: 'loading',
    difficulty: 'easy',
    tags: ['波浪', '加载', '柱形', '节奏'],
    description: '多个柱形元素做波浪式高低变化。',
    html: '<div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>',
    css: `@keyframes waveLoad {
  0%,100% { height: 8px; }
  50% { height: 24px; }
}
.bar {
  width: 4px;
  background: #00e5a0;
  border-radius: 2px;
  animation: waveLoad 1s ease infinite;
}
.bar:nth-child(2) { animation-delay: 0.1s; }
.bar:nth-child(3) { animation-delay: 0.2s; }
.bar:nth-child(4) { animation-delay: 0.3s; }`,
    prompt: '请用纯CSS实现波浪加载效果。要求：多个竖条使用@keyframes在height:8px和height:24px之间变化，通过animation-delay错开形成波浪起伏。',
    previewHtml: '<div style="display:flex;gap:4px;align-items:end;height:28px"><div style="width:4px;height:8px;background:var(--primary);border-radius:2px;animation:waveLoad 1s ease infinite"></div><div style="width:4px;height:8px;background:var(--primary);border-radius:2px;animation:waveLoad 1s ease .1s infinite"></div><div style="width:4px;height:8px;background:var(--primary);border-radius:2px;animation:waveLoad 1s ease .2s infinite"></div><div style="width:4px;height:8px;background:var(--primary);border-radius:2px;animation:waveLoad 1s ease .3s infinite"></div></div>'
  },
  {
    id: 'dual-ring',
    name: '双环旋转',
    nameEn: 'Dual Ring',
    category: 'loading',
    difficulty: 'easy',
    tags: ['双环', '旋转', '加载', '对比'],
    description: '内外双环反向旋转，视觉丰富。',
    html: '<div class="dual-ring"></div>',
    css: `@keyframes spin {
  to { transform: rotate(360deg); }
}
.dual-ring {
  width: 40px; height: 40px;
  border: 3px solid transparent;
  border-top-color: #00e5a0;
  border-bottom-color: #0ea5e9;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}`,
    prompt: '请用纯CSS实现双环旋转加载效果。要求：使用border-top和border-bottom设置不同颜色形成双色圆环，通过@keyframes旋转360度。',
    previewHtml: '<div style="width:36px;height:36px;border:3px solid transparent;border-top-color:var(--primary);border-bottom-color:#a855f7;border-radius:50%;animation:spin_ 1s linear infinite"></div>'
  },
  {
    id: 'hover-scale',
    name: '悬停放大',
    nameEn: 'Hover Scale',
    category: 'hover',
    difficulty: 'easy',
    tags: ['悬停', '放大', '交互', '反馈'],
    description: '鼠标悬停时元素轻微放大，最常用交互反馈。',
    html: '<div class="element">Hover me</div>',
    css: `.element {
  transition: transform 0.3s ease;
}
.element:hover {
  transform: scale(1.05);
}`,
    prompt: '请用纯CSS实现悬停放大效果。要求：使用transition:transform 0.3s ease，hover时transform:scale(1.05)轻微放大。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:hS_ 2s ease infinite"></div>'
  },
  {
    id: 'hover-lift',
    name: '悬停提升',
    nameEn: 'Hover Lift',
    category: 'hover',
    difficulty: 'easy',
    tags: ['悬停', '提升', '阴影', '立体'],
    description: '悬停时阴影增大加深，产生浮起立体感。',
    html: '<div class="card">Hover me</div>',
    css: `.card {
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3);
}`,
    prompt: '请用纯CSS实现悬停提升效果。要求：默认box-shadow轻微，hover时translateY(-4px)上移并增大box-shadow，transition平滑过渡。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:hL_ 2s ease infinite"></div>'
  },
  {
    id: 'hover-glow-border',
    name: '悬停发光边框',
    nameEn: 'Hover Glow Border',
    category: 'hover',
    difficulty: 'easy',
    tags: ['悬停', '发光', '边框', '光晕'],
    description: '悬停时边框出现光晕效果。',
    html: '<div class="element">Hover</div>',
    css: `.element {
  transition: all 0.3s ease;
}
.element:hover {
  border-color: #00e5a0;
  box-shadow: 0 0 15px rgba(0,229,160,0.25);
}`,
    prompt: '请用纯CSS实现悬停发光边框效果。要求：使用transition平滑过渡，hover时改变border-color为主题色并添加box-shadow光晕。',
    previewHtml: '<div style="width:40px;height:40px;border:2px solid var(--border);border-radius:6px;animation:bG_ 2s ease infinite"></div>'
  },
  {
    id: 'hover-color',
    name: '悬停色变',
    nameEn: 'Hover Color',
    category: 'hover',
    difficulty: 'easy',
    tags: ['悬停', '颜色', '渐变', '文字'],
    description: '悬停时文字颜色渐变切换。',
    html: '<a class="link" href="#">Hover me</a>',
    css: `.link {
  color: #666;
  transition: color 0.3s ease;
}
.link:hover {
  color: #00e5a0;
}`,
    prompt: '请用纯CSS实现悬停色变效果。要求：使用transition:color 0.3s ease，hover时将color从灰色变为主题色。',
    previewHtml: '<div style="font-family:monospace;font-size:14px;color:var(--text-muted);animation:tCH_ 2s ease infinite">Hover Me</div>'
  },
  {
    id: 'hover-rotate',
    name: '悬停旋转图标',
    nameEn: 'Hover Rotate Icon',
    category: 'hover',
    difficulty: 'easy',
    tags: ['悬停', '旋转', '图标', '箭头'],
    description: '悬停时图标旋转90度，常用于箭头。',
    html: '<div class="icon">⚙</div>',
    css: `.icon {
  transition: transform 0.4s ease;
}
.icon:hover {
  transform: rotate(90deg);
}`,
    prompt: '请用纯CSS实现悬停旋转图标效果。要求：使用transition:transform 0.4s ease，hover时transform:rotate(90deg)旋转90度。',
    previewHtml: '<div style="font-size:20px;cursor:pointer;animation:hSp_ 2s ease infinite">⚙</div>'
  },
  {
    id: 'fill-bg',
    name: '背景色填充',
    nameEn: 'Fill Background',
    category: 'hover',
    difficulty: 'easy',
    tags: ['背景', '填充', '悬停', '按钮'],
    description: '背景色从左向右扩散填满。',
    html: '<button class="btn">Hover</button>',
    css: `.btn {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.btn::before {
  content: "";
  position: absolute; inset: 0;
  background: #00e5a0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
  z-index: -1;
}
.btn:hover::before {
  transform: scaleX(1);
}`,
    prompt: '请用纯CSS实现背景色填充效果。要求：使用::before伪元素作为背景层，默认scaleX(0)隐藏，hover时通过transition从左向右scaleX(1)填满。',
    previewHtml: '<div style="width:44px;height:44px;position:relative;overflow:hidden;background:transparent;border:2px solid var(--primary);border-radius:8px"><div style="position:absolute;inset:0;background:linear-gradient(135deg,var(--primary),#a855f7);transform:scaleX(0);transform-origin:left;animation:fillB_ 2s ease infinite;z-index:-1"></div></div>'
  },
  {
    id: 'hover-flip',
    name: '悬停翻转卡片',
    nameEn: 'Hover Flip Card',
    category: 'hover',
    difficulty: 'medium',
    tags: ['悬停', '翻转', '3D', '卡片'],
    description: '卡片悬停时3D翻转露出背面。',
    html: '<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front">Front</div><div class="flip-card-back">Back</div></div></div>',
    css: `.flip-card {
  perspective: 1000px;
}
.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,.flip-card-back {
  backface-visibility: hidden;
}
.flip-card-back {
  transform: rotateY(180deg);
}`,
    prompt: '请用纯CSS实现悬停翻转卡片效果。要求：外层perspective:1000px，内层transform-style:preserve-3d，hover时rotateY(180deg)，正反面backface-visibility:hidden。',
    previewHtml: '<div style="perspective:200px;width:55px;height:55px;animation:cardF_ 3s ease infinite"><div style="width:100%;height:100%;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold">A</div></div>'
  },
  {
    id: 'hover-ripple',
    name: '悬停涟漪',
    nameEn: 'Hover Ripple',
    category: 'hover',
    difficulty: 'medium',
    tags: ['悬停', '涟漪', '扩散', '按钮'],
    description: '悬停时从中心产生涟漪扩散效果。',
    html: '<button class="ripple-btn">Ripple</button>',
    css: `.ripple-btn {
  position: relative;
  overflow: hidden;
}
.ripple-btn::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  width: 100px; height: 100px;
  transform: scale(0);
}
.ripple-btn:hover::after {
  animation: rippleEffect 0.6s ease;
}
@keyframes rippleEffect {
  to { transform: scale(4); opacity: 0; }
}`,
    prompt: '请用纯CSS实现悬停涟漪效果。要求：使用::after伪元素创建圆形，hover时通过@keyframes从scale(0)扩散到scale(4)同时opacity归零。',
    previewHtml: '<div style="position:relative;width:36px;height:36px;border-radius:50%;overflow:hidden;background:var(--primary);display:flex;align-items:center;justify-content:center"><div style="position:absolute;width:20px;height:20px;background:rgba(255,255,255,.2);border-radius:50%;animation:rpH_ 1.5s ease infinite;left:50%;top:50%;transform:translate(-50%,-50%)"></div></div>'
  },
  {
    id: 'hover-tilt',
    name: '悬停倾斜',
    nameEn: 'Hover Tilt',
    category: 'hover',
    difficulty: 'easy',
    tags: ['悬停', '倾斜', '3D', '透视'],
    description: '元素向鼠标方向轻微倾斜，3D透视感。',
    html: '<div class="tilt">Tilt me</div>',
    css: `.tilt {
  transition: transform 0.3s ease;
}
.tilt:hover {
  transform: perspective(500px) rotateY(10deg) rotateX(-5deg);
}`,
    prompt: '请用纯CSS实现悬停倾斜效果。要求：使用transition:transform 0.3s ease，hover时配合perspective(500px)做rotateY(10deg)和rotateX(-5deg)的3D倾斜。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;perspective:300px;animation:tiltH_ 2s ease infinite"></div>'
  },
  {
    id: 'draw-border',
    name: '边框绘制',
    nameEn: 'Draw Border',
    category: 'hover',
    difficulty: 'medium',
    tags: ['边框', '绘制', '悬停', '手绘'],
    description: '悬停时边框逐段绘制出现，手绘感。',
    html: '<div class="draw-border">Draw</div>',
    css: `.draw-border {
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  transition: clip-path 0.6s ease;
}
.draw-border:hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}`,
    prompt: '请用纯CSS实现边框绘制效果。要求：使用clip-path:polygon从全隐藏到全显示的过渡，hover时通过transition逐步揭示元素的四个边。',
    previewHtml: '<div style="width:44px;height:44px;border:2px solid var(--primary);border-radius:4px;animation:bDr_ 2s ease infinite"></div>'
  },
  {
    id: 'scroll-fade',
    name: '滚动淡入',
    nameEn: 'Scroll Fade In',
    category: 'scroll',
    difficulty: 'medium',
    tags: ['滚动', '淡入', '视口', '入场'],
    description: '元素滚入视口时从透明渐现。',
    html: '<div class="fade-in">Content</div>',
    css: `.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
// JS: IntersectionObserver`,
    js: `const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
});`,
    prompt: '请用CSS+JavaScript实现滚动淡入效果。要求：元素默认opacity:0和translateY(30px)，使用IntersectionObserver监听元素进入视口时添加visible类恢复可见。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:fadeIn_ 2s ease infinite"></div>'
  },
  {
    id: 'scroll-slide-left',
    name: '滚动滑入',
    nameEn: 'Scroll Slide Left',
    category: 'scroll',
    difficulty: 'medium',
    tags: ['滚动', '滑入', '左', '图文'],
    description: '元素从左侧滑入视口，适合图文排版。',
    html: '<div class="slide-left">Slide In</div>',
    css: `.slide-left {
  opacity: 0;
  transform: translateX(-60px);
  transition: all 0.6s ease;
}
.slide-left.visible {
  opacity: 1;
  transform: translateX(0);
}`,
    js: `const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
});`,
    prompt: '请用CSS+JavaScript实现滚动滑入效果。要求：元素默认opacity:0和translateX(-60px)，IntersectionObserver监听进入视口时添加visible类滑入。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:slideL_ 2s ease infinite"></div>'
  },
  {
    id: 'scroll-slide-right',
    name: '滚动右滑入',
    nameEn: 'Scroll Slide Right',
    category: 'scroll',
    difficulty: 'medium',
    tags: ['滚动', '滑入', '右', 'Z字'],
    description: '元素从右侧滑入，与左滑交替形成Z字排版。',
    html: '<div class="slide-right">Slide In</div>',
    css: `.slide-right {
  opacity: 0;
  transform: translateX(60px);
  transition: all 0.6s ease;
}
.slide-right.visible {
  opacity: 1;
  transform: translateX(0);
}`,
    js: `const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
});`,
    prompt: '请用CSS+JavaScript实现滚动右滑入效果。要求：元素默认opacity:0和translateX(60px)，IntersectionObserver监听进入视口时添加visible类。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:slideR_ 2s ease infinite"></div>'
  },
  {
    id: 'scroll-scale',
    name: '滚动缩放',
    nameEn: 'Scroll Scale',
    category: 'scroll',
    difficulty: 'medium',
    tags: ['滚动', '缩放', '视口', '入场'],
    description: '元素滚入时从小到大缩放出现。',
    html: '<div class="scale-in">Scale In</div>',
    css: `.scale-in {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.5s ease;
}
.scale-in.visible {
  opacity: 1;
  transform: scale(1);
}`,
    js: `const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
});`,
    prompt: '请用CSS+JavaScript实现滚动缩放效果。要求：元素默认opacity:0和scale(0.8)，IntersectionObserver监听进入视口时添加visible类恢复scale(1)。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:scaleI_ 2s ease infinite"></div>'
  },
  {
    id: 'stagger',
    name: '交错入场',
    nameEn: 'Stagger',
    category: 'scroll',
    difficulty: 'medium',
    tags: ['交错', '入场', '列表', '网格'],
    description: '多个子元素依次交错入场，适合列表和网格。',
    html: '<div class="stagger-item">1</div><div class="stagger-item">2</div><div class="stagger-item">3</div>',
    css: `.stagger-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}
.stagger-item.visible {
  opacity: 1;
  transform: translateY(0);
}
// JS: items.forEach((item, i) => {
//   item.style.transitionDelay = (i * 0.1) + "s";
// });`,
    js: `const items = document.querySelectorAll('.stagger-item');
items.forEach((item, i) => {
  item.style.transitionDelay = (i * 0.1) + 's';
});
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
});
items.forEach(el => obs.observe(el));`,
    prompt: '请用CSS+JavaScript实现交错入场效果。要求：每个元素设置递增的transition-delay，IntersectionObserver触发visible类，实现依次入场。',
    previewHtml: '<div style="display:flex;gap:8px"><div style="width:10px;height:10px;border-radius:50%;background:var(--primary);animation:fadeIn_ 1s ease infinite"></div><div style="width:10px;height:10px;border-radius:50%;background:var(--primary);animation:fadeIn_ 1s ease .2s infinite"></div><div style="width:10px;height:10px;border-radius:50%;background:var(--primary);animation:fadeIn_ 1s ease .4s infinite"></div><div style="width:10px;height:10px;border-radius:50%;background:var(--primary);animation:fadeIn_ 1s ease .6s infinite"></div></div>'
  },
  {
    id: 'parallax',
    name: '视差滚动',
    nameEn: 'Parallax',
    category: 'scroll',
    difficulty: 'hard',
    tags: ['视差', '滚动', '景深', '背景'],
    description: '背景与前景以不同速度滚动，营造景深感。',
    html: '<div class="parallax-bg"></div><div class="content">Content</div>',
    css: `// JS 驱动
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  bg.style.transform = "translateY(" + scrolled * 0.5 + "px)";
});`,
    js: `window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  bg.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
});`,
    prompt: '请用JavaScript实现视差滚动效果。要求：监听scroll事件，背景元素以scrollY*0.5的速度移动，前景以正常速度滚动，形成景深差。',
    previewHtml: '<div style="position:relative;width:100%;height:100%;overflow:hidden"><div style="position:absolute;width:120%;height:120%;top:-10%;left:-10%;background:linear-gradient(135deg,#0a2030,#0e1a25);animation:par_ 3s ease infinite alternate"></div><div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)"><div style="width:24px;height:24px;border-radius:50%;background:var(--primary)"></div></div></div>'
  },
  {
    id: 'scroll-progress',
    name: '滚动进度条',
    nameEn: 'Scroll Progress',
    category: 'scroll',
    difficulty: 'medium',
    tags: ['滚动', '进度', '指示', '顶部'],
    description: '页面顶部显示滚动进度指示条。',
    html: '<div class="scroll-progress"></div>',
    css: `// JS 驱动
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  bar.style.width = pct + "%";
});`,
    js: `window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  bar.style.width = pct + '%';
});`,
    prompt: '请用JavaScript实现滚动进度条效果。要求：监听scroll事件，计算scrollTop/(scrollHeight-clientHeight)的百分比，更新进度条元素的width。',
    previewHtml: '<div style="width:80px;height:4px;background:var(--border);border-radius:2px;overflow:hidden"><div style="height:100%;background:linear-gradient(90deg,var(--primary),#a855f7);animation:prog_ 2s ease infinite"></div></div>'
  },
  {
    id: 'sticky-header',
    name: '粘性标题',
    nameEn: 'Sticky Header',
    category: 'scroll',
    difficulty: 'easy',
    tags: ['粘性', '标题', '固定', '导航'],
    description: '标题滚到顶部后固定，始终可见。',
    html: '<header class="sticky-header">Title</header>',
    css: `.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(4,8,16,0.9);
  backdrop-filter: blur(12px);
}`,
    prompt: '请用纯CSS实现粘性标题效果。要求：使用position:sticky和top:0固定在顶部，配合backdrop-filter:blur实现毛玻璃效果。',
    previewHtml: '<div style="width:80px;height:8px;background:var(--primary);border-radius:4px;animation:slideL_ 2s ease infinite"></div>'
  },
  {
    id: 'scroll-counter',
    name: '滚动计数',
    nameEn: 'Scroll Counter',
    category: 'scroll',
    difficulty: 'hard',
    tags: ['滚动', '计数', '数字', '视口'],
    description: '数字在滚入视口时从0递增到目标值。',
    html: '<div data-target="999">0</div>',
    css: `const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      countUp(e.target, e.target.dataset.target, 2000);
      obs.unobserve(e.target);
    }
  });
});`,
    js: `const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      countUp(e.target, e.target.dataset.target, 2000);
      obs.unobserve(e.target);
    }
  });
});
document.querySelectorAll('[data-target]').forEach(el => obs.observe(el));`,
    prompt: '请用JavaScript实现滚动计数效果。要求：IntersectionObserver监听数字元素进入视口时触发countUp函数，从0递增到data-target属性值，只触发一次。',
    previewHtml: '<div style="font-family:monospace;font-size:20px;color:var(--primary)">0 → 999</div>'
  },
  {
    id: 'scroll-morph',
    name: '滚动变形',
    nameEn: 'Scroll Morph',
    category: 'scroll',
    difficulty: 'hard',
    tags: ['滚动', '变形', '圆角', '缩放'],
    description: '元素在滚动中形状持续变化。',
    html: '<div class="morph">Morph</div>',
    css: `// JS 驱动
window.addEventListener("scroll", () => {
  const pct = Math.min(window.scrollY / 500, 1);
  el.style.borderRadius = (pct * 50) + "%";
  el.style.transform = "scale(" + (1 + pct * 0.3) + ")";
});`,
    js: `window.addEventListener('scroll', () => {
  const pct = Math.min(window.scrollY / 500, 1);
  el.style.borderRadius = (pct * 50) + '%';
  el.style.transform = 'scale(' + (1 + pct * 0.3) + ')';
});`,
    prompt: '请用JavaScript实现滚动变形效果。要求：监听scroll事件，根据滚动百分比动态改变border-radius和transform:scale，实现方形到圆形的渐变。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);animation:sqC_ 2s ease infinite alternate"></div>'
  },
  {
    id: 'btn-press',
    name: '按钮按压',
    nameEn: 'Button Press',
    category: 'button',
    difficulty: 'easy',
    tags: ['按压', '按钮', '反馈', '缩小'],
    description: '按钮按下时缩小松开弹回，模拟物理按压。',
    html: '<button class="btn">Click me</button>',
    css: `.btn:active {
  transform: scale(0.95);
  transition: transform 0.1s ease;
}
.btn {
  transition: transform 0.2s ease;
}`,
    prompt: '请用纯CSS实现按钮按压效果。要求：使用:active伪类在点击时transform:scale(0.95)缩小，transition:transform 0.1s快速响应。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;font-weight:bold;animation:btnP_ 1.5s ease infinite">Click</div>'
  },
  {
    id: 'btn-ripple',
    name: '按钮波纹',
    nameEn: 'Button Ripple',
    category: 'button',
    difficulty: 'medium',
    tags: ['波纹', '按钮', 'Material', '点击'],
    description: 'Material Design风格的点击波纹。',
    html: '<button class="ripple-btn">Click</button>',
    css: `.ripple-btn { position: relative; overflow: hidden; }
// JS:
btn.addEventListener("click", (e) => {
  const circle = document.createElement("span");
  circle.className = "ripple-circle";
  circle.style.cssText = "position:absolute;border-radius:50%;" +
    "background:rgba(255,255,255,0.3);width:100px;height:100px;" +
    "left:"+(e.offsetX-50)+"px;top:"+(e.offsetY-50)+"px;" +
    "transform:scale(0);animation:ripple 0.6s ease";
  btn.appendChild(circle);
});`,
    js: `btn.addEventListener('click', (e) => {
  const circle = document.createElement('span');
  circle.style.cssText = 'position:absolute;border-radius:50%;background:rgba(255,255,255,.3);width:100px;height:100px;left:'+(e.offsetX-50)+'px;top:'+(e.offsetY-50)+'px;transform:scale(0);animation:ripple 0.6s ease';
  btn.appendChild(circle);
  circle.addEventListener('animationend', () => circle.remove());
});`,
    prompt: '请用JavaScript实现按钮波纹效果。要求：click事件获取鼠标坐标，创建span圆形元素从scale(0)到scale(4)扩散并fadeout，动画结束后移除元素。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;font-weight:bold"><div style="position:absolute;width:28px;height:28px;background:rgba(255,255,255,.3);border-radius:50%;transform:scale(0);animation:rpB_ 2s ease infinite"></div>Click</div>'
  },
  {
    id: 'btn-loading',
    name: '按钮加载态',
    nameEn: 'Button Loading',
    category: 'button',
    difficulty: 'medium',
    tags: ['加载', '按钮', '状态', '旋转'],
    description: '点击后按钮变为加载状态，完成后恢复。',
    html: '<button class="btn-loading">Loading...</button>',
    css: `.btn-loading {
  pointer-events: none;
}
.btn-loading::after {
  content: "";
  width: 16px; height: 16px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  display: inline-block;
  margin-left: 8px;
}`,
    prompt: '请用纯CSS实现按钮加载态效果。要求：使用::after伪元素创建旋转圆环，border-top-color为主题色，通过@keyframes旋转，pointer-events:none禁用交互。',
    previewHtml: '<div style="width:20px;height:20px;border:2px solid transparent;border-top-color:var(--primary);border-radius:50%;animation:spin_ .7s linear infinite"></div>'
  },
  {
    id: 'btn-glow',
    name: '按钮发光',
    nameEn: 'Button Glow',
    category: 'button',
    difficulty: 'easy',
    tags: ['发光', '按钮', '悬停', '光晕'],
    description: '按钮悬停时出现柔和的发光效果。',
    html: '<button class="glow-btn">Glow</button>',
    css: `.glow-btn {
  transition: all 0.3s ease;
}
.glow-btn:hover {
  box-shadow: 0 0 20px rgba(0,229,160,0.35),
              0 0 60px rgba(0,229,160,0.1);
}`,
    prompt: '请用纯CSS实现按钮发光效果。要求：使用transition平滑过渡，hover时添加多层box-shadow营造柔和发光。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:btnG_ 2s ease infinite;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;font-weight:bold">Glow</div>'
  },
  {
    id: 'toggle',
    name: '切换开关',
    nameEn: 'Toggle Switch',
    category: 'button',
    difficulty: 'easy',
    tags: ['开关', '切换', '滑动', '状态'],
    description: '开关从一侧滑到另一侧的过渡动画。',
    html: '<div class="toggle" onclick="this.classList.toggle(\'active\')"></div>',
    css: `.toggle {
  width: 50px; height: 26px;
  border-radius: 13px;
  background: #333;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;
}
.toggle.active {
  background: #00e5a0;
}
.toggle::after {
  content: "";
  position: absolute;
  top: 3px; left: 3px;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: #fff;
  transition: left 0.3s ease;
}
.toggle.active::after {
  left: 27px;
}`,
    prompt: '请用纯CSS实现切换开关效果。要求：圆角矩形容器+圆形按钮，使用::after伪元素，active状态时left从3px变为27px，背景色从灰色变为主题色。',
    previewHtml: '<div style="width:46px;height:24px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:12px;position:relative"><div style="position:absolute;top:3px;left:3px;width:18px;height:18px;background:#fff;border-radius:50%;animation:tgD_ 2s ease infinite"></div></div>'
  },
  {
    id: 'liquid-btn',
    name: '液体变形',
    nameEn: 'Liquid Button',
    category: 'button',
    difficulty: 'easy',
    tags: ['液体', '变形', '按钮', '圆角'],
    description: '按钮悬停时产生液体形变效果。',
    html: '<button class="liquid-btn">Liquid</button>',
    css: `.liquid-btn {
  border-radius: 30px;
  transition: border-radius 0.5s ease;
}
.liquid-btn:hover {
  border-radius: 30px 4px 30px 4px;
}`,
    prompt: '请用纯CSS实现液体变形按钮效果。要求：默认border-radius:30px全圆角，hover时变为30px 4px 30px 4px不对称圆角，transition平滑过渡。',
    previewHtml: '<div style="width:60px;height:28px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:22px;animation:liqB_ 3s ease infinite;display:flex;align-items:center;justify-content:center;font-size:9px;color:#fff;font-weight:bold">Liquid</div>'
  },
  {
    id: 'arrow-slide',
    name: '箭头滑动',
    nameEn: 'Arrow Slide',
    category: 'button',
    difficulty: 'easy',
    tags: ['箭头', '滑动', '按钮', '悬停'],
    description: '按钮内箭头在悬停时向右滑动。',
    html: '<button class="arrow-btn">Next <span class="arrow">→</span></button>',
    css: `.arrow-btn {
  display: flex;
  align-items: center;
  gap: 8px;
}
.arrow-btn .arrow {
  transition: transform 0.3s ease;
}
.arrow-btn:hover .arrow {
  transform: translateX(4px);
}`,
    prompt: '请用纯CSS实现箭头滑动效果。要求：箭头元素使用transition:transform 0.3s ease，hover时translateX(4px)向右滑动。',
    previewHtml: '<div style="display:flex;align-items:center;gap:3px;font-family:monospace;font-size:12px;color:var(--text)">Next<span style="animation:arrS_ 1s ease infinite;color:var(--primary)">→</span></div>'
  },
  {
    id: 'submit-success',
    name: '提交成功',
    nameEn: 'Submit Success',
    category: 'button',
    difficulty: 'hard',
    tags: ['提交', '成功', '变形', '状态'],
    description: '点击后按钮缩小变圆，最终变为成功状态。',
    html: '<button class="submit-btn">Submit</button>',
    css: `.submit-btn {
  width: 200px; height: 50px;
  border-radius: 8px;
  transition: all 0.5s ease;
}
.submit-btn.loading {
  width: 50px;
  border-radius: 50%;
}
.submit-btn.success {
  background: #00e5a0;
}`,
    prompt: '请用CSS+JavaScript实现提交成功效果。要求：点击后添加loading类缩小变圆，完成后添加success类变绿显示对勾，JS控制状态切换。',
    previewHtml: '<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--primary),#a855f7);display:flex;align-items:center;justify-content:center;font-size:16px;color:#fff;animation:subB_ 3s ease infinite">✓</div>'
  },
  {
    id: 'magnet',
    name: '磁吸按钮',
    nameEn: 'Magnet Button',
    category: 'button',
    difficulty: 'medium',
    tags: ['磁吸', '按钮', '吸引', '交互'],
    description: '元素像被磁铁吸引一样向目标靠拢。',
    html: '<div class="magnet">Snap</div>',
    css: `@keyframes magnetPull {
  0% { transform: translateX(-30px) scale(0.8); }
  60% { transform: translateX(5px) scale(1.05); }
  80% { transform: translateX(-2px) scale(0.98); }
  100% { transform: translateX(0) scale(1); }
}
.magnet {
  animation: magnetPull 0.6s ease forwards;
}`,
    prompt: '请用纯CSS实现磁吸按钮效果。要求：使用@keyframes模拟磁铁吸引，从translateX(-30px)经过overshoot到归位，配合scale变化增强物理感。',
    previewHtml: '<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--primary),#a855f7);animation:mgP_ 2s ease infinite"></div>'
  },
  {
    id: 'jelly',
    name: '果冻按钮',
    nameEn: 'Jelly Button',
    category: 'button',
    difficulty: 'easy',
    tags: ['果冻', '弹性', '按钮', '变形'],
    description: '点击后按钮像果冻一样弹性变形抖动。',
    html: '<button class="jelly">Jelly</button>',
    css: `@keyframes jelly {
  0% { transform: scale(1,1); }
  30% { transform: scale(1.25,0.75); }
  40% { transform: scale(0.75,1.25); }
  50% { transform: scale(1.15,0.85); }
  65% { transform: scale(0.95,1.05); }
  75% { transform: scale(1.05,0.95); }
  100% { transform: scale(1,1); }
}
.jelly {
  animation: jelly 0.6s ease;
}`,
    prompt: '请用纯CSS实现果冻按钮效果。要求：使用@keyframes在多个scale值之间弹性变化，模拟果冻被挤压后恢复的物理效果，X和Y轴反向变形。',
    previewHtml: '<div style="width:50px;height:30px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:12px;animation:jelly_ 1s ease infinite"></div>'
  },
  {
    id: 'mask-transition',
    name: '遮罩过渡',
    nameEn: 'Mask Transition',
    category: 'transition',
    difficulty: 'medium',
    tags: ['遮罩', '过渡', '电影', '页面'],
    description: '页面切换时用色块遮罩覆盖再揭开，电影感。',
    html: '<div class="mask"></div>',
    css: `@keyframes maskTransition {
  0% { transform: scaleY(0); transform-origin: bottom; }
  45% { transform: scaleY(1); transform-origin: bottom; }
  55% { transform: scaleY(1); transform-origin: top; }
  100% { transform: scaleY(0); transform-origin: top; }
}
.mask {
  animation: maskTransition 1.2s ease forwards;
}`,
    prompt: '请用纯CSS实现遮罩过渡效果。要求：使用@keyframes通过scaleY从0到1覆盖(从底部)，再从1到0揭开(从顶部)，通过切换transform-origin实现方向变化。',
    previewHtml: '<div style="width:100%;height:100%;position:relative;overflow:hidden"><div style="position:absolute;inset:0;background:linear-gradient(135deg,var(--primary),#a855f7);animation:maskT_ 2s ease infinite"></div></div>'
  },
  {
    id: 'slide-page',
    name: '滑动切换',
    nameEn: 'Slide Page',
    category: 'transition',
    difficulty: 'medium',
    tags: ['滑动', '切换', '页面', '过渡'],
    description: '新页面从右侧滑入，旧页面向左滑出。',
    html: '<div class="page-out">Old</div><div class="page-in">New</div>',
    css: `@keyframes slidePageOut {
  to { transform: translateX(-100%); }
}
@keyframes slidePageIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}`,
    prompt: '请用纯CSS实现滑动切换过渡效果。要求：旧页面@keyframes到translateX(-100%)滑出，新页面从translateX(100%)滑入到translateX(0)。',
    previewHtml: '<div style="width:100%;height:100%;position:relative;overflow:hidden"><div style="position:absolute;inset:0;background:var(--surface);animation:slPg_ 2s ease infinite"></div></div>'
  },
  {
    id: 'zoom-transition',
    name: '缩放过渡',
    nameEn: 'Zoom Transition',
    category: 'transition',
    difficulty: 'medium',
    tags: ['缩放', '过渡', '放大', '页面'],
    description: '旧内容缩小消失，新内容从大到正常出现。',
    html: '<div class="zoom-in">New</div>',
    css: `@keyframes zoomOut {
  to { transform: scale(0.8); opacity: 0; }
}
@keyframes zoomIn {
  from { transform: scale(1.2); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}`,
    prompt: '请用纯CSS实现缩放过渡效果。要求：旧内容zoomOut到scale(0.8)/opacity:0，新内容zoomIn从scale(1.2)到scale(1)。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:zmT_ 2s ease infinite"></div>'
  },
  {
    id: 'wipe',
    name: '擦除过渡',
    nameEn: 'Wipe Transition',
    category: 'transition',
    difficulty: 'easy',
    tags: ['擦除', '过渡', '蒙版', '揭示'],
    description: '像擦黑板一样用蒙版擦除旧内容。',
    html: '<div class="wipe-in">Content</div>',
    css: `@keyframes wipe {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
}
.wipe-in {
  animation: wipe 0.8s ease forwards;
}`,
    prompt: '请用纯CSS实现擦除过渡效果。要求：使用clip-path:inset从inset(0 100% 0 0)到inset(0 0 0 0)，实现从右到左的擦除揭示。',
    previewHtml: '<div style="width:100%;height:100%;background:linear-gradient(90deg,var(--primary),#a855f7);animation:wipeT_ 2s ease infinite"></div>'
  },
  {
    id: 'blur-transition',
    name: '模糊过渡',
    nameEn: 'Blur Transition',
    category: 'transition',
    difficulty: 'easy',
    tags: ['模糊', '过渡', '梦幻', '柔和'],
    description: '内容通过模糊效果渐入渐出，柔和梦幻。',
    html: '<div class="blur-in">Content</div>',
    css: `@keyframes blurIn {
  from { filter: blur(20px); opacity: 0; }
  to { filter: blur(0); opacity: 1; }
}
.blur-in {
  animation: blurIn 0.6s ease forwards;
}`,
    prompt: '请用纯CSS实现模糊过渡效果。要求：使用@keyframes从filter:blur(20px)/opacity:0到filter:blur(0)/opacity:1，实现从模糊到清晰的渐入。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:blurT_ 2s ease infinite"></div>'
  },
  {
    id: 'expand',
    name: '折叠展开',
    nameEn: 'Expand',
    category: 'transition',
    difficulty: 'medium',
    tags: ['折叠', '展开', '3D', '纸张'],
    description: '元素像折纸一样从折叠状态展开。',
    html: '<div class="unfold">Content</div>',
    css: `@keyframes unfold {
  from { transform: perspective(400px) rotateX(-90deg); opacity: 0; }
  to { transform: perspective(400px) rotateX(0); opacity: 1; }
}
.unfold {
  transform-origin: top;
  animation: unfold 0.6s ease forwards;
}`,
    prompt: '请用纯CSS实现折叠展开效果。要求：使用@keyframes配合perspective(400px)从rotateX(-90deg)翻转到rotateX(0)，transform-origin:top模拟从顶部展开。',
    previewHtml: '<div style="perspective:200px"><div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;transform-origin:top;animation:unfld_ 2s ease infinite"></div></div>'
  },
  {
    id: 'morph-tr',
    name: '形变过渡',
    nameEn: 'Morph Transition',
    category: 'transition',
    difficulty: 'medium',
    tags: ['形变', '过渡', '圆角', '变形'],
    description: '元素在不同形状之间平滑过渡。',
    html: '<div class="morph">Morph</div>',
    css: `@keyframes morphTrans {
  0%,100% { border-radius: 8px; }
  50% { border-radius: 50%; }
}
.morph {
  animation: morphTrans 3s ease infinite;
}`,
    prompt: '请用纯CSS实现形变过渡效果。要求：使用@keyframes在不同border-radius值之间平滑过渡，实现方形到圆形的渐变形变。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);animation:sqC_ 2s ease infinite alternate"></div>'
  },
  {
    id: 'crossfade',
    name: '交叉淡入淡出',
    nameEn: 'Crossfade',
    category: 'transition',
    difficulty: 'easy',
    tags: ['交叉', '淡入', '淡出', '过渡'],
    description: '两个元素交替淡入淡出切换。',
    html: '<div class="crossfade">A</div>',
    css: `@keyframes crossfade {
  0%,40% { opacity: 1; }
  50%,90% { opacity: 0; }
  100% { opacity: 1; }
}
.element {
  animation: crossfade 4s ease infinite;
}`,
    prompt: '请用纯CSS实现交叉淡入淡出效果。要求：使用@keyframes在opacity 1和0之间交替，两个元素animation-delay错开一半周期实现交叉。',
    previewHtml: '<div style="width:44px;height:44px;background:linear-gradient(135deg,var(--primary),#a855f7);border-radius:8px;animation:fadeIn_ 2s ease infinite alternate"></div>'
  },
// ==================== 高级效果 (Advanced) - 10个 ====================
  {
    id: 'particle-up',
    name: '粒子上升',
    nameEn: 'Particle Up',
    category: 'advanced',
    difficulty: 'medium',
    tags: ['particle', 'animation', 'green', 'float'],
    description: '多个粒子从底部向上飘散并逐渐缩小消失，营造梦幻氛围',
    html: '<div class="particle-field">\n  <div class="particle" style="left:20%;animation-delay:0s"></div>\n  <div class="particle" style="left:40%;animation-delay:0.3s"></div>\n  <div class="particle" style="left:60%;animation-delay:0.6s"></div>\n  <div class="particle" style="left:80%;animation-delay:0.9s"></div>\n</div>',
    css: '@keyframes particleUp { 0% { transform: translateY(0) scale(1); opacity: 1; } 100% { transform: translateY(-80px) scale(0); opacity: 0; } } .particle { position: absolute; width: 4px; height: 4px; background: #00e5a0; border-radius: 50%; animation: particleUp 1.5s ease infinite; } .particle-field { position: relative; width: 100%; height: 80px; }',
    js: '',
    prompt: '实现粒子上升效果：多个小圆点从不同水平位置出发，垂直向上运动同时缩小透明度递减至消失，形成上升粒子流。纯CSS实现，使用animation-delay错开每个粒子的起始时间。',
    previewHtml: '<div style="position:relative;width:48px;height:48px"><div style="position:absolute;left:8px;bottom:4px;width:4px;height:4px;background:#00e5a0;border-radius:50%;animation:ptU_ 1.5s ease infinite"></div><div style="position:absolute;left:18px;bottom:4px;width:4px;height:4px;background:#00e5a0;border-radius:50%;animation:ptU_ 1.5s ease .3s infinite"></div><div style="position:absolute;left:28px;bottom:4px;width:4px;height:4px;background:#00e5a0;border-radius:50%;animation:ptU_ 1.5s ease .6s infinite"></div><div style="position:absolute;left:38px;bottom:4px;width:4px;height:4px;background:#00e5a0;border-radius:50%;animation:ptU_ 1.5s ease .9s infinite"></div></div>'
  },
  {
    id: 'twinkle',
    name: '星星闪烁',
    nameEn: 'Twinkle Stars',
    category: 'advanced',
    difficulty: 'medium',
    tags: ['star', 'twinkle', 'animation', 'night'],
    description: '随机分布的星星以不同节奏闪烁，模拟夜空繁星',
    html: '<div class="star-field">\n  <div class="star" style="top:10%;left:15%;animation-delay:0s"></div>\n  <div class="star" style="top:30%;left:45%;animation-delay:0.5s"></div>\n  <div class="star" style="top:50%;left:75%;animation-delay:1s"></div>\n  <div class="star" style="top:70%;left:25%;animation-delay:1.5s"></div>\n  <div class="star" style="top:20%;left:85%;animation-delay:0.8s"></div>\n</div>',
    css: '@keyframes twinkle { 0%,100% { opacity: 0; transform: scale(0); } 50% { opacity: 1; transform: scale(1); } } .star { position: absolute; width: 3px; height: 3px; background: #00e5a0; border-radius: 50%; animation: twinkle 2s ease infinite; } .star-field { position: relative; width: 100%; height: 80px; background: #111; border-radius: 8px; }',
    js: '',
    prompt: '实现星星闪烁效果：在深色背景上放置多个小圆点代表星星，每个星星以scale和opacity动画实现明暗交替闪烁，通过不同animation-delay营造随机闪烁的夜空感。纯CSS实现。',
    previewHtml: '<div style="position:relative;width:48px;height:48px;background:#111;border-radius:4px"><div style="position:absolute;top:4px;left:6px;width:3px;height:3px;background:#00e5a0;border-radius:50%;animation:twk_ 2s ease infinite"></div><div style="position:absolute;top:14px;left:22px;width:3px;height:3px;background:#00e5a0;border-radius:50%;animation:twk_ 2s ease .5s infinite"></div><div style="position:absolute;top:24px;left:36px;width:3px;height:3px;background:#00e5a0;border-radius:50%;animation:twk_ 2s ease 1s infinite"></div><div style="position:absolute;top:34px;left:12px;width:3px;height:3px;background:#00e5a0;border-radius:50%;animation:twk_ 2s ease 1.5s infinite"></div></div>'
  },
  {
    id: 'orbit',
    name: '光环旋转',
    nameEn: 'Orbit Ring',
    category: 'advanced',
    difficulty: 'easy',
    tags: ['orbit', 'ring', 'spin', 'space'],
    description: '双层旋转光环，内外层反向旋转，营造行星轨道感',
    html: '<div class="orbit"></div>',
    css: '@keyframes spin { to { transform: rotate(360deg); } } .orbit { position: relative; width: 60px; height: 60px; } .orbit::before, .orbit::after { content: ""; position: absolute; border: 2px solid transparent; border-radius: 50%; } .orbit::before { inset: 0; border-top-color: #00e5a0; animation: spin 2s linear infinite; } .orbit::after { inset: 8px; border-bottom-color: #0ea5e9; animation: spin 3s linear infinite reverse; }',
    js: '',
    prompt: '实现光环旋转效果：使用伪元素创建两个圆形边框，仅显示部分颜色形成弧线，外层顺时针旋转、内层逆时针旋转，速度不同营造轨道感。纯CSS伪元素+animation实现。',
    previewHtml: '<div style="position:relative;width:48px;height:48px"><div style="position:absolute;inset:0;border:2px solid transparent;border-top-color:#00e5a0;border-radius:50%;animation:spin_ 2s linear infinite"></div><div style="position:absolute;inset:8px;border:2px solid transparent;border-bottom-color:#0ea5e9;border-radius:50%;animation:spin_ 3s linear infinite reverse"></div></div>'
  },
  {
    id: 'water-wave',
    name: '水波纹',
    nameEn: 'Water Wave',
    category: 'advanced',
    difficulty: 'easy',
    tags: ['water', 'wave', 'ripple', 'expand'],
    description: '从中心向外扩散的水波纹效果，层层叠叠',
    html: '<div class="wave-container">\n  <div class="wave" style="animation-delay:0s"></div>\n  <div class="wave" style="animation-delay:0.5s"></div>\n  <div class="wave" style="animation-delay:1s"></div>\n</div>',
    css: '@keyframes waterWave { 0% { transform: scale(0.5); opacity: 1; } 100% { transform: scale(3); opacity: 0; } } .wave { position: absolute; width: 30px; height: 30px; left: 50%; top: 50%; margin-left: -15px; margin-top: -15px; border: 2px solid #00e5a0; border-radius: 50%; animation: waterWave 2s ease infinite; } .wave-container { position: relative; width: 100%; height: 80px; }',
    js: '',
    prompt: '实现水波纹扩散效果：多个同心圆环从中心点同时向外扩散，scale从小到大，opacity从1到0，通过animation-delay错开形成连续波纹。纯CSS实现。',
    previewHtml: '<div style="position:relative;width:48px;height:48px"><div style="position:absolute;width:12px;height:12px;left:18px;top:18px;border:2px solid #00e5a0;border-radius:50%;animation:wW_ 2s ease infinite"></div><div style="position:absolute;width:12px;height:12px;left:18px;top:18px;border:2px solid #00e5a0;border-radius:50%;animation:wW_ 2s ease .5s infinite"></div><div style="position:absolute;width:12px;height:12px;left:18px;top:18px;border:2px solid #00e5a0;border-radius:50%;animation:wW_ 2s ease 1s infinite"></div></div>'
  },
  {
    id: 'smoke-fx',
    name: '烟雾消散',
    nameEn: 'Smoke',
    category: 'advanced',
    difficulty: 'easy',
    tags: ['smoke', 'blur', 'fade', 'text'],
    description: '文字像烟雾一样向上飘散消失',
    html: '<div class="smoke-text">SMOKE</div>',
    css: '@keyframes smoke { 0% { opacity: 1; filter: blur(0); transform: translateY(0); } 100% { opacity: 0; filter: blur(10px); transform: translateY(-30px) scale(1.5); } } .smoke-text { font-size: 24px; font-weight: bold; color: #00e5a0; animation: smoke 2s ease forwards; }',
    js: '',
    prompt: '实现烟雾消散效果：文字元素在向上移动的同时，逐渐增加blur模糊度、降低透明度并放大，模拟烟雾升腾消散的视觉效果。纯CSS animation+filter实现。',
    previewHtml: '<div style="font-size:16px;font-weight:bold;color:#00e5a0;animation:smk_ 2s ease forwards">SMOKE</div>'
  },
  {
    id: 'unfold',
    name: '折叠展开',
    nameEn: 'Unfold',
    category: 'advanced',
    difficulty: 'easy',
    tags: ['fold', 'unfold', '3d', 'perspective'],
    description: '元素从顶部折叠状态展开，带有3D透视效果',
    html: '<div class="unfold">\n  <div style="background:#00e5a0;padding:16px;border-radius:8px">Content Unfolded</div>\n</div>',
    css: '@keyframes unfold { from { transform: perspective(400px) rotateX(-90deg); opacity: 0; } to { transform: perspective(400px) rotateX(0); opacity: 1; } } .unfold { transform-origin: top; animation: unfold 0.6s ease forwards; }',
    js: '',
    prompt: '实现折叠展开效果：元素从顶部轴心以rotateX从-90度翻转到0度，配合perspective创建3D透视，同时opacity从0到1。transform-origin设为top。纯CSS实现。',
    previewHtml: '<div style="transform-origin:top;animation:unfld_ .6s ease forwards"><div style="background:#00e5a0;padding:8px;border-radius:4px;font-size:11px;color:#000">Unfold</div></div>'
  },
  {
    id: 'squash-stretch',
    name: '拉伸形变',
    nameEn: 'Squash Stretch',
    category: 'advanced',
    difficulty: 'easy',
    tags: ['squash', 'stretch', 'deform', 'bounce'],
    description: '弹性形变效果，物体先被压缩再拉伸最后恢复',
    html: '<div class="squash-stretch" style="width:40px;height:40px;background:#00e5a0;border-radius:8px"></div>',
    css: '@keyframes squashStretch { 0% { transform: translateX(-40px) scaleX(1.4) scaleY(0.8); } 50% { transform: translateX(0) scaleX(0.9) scaleY(1.1); } 100% { transform: translateX(0) scaleX(1) scaleY(1); } } .squash-stretch { animation: squashStretch 0.5s ease; }',
    js: '',
    prompt: '实现拉伸形变动画：元素从左侧飞入时，先被水平压缩垂直拉长(squash)，到达位置后反弹拉伸(stretch)，最终恢复原始比例。模拟经典动画的squash & stretch原则。',
    previewHtml: '<div style="width:32px;height:32px;background:#00e5a0;border-radius:6px;animation:strM_ .5s ease infinite alternate"></div>'
  },
  {
    id: 'shatter',
    name: '散射碎裂',
    nameEn: 'Shatter',
    category: 'advanced',
    difficulty: 'medium',
    tags: ['shatter', 'break', 'explode', 'fragment'],
    description: '元素碎裂成多个碎片向不同方向飞散消失',
    html: '<div class="shatter-wrap">\n  <div class="shard shard1" style="width:16px;height:16px;background:#00e5a0;border-radius:2px"></div>\n  <div class="shard shard2" style="width:12px;height:12px;background:#0ea5e9;border-radius:2px"></div>\n  <div class="shard shard3" style="width:10px;height:14px;background:#00e5a0;border-radius:2px"></div>\n</div>',
    css: '@keyframes shard1 { 0% { transform: translate(0) rotate(0); opacity: 1; } 100% { transform: translate(40px,-30px) rotate(180deg); opacity: 0; } } @keyframes shard2 { 0% { transform: translate(0) rotate(0); opacity: 1; } 100% { transform: translate(-30px,-40px) rotate(-120deg); opacity: 0; } } @keyframes shard3 { 0% { transform: translate(0) rotate(0); opacity: 1; } 100% { transform: translate(20px,30px) rotate(90deg); opacity: 0; } } .shard1 { animation: shard1 0.6s ease forwards; } .shard2 { animation: shard2 0.6s ease 0.05s forwards; } .shard3 { animation: shard3 0.6s ease 0.1s forwards; } .shatter-wrap { position: relative; width: 60px; height: 60px; }',
    js: '',
    prompt: '实现散射碎裂效果：将一个完整元素拆分成多个碎片，每个碎片向不同方向飞出并旋转，同时透明度递减至消失。每个碎片有不同的运动轨迹和旋转角度。纯CSS多组@keyframes实现。',
    previewHtml: '<div style="position:relative;width:48px;height:48px"><div style="position:absolute;left:16px;top:16px;width:14px;height:14px;background:#00e5a0;border-radius:2px;animation:br1_ .6s ease infinite"></div><div style="position:absolute;left:20px;top:20px;width:10px;height:10px;background:#0ea5e9;border-radius:2px;animation:br2_ .6s ease .05s infinite"></div><div style="position:absolute;left:18px;top:18px;width:8px;height:12px;background:#00e5a0;border-radius:2px;animation:br3_ .6s ease .1s infinite"></div></div>'
  },
  {
    id: 'wave-chars',
    name: '波浪文字',
    nameEn: 'Wave Chars',
    category: 'advanced',
    difficulty: 'medium',
    tags: ['wave', 'text', 'chars', 'stagger'],
    description: '每个字符依次上下波动，形成波浪传播效果',
    html: '<div class="wave-text">\n  <span class="char" style="animation-delay:0s">W</span>\n  <span class="char" style="animation-delay:0.1s">A</span>\n  <span class="char" style="animation-delay:0.2s">V</span>\n  <span class="char" style="animation-delay:0.3s">E</span>\n</div>',
    css: '@keyframes wave { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } } .char { display: inline-block; animation: wave 1s ease infinite; } .wave-text { font-size: 20px; font-weight: bold; color: #00e5a0; }',
    js: '',
    prompt: '实现波浪文字效果：将文字拆分为单个字符，每个字符执行translateY上下运动的动画，通过递增的animation-delay形成波浪传播的视觉效果。每个字符display:inline-block。',
    previewHtml: '<div style="font-size:16px;font-weight:bold;color:#00e5a0"><span style="display:inline-block;animation:wave_ 1s ease infinite">W</span><span style="display:inline-block;animation:wave_ 1s ease .1s infinite">A</span><span style="display:inline-block;animation:wave_ 1s ease .2s infinite">V</span><span style="display:inline-block;animation:wave_ 1s ease .3s infinite">E</span></div>'
  },
  {
    id: 'breathe-glow',
    name: '呼吸光圈',
    nameEn: 'Breathe Glow',
    category: 'advanced',
    difficulty: 'easy',
    tags: ['glow', 'breathe', 'pulse', 'shadow'],
    description: '圆形元素发出呼吸般节奏的光圈脉冲',
    html: '<div class="breathe-glow"></div>',
    css: '@keyframes breatheGlow { 0%,100% { box-shadow: 0 0 20px rgba(0,229,160,0.3); } 50% { box-shadow: 0 0 40px rgba(0,229,160,0.6); } } .breathe-glow { width: 32px; height: 32px; border-radius: 50%; background: #00e5a0; animation: breatheGlow 2s ease-in-out infinite; }',
    js: '',
    prompt: '实现呼吸光圈效果：圆形元素通过改变box-shadow的spread和透明度，模拟呼吸般的光圈脉冲节奏。使用ease-in-out缓动使过渡更自然。纯CSS box-shadow+animation实现。',
    previewHtml: '<div style="width:24px;height:24px;border-radius:50%;background:#00e5a0;animation:breathe_ 2s ease-in-out infinite"></div>'
  },

  // ==================== 微交互 (Micro) - 10个 ====================
  {
    id: 'check-draw',
    name: '选中勾勒',
    nameEn: 'Check Draw',
    category: 'micro',
    difficulty: 'easy',
    tags: ['checkbox', 'check', 'draw', 'form'],
    description: '勾选标记以绘画动画出现，先画横再画竖',
    html: '<div style="width:24px;height:24px;border:2px solid #00e5a0;border-radius:4px;position:relative">\n  <div class="checkmark"></div>\n</div>',
    css: '@keyframes checkDraw { 0% { height: 0; width: 0; } 50% { height: 0; width: 6px; } 100% { height: 12px; width: 6px; } } .checkmark { position: absolute; left: 7px; top: 6px; border-right: 2px solid #00e5a0; border-bottom: 2px solid #00e5a0; transform: rotate(45deg); animation: checkDraw 0.4s ease forwards; }',
    js: '',
    prompt: '实现选中勾勒动画：在方框内，勾选标记(对勾)通过两阶段动画绘制出现——先扩展宽度画横线，再扩展高度画竖线，模拟手写勾选的效果。纯CSS border+animation实现。',
    previewHtml: '<div style="width:24px;height:24px;border:2px solid #00e5a0;border-radius:4px;position:relative"><div style="position:absolute;left:7px;top:6px;border-right:2px solid #00e5a0;border-bottom:2px solid #00e5a0;transform:rotate(45deg);animation:chkD_ .4s ease forwards"></div></div>'
  },
  {
    id: 'badge-in',
    name: '通知角标弹入',
    nameEn: 'Badge In',
    category: 'micro',
    difficulty: 'easy',
    tags: ['badge', 'notification', 'bounce', 'pop'],
    description: '通知角标以弹性缩放动画弹入显示',
    html: '<div style="position:relative;display:inline-block">\n  <div style="width:32px;height:32px;background:#333;border-radius:8px"></div>\n  <div class="badge" style="color:#fff;font-size:10px;display:flex;align-items:center;justify-content:center">3</div>\n</div>',
    css: '@keyframes badgeIn { 0% { transform: scale(0); } 50% { transform: scale(1.3); } 100% { transform: scale(1); } } .badge { position: absolute; top: -8px; right: -8px; min-width: 18px; height: 18px; background: #f43f5e; border-radius: 9px; animation: badgeIn 0.4s cubic-bezier(.175,.885,.32,1.275); }',
    js: '',
    prompt: '实现通知角标弹入效果：角标从scale(0)开始，先放大到scale(1.3)超过目标大小，再回弹到scale(1)。使用cubic-bezier(.175,.885,.32,1.275)缓动函数产生弹性效果。纯CSS实现。',
    previewHtml: '<div style="position:relative;display:inline-block"><div style="width:32px;height:32px;background:#333;border-radius:8px"></div><div style="position:absolute;top:-8px;right:-8px;min-width:18px;height:18px;background:#f43f5e;border-radius:9px;color:#fff;font-size:10px;display:flex;align-items:center;justify-content:center;animation:bdgI_ .4s cubic-bezier(.175,.885,.32,1.275)">3</div></div>'
  },
  {
    id: 'fly-to-cart',
    name: '飞入购物车',
    nameEn: 'Fly to Cart',
    category: 'micro',
    difficulty: 'medium',
    tags: ['cart', 'fly', 'ecommerce', 'motion'],
    description: '商品缩略图沿弧线飞入购物车图标',
    html: '<div style="position:relative;width:180px;height:80px">\n  <div class="fly-item" style="width:20px;height:20px;background:#00e5a0;border-radius:4px;position:absolute;left:0;top:30px"></div>\n  <div style="position:absolute;right:0;bottom:0;font-size:20px">🛒</div>\n</div>',
    css: '@keyframes flyToCart { 0% { transform: translate(0,0) scale(1); opacity: 1; } 50% { transform: translate(80px,-60px) scale(0.5); opacity: 0.8; } 100% { transform: translate(160px,0) scale(0); opacity: 0; } } .fly-item { animation: flyToCart 0.8s ease forwards; }',
    js: '',
    prompt: '实现飞入购物车效果：商品小图从起始位置沿抛物线轨迹飞向购物车图标，过程中同时缩小并降低透明度。使用两段translate模拟弧线路径，最终scale(0)消失。纯CSS animation实现。',
    previewHtml: '<div style="position:relative;width:48px;height:48px"><div style="width:12px;height:12px;background:#00e5a0;border-radius:3px;position:absolute;left:0;top:18px;animation:flyC_ .8s ease infinite"></div><div style="position:absolute;right:2px;bottom:2px;font-size:16px">🛒</div></div>'
  },
  {
    id: 'like-burst',
    name: '点赞爆裂',
    nameEn: 'Like Burst',
    category: 'micro',
    difficulty: 'medium',
    tags: ['like', 'heart', 'burst', 'favorite'],
    description: '点赞时心形图标弹跳缩放，周围粒子爆裂散开',
    html: '<div style="position:relative;width:40px;height:40px;display:flex;align-items:center;justify-content:center">\n  <div class="like-icon" style="font-size:24px;animation:likeBurst 0.6s ease">❤️</div>\n  <div class="burst-particle" style="--tx:20px;--ty:-20px;position:absolute;width:4px;height:4px;background:#f43f5e;border-radius:50%;animation:burst 0.6s ease forwards"></div>\n  <div class="burst-particle" style="--tx:-18px;--ty:-16px;position:absolute;width:4px;height:4px;background:#f43f5e;border-radius:50%;animation:burst 0.6s ease 0.05s forwards"></div>\n</div>',
    css: '@keyframes likeBurst { 0% { transform: scale(1); } 30% { transform: scale(1.4); } 60% { transform: scale(0.9); } 100% { transform: scale(1); } } @keyframes burst { 0% { transform: translate(0,0) scale(1); opacity: 1; } 100% { transform: translate(var(--tx),var(--ty)) scale(0); opacity: 0; } }',
    js: '',
    prompt: '实现点赞爆裂效果：点击时心形图标先放大再缩小回弹，同时周围多个小粒子从中心向不同方向爆裂散开。使用CSS自定义属性var(--tx)/var(--ty)控制每个粒子的散射方向。',
    previewHtml: '<div style="position:relative;width:48px;height:48px;display:flex;align-items:center;justify-content:center"><div style="font-size:20px;animation:lkB_ .6s ease infinite">❤️</div><div style="--tx:16px;--ty:-16px;position:absolute;width:4px;height:4px;background:#f43f5e;border-radius:50%;animation:lkB_ .6s ease infinite"></div><div style="--tx:-14px;--ty:-12px;position:absolute;width:4px;height:4px;background:#f43f5e;border-radius:50%;animation:lkB_ .6s ease .05s infinite"></div></div>'
  },
  {
    id: 'confetti',
    name: '庆祝纸屑',
    nameEn: 'Confetti',
    category: 'micro',
    difficulty: 'medium',
    tags: ['confetti', 'celebrate', 'party', 'colorful'],
    description: '彩色纸屑从中心爆发出并向四周飘落',
    html: '<div class="confetti-wrap">\n  <div class="confetti-piece" style="background:#f43f5e;left:30%;animation-delay:0s;--x:-20px;--y:-40px"></div>\n  <div class="confetti-piece" style="background:#00e5a0;left:50%;animation-delay:0.1s;--x:10px;--y:-50px"></div>\n  <div class="confetti-piece" style="background:#0ea5e9;left:70%;animation-delay:0.2s;--x:25px;--y:-35px"></div>\n</div>',
    css: '@keyframes confetti { 0% { transform: translateY(0) rotate(0); opacity: 1; } 100% { transform: translateY(-100px) rotate(720deg); opacity: 0; } } @keyframes celebrate { 0% { transform: scale(0) rotate(-10deg); } 50% { transform: scale(1.2) rotate(5deg); } 100% { transform: scale(1) rotate(0); } } .confetti-piece { position: absolute; width: 6px; height: 6px; bottom: 50%; animation: confetti 1.5s ease forwards; }',
    js: '',
    prompt: '实现庆祝纸屑效果：多个彩色小方块从中心位置向上爆射，同时旋转并最终淡出消失。每个纸屑有不同的颜色、延迟和运动方向，模拟庆祝场景。',
    previewHtml: '<div style="position:relative;width:48px;height:48px"><div style="position:absolute;width:4px;height:4px;background:#f43f5e;left:30%;bottom:50%;animation:cnf1_ 1.5s ease infinite"></div><div style="position:absolute;width:4px;height:4px;background:#00e5a0;left:50%;bottom:50%;animation:cnf2_ 1.5s ease .1s infinite"></div><div style="position:absolute;width:4px;height:4px;background:#0ea5e9;left:70%;bottom:50%;animation:cnf3_ 1.5s ease .2s infinite"></div><div style="position:absolute;width:4px;height:4px;background:#f59e0b;left:40%;bottom:50%;animation:cnf4_ 1.5s ease .3s infinite"></div></div>'
  },
  {
    id: 'cursor-trail',
    name: '光标拖尾',
    nameEn: 'Cursor Trail',
    category: 'micro',
    difficulty: 'hard',
    tags: ['cursor', 'trail', 'canvas', 'mouse'],
    description: '鼠标移动时留下渐变色的拖尾光点效果',
    html: '<canvas id="trail-canvas" width="300" height="150" style="background:#111;border-radius:8px"></canvas>',
    css: '#trail-canvas { cursor: crosshair; }',
    js: 'const canvas = document.getElementById("trail-canvas");\nconst ctx = canvas.getContext("2d");\nlet points = [];\ncanvas.addEventListener("mousemove", (e) => {\n  const rect = canvas.getBoundingClientRect();\n  points.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, life: 1, hue: Date.now() / 5 % 360 });\n});\nfunction draw() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  points.forEach((p, i) => {\n    ctx.beginPath();\n    ctx.arc(p.x, p.y, 4 * p.life, 0, Math.PI * 2);\n    ctx.fillStyle = `hsla(${p.hue},100%,60%,${p.life})`;\n    ctx.fill();\n    p.life -= 0.02;\n  });\n  points = points.filter(p => p.life > 0);\n  requestAnimationFrame(draw);\n}\ndraw();',
    prompt: '实现光标拖尾效果：使用Canvas监听mousemove事件，记录鼠标位置到数组，每帧绘制带HSL颜色渐变的圆点，透明度随时间递减，形成彩虹色拖尾。需要requestAnimationFrame循环。',
    previewHtml: '<div style="width:48px;height:48px;background:#111;border-radius:8px;position:relative;overflow:hidden"><div style="position:absolute;left:8px;top:12px;width:6px;height:6px;background:hsla(0,100%,60%,0.9);border-radius:50%"></div><div style="position:absolute;left:16px;top:18px;width:5px;height:5px;background:hsla(60,100%,60%,0.7);border-radius:50%"></div><div style="position:absolute;left:24px;top:22px;width:4px;height:4px;background:hsla(120,100%,60%,0.5);border-radius:50%"></div><div style="position:absolute;left:30px;top:28px;width:3px;height:3px;background:hsla(180,100%,60%,0.3);border-radius:50%"></div></div>'
  },
  {
    id: 'ripple-click',
    name: '点击波纹',
    nameEn: 'Ripple Click',
    category: 'micro',
    difficulty: 'medium',
    tags: ['ripple', 'click', 'material', 'touch'],
    description: '点击位置产生向外扩散的波纹效果',
    html: '<div class="ripple-target" onclick="createRipple(event)" style="width:120px;height:60px;background:#333;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;cursor:pointer;overflow:hidden;position:relative">Click Me</div>',
    css: '.ripple-target { position: relative; overflow: hidden; } .ripple-circle { position: absolute; border-radius: 50%; background: rgba(0,229,160,0.4); transform: scale(0); animation: rippleExpand 0.6s ease-out forwards; pointer-events: none; } @keyframes rippleExpand { to { transform: scale(4); opacity: 0; } }',
    js: 'function createRipple(e) {\n  const target = e.currentTarget;\n  const rect = target.getBoundingClientRect();\n  const size = Math.max(rect.width, rect.height);\n  const circle = document.createElement("span");\n  circle.className = "ripple-circle";\n  circle.style.width = circle.style.height = size + "px";\n  circle.style.left = (e.clientX - rect.left - size / 2) + "px";\n  circle.style.top = (e.clientY - rect.top - size / 2) + "px";\n  target.appendChild(circle);\n  setTimeout(() => circle.remove(), 600);\n}',
    prompt: '实现Material Design风格的点击波纹：点击元素时，在鼠标位置创建一个span圆元素，从scale(0)扩散到scale(4)同时淡出。需要JS获取点击坐标并动态创建DOM元素。',
    previewHtml: '<div style="width:48px;height:48px;background:#333;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;cursor:pointer;overflow:hidden;position:relative"><span style="position:absolute;width:48px;height:48px;left:12px;top:12px;border-radius:50%;background:rgba(0,229,160,0.4);animation:ripple_ .6s ease-out infinite"></span>Click</div>'
  },
  {
    id: 'toast-slide',
    name: '通知滑入',
    nameEn: 'Toast Slide',
    category: 'micro',
    difficulty: 'easy',
    tags: ['toast', 'notification', 'slide', 'alert'],
    description: '通知消息从右侧滑入，停留后自动滑出',
    html: '<div class="toast" style="background:#333;color:#fff;padding:10px 16px;border-radius:8px;border-left:3px solid #00e5a0;font-size:13px">操作成功！</div>',
    css: '@keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } } @keyframes slideOut { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(40px); } } .toast { animation: slideInRight 0.3s ease, slideOut 0.3s ease 2.7s forwards; }',
    js: '',
    prompt: '实现通知滑入效果：Toast通知从右侧滑入到当前位置(translateX(40px)到0)，停留2.7秒后自动滑出消失(translateX(0)到40px)。使用两个animation串联实现进入和退出。',
    previewHtml: '<div style="background:#333;color:#fff;padding:6px 10px;border-radius:6px;border-left:3px solid #00e5a0;font-size:10px;animation:slideR_ .3s ease infinite alternate">操作成功</div>'
  },
  {
    id: 'star-pop',
    name: '收藏弹出',
    nameEn: 'Star Pop',
    category: 'micro',
    difficulty: 'easy',
    tags: ['star', 'favorite', 'pop', 'bookmark'],
    description: '收藏星星图标弹跳缩放并旋转的动画',
    html: '<div class="star-icon" style="font-size:28px;cursor:pointer;animation:starPop 0.4s ease">⭐</div>',
    css: '@keyframes starPop { 0% { transform: scale(1); } 50% { transform: scale(1.4) rotate(15deg); } 100% { transform: scale(1) rotate(0); } }',
    js: '',
    prompt: '实现收藏弹出效果：星星图标点击时先放大到scale(1.4)并旋转15度，再回弹恢复原始大小和角度。使用ease缓动，0.4秒完成。纯CSS animation实现。',
    previewHtml: '<div style="font-size:20px;animation:starPop_ .4s ease infinite alternate">⭐</div>'
  },
  {
    id: 'shake-error',
    name: '错误抖动',
    nameEn: 'Error Shake',
    category: 'micro',
    difficulty: 'easy',
    tags: ['shake', 'error', 'validation', 'form'],
    description: '输入框验证失败时水平来回抖动提示错误',
    html: '<div class="shake-box" style="width:120px;height:32px;border:2px solid #f43f5e;border-radius:6px;display:flex;align-items:center;padding:0 8px;font-size:12px;color:#f43f5e;animation:shake 0.5s ease">Invalid input</div>',
    css: '@keyframes shake { 0%,100% { transform: translateX(0); } 10%,30%,50%,70%,90% { transform: translateX(-4px); } 20%,40%,60%,80% { transform: translateX(4px); } }',
    js: '',
    prompt: '实现错误抖动效果：元素在水平方向快速左右来回移动，幅度4px，间隔均匀，0.5秒内完成多次抖动后回到原位。模拟表单验证失败时的错误提示效果。纯CSS animation实现。',
    previewHtml: '<div style="width:80px;height:24px;border:2px solid #f43f5e;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:9px;color:#f43f5e;animation:shake_ .5s ease infinite">Error</div>'
  },

  // ==================== 来自大动效.html的额外效果 - 6个 ====================
  {
    id: 'stagger-grid',
    name: '瀑布网格',
    nameEn: 'Stagger Grid',
    category: 'advanced',
    difficulty: 'medium',
    tags: ['grid', 'stagger', 'intersection', 'reveal'],
    description: '网格中的格子交错出现，形成瀑布式逐个显现效果',
    html: '<div class="stagger-grid">\n  <div class="grid-tile" style="transition-delay:0s"></div>\n  <div class="grid-tile" style="transition-delay:0.08s"></div>\n  <div class="grid-tile" style="transition-delay:0.16s"></div>\n  <div class="grid-tile" style="transition-delay:0.08s"></div>\n  <div class="grid-tile" style="transition-delay:0.16s"></div>\n  <div class="grid-tile" style="transition-delay:0.24s"></div>\n  <div class="grid-tile" style="transition-delay:0.16s"></div>\n  <div class="grid-tile" style="transition-delay:0.24s"></div>\n  <div class="grid-tile" style="transition-delay:0.32s"></div>\n</div>',
    css: '.stagger-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; width: 120px; } .grid-tile { width: 100%; aspect-ratio: 1; background: #00e5a0; border-radius: 4px; opacity: 0; transform: scale(0.8); transition: opacity 0.4s ease, transform 0.4s ease; } .grid-tile.visible { opacity: 1; transform: scale(1); }',
    js: 'const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      entry.target.classList.add("visible");\n    }\n  });\n}, { threshold: 0.1 });\ndocument.querySelectorAll(".grid-tile").forEach(tile => observer.observe(tile));',
    prompt: '实现瀑布网格效果：CSS Grid布局的格子，每个tile设置不同的transition-delay（基于行列位置计算），通过IntersectionObserver在元素进入视口时逐个添加visible类触发显示动画。',
    previewHtml: '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;width:42px"><div style="width:12px;height:12px;background:#00e5a0;border-radius:2px;animation:fadeIn_ .4s ease forwards"></div><div style="width:12px;height:12px;background:#00e5a0;border-radius:2px;animation:fadeIn_ .4s ease .08s forwards;opacity:0"></div><div style="width:12px;height:12px;background:#00e5a0;border-radius:2px;animation:fadeIn_ .4s ease .16s forwards;opacity:0"></div><div style="width:12px;height:12px;background:#00e5a0;border-radius:2px;animation:fadeIn_ .4s ease .08s forwards;opacity:0"></div><div style="width:12px;height:12px;background:#00e5a0;border-radius:2px;animation:fadeIn_ .4s ease .16s forwards;opacity:0"></div><div style="width:12px;height:12px;background:#00e5a0;border-radius:2px;animation:fadeIn_ .4s ease .24s forwards;opacity:0"></div><div style="width:12px;height:12px;background:#00e5a0;border-radius:2px;animation:fadeIn_ .4s ease .16s forwards;opacity:0"></div><div style="width:12px;height:12px;background:#00e5a0;border-radius:2px;animation:fadeIn_ .4s ease .24s forwards;opacity:0"></div><div style="width:12px;height:12px;background:#00e5a0;border-radius:2px;animation:fadeIn_ .4s ease .32s forwards;opacity:0"></div></div>'
  },
  {
    id: 'glow-border',
    name: '旋转发光边框',
    nameEn: 'Glow Border',
    category: 'advanced',
    difficulty: 'medium',
    tags: ['glow', 'border', 'conic', 'gradient'],
    description: '卡片边框发出旋转的彩虹光效，酷炫科技感',
    html: '<div class="glow-card">\n  <div class="glow-inner">Glow Card</div>\n</div>',
    css: '.glow-card { position: relative; width: 120px; height: 60px; border-radius: 10px; overflow: hidden; } .glow-card::before { content: ""; position: absolute; inset: -10px; background: conic-gradient(from 0deg, #00e5a0, #0ea5e9, #f43f5e, #00e5a0); border-radius: 10px; animation: rotateGlow 3s linear infinite; } @keyframes rotateGlow { to { transform: rotate(360deg); } } .glow-inner { position: absolute; inset: 3px; background: #1a1a2e; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 14px; z-index: 1; }',
    js: '',
    prompt: '实现旋转发光边框效果：外层容器overflow:hidden，::before伪元素尺寸大于容器(160%)并使用conic-gradient创建彩虹渐变，持续旋转3秒一圈。内层纯色div用inset:3px覆盖中心区域，露出3px宽的旋转渐变边框。',
    previewHtml: '<div style="position:relative;width:48px;height:48px;border-radius:10px;overflow:hidden"><div style="position:absolute;inset:-10px;background:conic-gradient(from 0deg,#00e5a0,#0ea5e9,#f43f5e,#00e5a0);border-radius:10px;animation:spin_ 3s linear infinite"></div><div style="position:absolute;inset:3px;background:#1a1a2e;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;z-index:1">Glow</div></div>'
  },
  {
    id: 'glassmorphism',
    name: '毛玻璃',
    nameEn: 'Glassmorphism',
    category: 'advanced',
    difficulty: 'easy',
    tags: ['glass', 'blur', 'frosted', 'modern'],
    description: '毛玻璃效果，半透明背景带有模糊和白色边框',
    html: '<div style="background:linear-gradient(135deg,#0ea5e9,#00e5a0);padding:24px;border-radius:12px">\n  <div class="glass-card">\n    <p style="margin:0;color:#fff;font-size:14px">Glassmorphism</p>\n  </div>\n</div>',
    css: '.glass-card { background: rgba(255,255,255,0.18); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.3); border-radius: 12px; padding: 20px; }',
    js: '',
    prompt: '实现毛玻璃效果：使用rgba半透明白色背景+backdrop-filter:blur(16px)实现背景模糊，配合1px半透明白色边框。需要有彩色渐变背景层来展示效果。纯CSS实现。',
    previewHtml: '<div style="background:linear-gradient(135deg,#0ea5e9,#00e5a0);padding:10px;border-radius:8px"><div style="background:rgba(255,255,255,0.18);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.3);border-radius:8px;padding:12px;color:#fff;font-size:10px;text-align:center">Glass</div></div>'
  },
  {
    id: 'floating-orbs',
    name: '悬浮光球',
    nameEn: 'Floating Orbs',
    category: 'advanced',
    difficulty: 'medium',
    tags: ['orb', 'float', 'gradient', 'ambient'],
    description: '多个彩色光球缓慢浮动，营造梦幻氛围',
    html: '<div class="orb-container">\n  <div class="orb orb1"></div>\n  <div class="orb orb2"></div>\n  <div class="orb orb3"></div>\n</div>',
    css: '.orb-container { position: relative; width: 160px; height: 100px; background: #111; border-radius: 8px; overflow: hidden; } .orb { position: absolute; border-radius: 50%; filter: blur(20px); opacity: 0.7; } .orb1 { width: 40px; height: 40px; background: radial-gradient(circle, #00e5a0, transparent); top: 20%; left: 20%; animation: float1 4s ease-in-out infinite; } .orb2 { width: 30px; height: 30px; background: radial-gradient(circle, #0ea5e9, transparent); top: 50%; left: 60%; animation: float2 5s ease-in-out infinite 1s; } .orb3 { width: 35px; height: 35px; background: radial-gradient(circle, #f43f5e, transparent); top: 30%; left: 40%; animation: float3 6s ease-in-out infinite 0.5s; } @keyframes float1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(20px,-15px); } } @keyframes float2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-15px,20px); } } @keyframes float3 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(10px,10px); } }',
    js: '',
    prompt: '实现悬浮光球效果：多个圆形div使用radial-gradient着色，添加filter:blur模糊处理，各自执行不同的translate浮动动画，duration和delay各不相同，营造自然的漂浮感。',
    previewHtml: '<div style="position:relative;width:48px;height:48px;background:#111;border-radius:8px;overflow:hidden"><div style="position:absolute;width:24px;height:24px;background:radial-gradient(circle,#00e5a0,transparent);filter:blur(8px);opacity:.7;top:20%;left:20%;animation:float1_ 4s ease-in-out infinite"></div><div style="position:absolute;width:18px;height:18px;background:radial-gradient(circle,#0ea5e9,transparent);filter:blur(8px);opacity:.7;top:50%;left:60%;animation:float2_ 5s ease-in-out 1s infinite"></div><div style="position:absolute;width:20px;height:20px;background:radial-gradient(circle,#f43f5e,transparent);filter:blur(8px);opacity:.7;top:30%;left:40%;animation:float3_ 6s ease-in-out .5s infinite"></div></div>'
  },
  {
    id: 'animated-gradient',
    name: '流动渐变',
    nameEn: 'Animated Gradient',
    category: 'advanced',
    difficulty: 'easy',
    tags: ['gradient', 'flow', 'background', 'color'],
    description: '背景渐变色持续流动变化，色彩斑斓',
    html: '<div class="animated-gradient" style="width:160px;height:80px;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:14px">Gradient Flow</div>',
    css: '@keyframes gradientFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } } .animated-gradient { background: linear-gradient(-45deg, #00e5a0, #0ea5e9, #f43f5e, #f59e0b); background-size: 400% 400%; animation: gradientFlow 6s ease infinite; }',
    js: '',
    prompt: '实现流动渐变效果：元素使用多色linear-gradient背景，设置background-size为400% 400%，通过@keyframes改变background-position在四个角点间循环移动，产生渐变色流动效果。纯CSS实现。',
    previewHtml: '<div style="width:48px;height:48px;border-radius:8px;background:linear-gradient(-45deg,#00e5a0,#0ea5e9,#f43f5e,#f59e0b);background-size:400% 400%;animation:prog_ 6s ease infinite"></div>'
  },
  {
    id: 'elastic-hover',
    name: '弹性缩放悬停',
    nameEn: 'Elastic Scale Hover',
    category: 'advanced',
    difficulty: 'easy',
    tags: ['hover', 'elastic', 'scale', 'bounce'],
    description: '悬停时元素弹性放大，带有overshoot回弹效果',
    html: '<div class="elastic-box" style="width:60px;height:60px;background:#00e5a0;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#000;font-size:12px;font-weight:bold;cursor:pointer">Hover</div>',
    css: '.elastic-box { transition: transform 0.4s cubic-bezier(.34,1.56,.64,1); } .elastic-box:hover { transform: scale(1.2); }',
    js: '',
    prompt: '实现弹性缩放悬停效果：元素在hover时scale(1.2)放大，使用cubic-bezier(.34,1.56,.64,1)缓动函数产生超过目标值再回弹的overshoot效果。transition时长0.4秒。纯CSS transition实现。',
    previewHtml: '<div style="width:48px;height:48px;background:#00e5a0;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#000;font-size:10px;font-weight:bold;cursor:pointer;transition:transform .4s cubic-bezier(.34,1.56,.64,1);transform:scale(1.2)">Hover</div>'
  }
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
@keyframes typ_{from{width:0}to{width:100%}}
@keyframes bl_{50%{border-color:transparent}}
@keyframes glitch_{0%,100%{text-shadow:none}20%{text-shadow:-2px 0 #ff00c1,2px 0 #00fff9}40%{text-shadow:2px 0 #ff00c1,-2px 0 #00fff9}60%{text-shadow:-1px 0 #ff00c1,1px 0 #00fff9}80%{text-shadow:1px 0 #ff00c1,-1px 0 #00fff9}}
@keyframes tGrad_{0%{background-position:0% 50%}100%{background-position:200% 50%}}
@keyframes bC_{from{transform:translateY(0)}to{transform:translateY(-10px)}}
@keyframes und_{0%{transform:scaleX(0)}50%{transform:scaleX(1)}51%{transform-origin:right}100%{transform:scaleX(0);transform-origin:right}}
@keyframes flipC_{0%{transform:rotateX(90deg);opacity:0}20%{transform:rotateX(0);opacity:1}100%{transform:rotateX(0);opacity:1}}
@keyframes wave_{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes maskS_{0%{transform:translateY(100%)}100%{transform:translateY(0)}}
@keyframes cntP_{0%,100%{opacity:.5}50%{opacity:1}}
@keyframes breathe_{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.15);opacity:1}}
@keyframes glowP_{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.6);opacity:0}}
@keyframes hueR_{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}
@keyframes grFl_{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes shine_{from{left:-100%}to{left:200%}}
@keyframes spin_{to{transform:rotate(360deg)}}
@keyframes spot_{0%{background-position:20% 50%}100%{background-position:80% 50%}}
@keyframes neonF_{0%,19%,21%,23%,25%,54%,56%,100%{opacity:1}20%,24%,55%{opacity:.4}}
@keyframes satP_{0%,100%{filter:saturate(.3)}50%{filter:saturate(1.5)}}
@keyframes sqC_{from{border-radius:4px}to{border-radius:50%}}
@keyframes flipY_{from{transform:perspective(400px) rotateY(0)}to{transform:perspective(400px) rotateY(360deg)}}
@keyframes flipX_{from{transform:perspective(400px) rotateX(0)}to{transform:perspective(400px) rotateX(360deg)}}
@keyframes shake_{0%,100%{transform:translateX(0)}10%,30%,50%,70%,90%{transform:translateX(-4px)}20%,40%,60%,80%{transform:translateX(4px)}}
@keyframes wobble_{0%{transform:rotate(0)}15%{transform:rotate(-15deg)}30%{transform:rotate(10deg)}45%{transform:rotate(-5deg)}60%{transform:rotate(3deg)}75%{transform:rotate(-1deg)}100%{transform:rotate(0)}}
@keyframes hb_{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}
@keyframes float_{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
@keyframes dB_{from{transform:translateY(0)}to{transform:translateY(-12px)}}
@keyframes pS_{0%,100%{transform:scale(.5);opacity:.3}50%{transform:scale(1);opacity:1}}
@keyframes shm_{0%{opacity:.3}50%{opacity:.6}100%{opacity:.3}}
@keyframes prog_{0%{transform:scaleX(0)}50%{transform:scaleX(1)}100%{transform:scaleX(0)}}
@keyframes ripple_{0%{transform:scale(.5);opacity:1}100%{transform:scale(2.5);opacity:0}}
@keyframes lnL_{0%{transform:translateX(-100%)}100%{transform:translateX(350%)}}
@keyframes ltF_{0%,100%{opacity:.2}50%{opacity:1}}
@keyframes spSc_{0%{transform:rotate(0) scale(1)}50%{transform:rotate(180deg) scale(.8)}100%{transform:rotate(360deg) scale(1)}}
@keyframes waveLoad_{0%,100%{height:8px}50%{height:24px}}
@keyframes hS_{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
@keyframes hL_{0%,100%{transform:translateY(0);box-shadow:0 2px 8px rgba(0,0,0,.2)}50%{transform:translateY(-6px);box-shadow:0 12px 40px rgba(0,0,0,.4)}}
@keyframes bG_{0%,100%{box-shadow:none}50%{box-shadow:0 0 15px rgba(79,124,255,.3)}}
@keyframes tCH_{0%,100%{color:#666}50%{color:#00e5a0}}
@keyframes hSp_{0%,100%{transform:rotate(0)}50%{transform:rotate(90deg)}}
@keyframes fillB_{0%{transform:scaleX(0);transform-origin:left}50%{transform:scaleX(1);transform-origin:left}51%{transform-origin:right}100%{transform:scaleX(0);transform-origin:right}}
@keyframes cardF_{0%{transform:rotateY(0)}50%{transform:rotateY(180deg)}100%{transform:rotateY(360deg)}}
@keyframes rpH_{0%{transform:translate(-50%,-50%) scale(0);opacity:.5}100%{transform:translate(-50%,-50%) scale(4);opacity:0}}
@keyframes tiltH_{0%,100%{transform:perspective(300px) rotateY(0) rotateX(0)}50%{transform:perspective(300px) rotateY(10deg) rotateX(-5deg)}}
@keyframes bDr_{0%{clip-path:polygon(0 0,0 0,0 0,0 0)}25%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}50%{clip-path:polygon(0 0,100% 0,100% 100%,100% 100%)}75%{clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}100%{clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}}
@keyframes par_{0%{transform:translateY(-5%)}100%{transform:translateY(5%)}}
@keyframes btnP_{0%,100%{transform:scale(1)}40%{transform:scale(.95)}60%{transform:scale(1)}}
@keyframes rpB_{0%{transform:scale(0);opacity:.5}100%{transform:scale(4);opacity:0}}
@keyframes btnG_{0%,100%{box-shadow:none}50%{box-shadow:0 0 20px rgba(79,124,255,.4)}}
@keyframes tgD_{0%,45%{left:3px}55%,100%{left:25px}}
@keyframes liqB_{0%,100%{border-radius:22px}25%{border-radius:22px 4px 22px 4px}75%{border-radius:4px 22px 4px 22px}}
@keyframes arrS_{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}
@keyframes subB_{0%{transform:scale(1)}30%{transform:scale(.8)}60%{transform:scale(1.1)}100%{transform:scale(1)}}
@keyframes mgP_{0%{transform:translateX(-30px) scale(.8)}60%{transform:translateX(5px) scale(1.05)}80%{transform:translateX(-2px) scale(.98)}100%{transform:translateX(0) scale(1)}}
@keyframes jelly_{0%{transform:scale(1,1)}30%{transform:scale(1.25,.75)}40%{transform:scale(.75,1.25)}50%{transform:scale(1.15,.85)}65%{transform:scale(.95,1.05)}75%{transform:scale(1.05,.95)}100%{transform:scale(1,1)}}
@keyframes maskT_{0%{transform:scaleY(0);transform-origin:bottom}45%{transform:scaleY(1);transform-origin:bottom}55%{transform:scaleY(1);transform-origin:top}100%{transform:scaleY(0);transform-origin:top}}
@keyframes slPg_{0%{transform:translateX(100%)}50%{transform:translateX(0)}100%{transform:translateX(-100%)}}
@keyframes zmT_{0%{transform:scale(.8);opacity:0}40%{transform:scale(1);opacity:1}60%{transform:scale(1);opacity:1}100%{transform:scale(1.2);opacity:0}}
@keyframes wipeT_{0%{background-position:0% 0%}50%{background-position:100% 0%}100%{background-position:0% 0%}}
@keyframes blurT_{0%{filter:blur(10px);opacity:0}30%{filter:blur(0);opacity:1}70%{filter:blur(0);opacity:1}100%{filter:blur(10px);opacity:0}}
@keyframes unfld_{from{transform:perspective(400px) rotateX(-90deg);opacity:0}to{transform:perspective(400px) rotateX(0);opacity:1}}
@keyframes ptU_{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-80px) scale(0);opacity:0}}
@keyframes twk_{0%,100%{opacity:0;transform:scale(0)}50%{opacity:1;transform:scale(1)}}
@keyframes wW_{0%{transform:scale(.5);opacity:1}100%{transform:scale(3);opacity:0}}
@keyframes smk_{0%{opacity:1;filter:blur(0);transform:translateY(0)}100%{opacity:0;filter:blur(10px);transform:translateY(-30px) scale(1.5)}}
@keyframes strM_{0%{transform:translateX(-40px) scaleX(1.4) scaleY(.8)}50%{transform:translateX(0) scaleX(.9) scaleY(1.1)}100%{transform:translateX(0) scaleX(1) scaleY(1)}}
@keyframes shattr_{0%,100%{opacity:1}50%{opacity:0}}
@keyframes sh1_{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(40px,-30px) rotate(180deg);opacity:0}}
@keyframes sh2_{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(-30px,-40px) rotate(-120deg);opacity:0}}
@keyframes sh3_{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(10px,-50px) rotate(90deg);opacity:0}}
@keyframes chkD_{0%{height:0;width:0}50%{height:0;width:6px}100%{height:11px;width:6px}}
@keyframes bdgI_{0%{transform:scale(0)}50%{transform:scale(1.3)}100%{transform:scale(1)}}
@keyframes flyC_{0%{transform:translate(0,0) scale(1);opacity:1}50%{transform:translate(80px,-60px) scale(.5);opacity:.8}100%{transform:translate(160px,0) scale(0);opacity:0}}
@keyframes lkB_{0%{transform:scale(1)}30%{transform:scale(1.4)}60%{transform:scale(.9)}100%{transform:scale(1)}}
@keyframes br1_{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(20px,-20px) scale(0);opacity:0}}
@keyframes br2_{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(-20px,-15px) scale(0);opacity:0}}
@keyframes br3_{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(-8px,20px) scale(0);opacity:0}}
@keyframes celS_{0%{transform:scale(0) rotate(-10deg)}50%{transform:scale(1.2) rotate(5deg)}100%{transform:scale(1) rotate(0)}}
@keyframes cnf1_{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(-60px) translateX(30px) rotate(360deg);opacity:0}}
@keyframes cnf2_{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(-50px) translateX(-25px) rotate(-270deg);opacity:0}}
@keyframes cnf3_{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(-70px) translateX(15px) rotate(180deg);opacity:0}}
@keyframes cnf4_{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(-55px) translateX(-35px) rotate(-540deg);opacity:0}}
@keyframes mqL_{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes gspin_{from{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}
@keyframes flA_{0%,100%{transform:translate(0,0)}50%{transform:translate(18px,-14px)}}
@keyframes flB_{0%,100%{transform:translate(0,0)}50%{transform:translate(-14px,18px)}}
@keyframes oF1_{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(25px,-18px) scale(1.1)}66%{transform:translate(-12px,22px) scale(.9)}}
@keyframes oF2_{0%,100%{transform:translate(0,0)}50%{transform:translate(-22px,-28px)}}
@keyframes oF3_{0%,100%{transform:translate(0,0) scale(1)}25%{transform:translate(18px,8px) scale(1.05)}75%{transform:translate(-8px,-18px) scale(.95)}}
@keyframes agBG_{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes neonP_{from{text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #4F7CFF}to{text-shadow:0 0 4px #fff,0 0 7px #fff,0 0 14px #fff,0 0 30px #4F7CFF,0 0 60px #4F7CFF,0 0 100px #4F7CFF}}
@keyframes float1_{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-15px)}}
@keyframes float2_{0%,100%{transform:translate(0,0)}50%{transform:translate(-15px,20px)}}
@keyframes float3_{0%,100%{transform:translate(0,0)}50%{transform:translate(10px,10px)}}
@keyframes starPop_{0%{transform:scale(1)}50%{transform:scale(1.4) rotate(15deg)}100%{transform:scale(1) rotate(0)}}
`;
