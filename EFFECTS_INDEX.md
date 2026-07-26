# 动效索引（EFFECTS INDEX）

> ⚠️ 本文件由脚本自动生成，请勿手动编辑。数据变更后运行 `npm run gen:index` 重新生成。
>
> 生成时间：2026-07-26

## 统计

- **动效库**（`src/data/effects.ts`）：共 122 个动效，11 个分类，详情页路由 `/effect/{id}`
- **高级动效页**（`src/pages/advanced.astro`）：共 26 个交互效果（页面内嵌数据，无独立详情页）

新增动效前请先检索下表，确认 id、名称、效果均不与已有动效重复。

## 动效库

### ✨ 基础动画 Basic（13）

| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |
| --- | --- | --- | --- | --- | --- |
| `fade-in` | 淡入 | Fade In | 入门 | 淡入、入场、基础、透明度 | 元素从完全透明渐变到可见，最基础的入场动效。 |
| `fade-out` | 淡出 | Fade Out | 入门 | 淡出、退场、基础、透明度 | 元素从可见渐变到完全透明，常用于退场。 |
| `slide-in-left` | 滑入左 | Slide In Left | 入门 | 滑入、入场、左、位移 | 元素从左侧滑入到原位，适用于列表和面板。 |
| `slide-in-right` | 滑入右 | Slide In Right | 入门 | 滑入、入场、右、位移 | 元素从右侧滑入到原位。 |
| `slide-in-up` | 滑入上 | Slide In Up | 入门 | 滑入、入场、上、位移 | 元素从下方滑入到原位，适用于底部弹出面板。 |
| `slide-in-down` | 滑入下 | Slide In Down | 入门 | 滑入、入场、下、位移 | 元素从上方滑入，用于下拉菜单和通知栏。 |
| `scale-in` | 缩放入 | Scale In | 入门 | 缩放、入场、弹出 | 元素从小到大缩放出现，配合透明度营造弹出感。 |
| `bounce-in` | 弹跳入场 | Bounce In | 进阶 | 弹跳、入场、弹性 | 元素以弹跳效果出现，有明显的回弹感。 |
| `flip-in` | 翻转入场 | Flip In | 进阶 | 翻转、入场、3D | 元素沿Y轴翻转出现，像翻开一页纸。 |
| `rotate-in` | 旋转入场 | Rotate In | 进阶 | 旋转、入场、变换 | 元素旋转出现，适合加载完成后的内容展示。 |
| `elastic-scale` | 弹性缩放 | Elastic Scale | 进阶 | 弹性、缩放、物理 | 元素先放大再缩小的弹性效果，活泼且有反馈感。 |
| `drop-bounce` | 弹性掉落 | Drop Bounce | 进阶 | 掉落、弹跳、物理 | 元素从上方掉落并弹跳数次后静止。 |
| `roll-in` | 滚动翻入 | Roll In | 进阶 | 滚动、旋转、入场、位移 | 元素像车轮一样边旋转边从左侧滚入原位。 |

### ✏️ 文字效果 Text（16）

| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |
| --- | --- | --- | --- | --- | --- |
| `typewriter` | 打字机 | Typewriter | 入门 | 打字机、文字、逐字、输入 | 文字逐字显示，像打字机输入，适用于标题和代码展示。 |
| `char-fade` | 逐字淡入 | Char Fade | 进阶 | 逐字、淡入、文字、节奏 | 每个字符依次淡入出现，节奏感强。 |
| `glitch` | 故障抖动 | Glitch Text | 入门 | 故障、抖动、科技、文字 | 文字产生故障错位效果，科技感十足。 |
| `gradient-text` | 渐变流动文字 | Gradient Text | 入门 | 渐变、流动、文字、彩色 | 文字颜色呈现渐变并持续流动。 |
| `bounce-char` | 文字弹跳 | Bounce Char | 入门 | 弹跳、文字、活力、交替 | 每个字母交替上下弹跳，充满活力。 |
| `underline-slide` | 下划线滑动 | Underline Slide | 入门 | 下划线、滑动、悬停、链接 | 下划线从左向右滑入覆盖文字，悬停常用。 |
| `flip-char` | 翻转揭示 | Flip Reveal | 进阶 | 翻转、揭示、3D、文字 | 文字像翻牌一样逐字翻转显示。 |
| `wave-text` | 文字波浪 | Wave Text | 入门 | 波浪、文字、起伏、标题 | 文字像波浪一样起伏波动，适合标题。 |
| `mask-slide` | 遮罩滑入 | Mask Slide | 进阶 | 遮罩、滑入、设计、文字 | 文字从色块遮罩后滑出，设计感强。 |
| `counter-num` | 数字滚动 | Number Counter | 进阶 | 数字、滚动、计数、数据 | 数字从0递增到目标值，适用于数据展示。 |
| `scramble` | 文字解码 | Text Scramble | 高级 | 解码、乱码、科技、文字 | 从随机乱码逐帧解码为目标文本。 |
| `marquee` | 无限跑马灯 | Infinite Marquee | 入门 | 跑马灯、滚动、无限、循环 | 文字无限循环滚动。 |
| `text-wave-up` | 文字上浮 | Text Wave Up | 进阶 | 上浮、文字、入场、波浪 | 文字像波浪一样从下方上浮出现。 |
| `neon-text` | 霓虹文字 | Neon Text | 入门 | 霓虹、发光、赛博朋克、文字 | 模拟霓虹灯管发光效果，复古赛博朋克风格。 |
| `smoke-text` | 烟雾消散 | Smoke Text | 进阶 | 烟雾、消散、模糊、文字 | 文字像烟雾一样向上消散消失。 |
| `blur-focus` | 模糊聚焦文字 | Blur Focus Text | 入门 | 模糊、聚焦、文字、入场 | 文字从模糊松散状态逐渐聚焦清晰，像镜头对焦。 |

### 🎨 颜色效果 Color（9）

| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |
| --- | --- | --- | --- | --- | --- |
| `breathe` | 脉冲呼吸 | Breathe | 入门 | 呼吸、脉冲、缩放、活跃 | 元素持续做缩放呼吸运动，强调活跃状态。 |
| `glow-pulse` | 光晕脉冲 | Glow Pulse | 入门 | 光晕、脉冲、扩散、光环 | 元素外部出现扩散的光环效果。 |
| `hue-rotate` | 色相旋转 | Hue Rotate | 入门 | 色相、旋转、彩虹、颜色 | 元素颜色持续色相旋转，彩虹般流转。 |
| `gradient-flow` | 渐变流动 | Gradient Flow | 入门 | 渐变、流动、背景、色彩 | 背景渐变色持续流动，常用作大背景。 |
| `shine` | 闪光扫过 | Shine Sweep | 入门 | 闪光、扫过、金属、光泽 | 一道光线从左到右扫过元素表面，金属质感常用。 |
| `rainbow-border` | 边框颜色流转 | Rainbow Border | 入门 | 边框、颜色、流转、卡片 | 边框颜色持续流转变化，用于卡片高亮。 |
| `spotlight` | 聚光灯 | Spotlight | 进阶 | 聚光灯、光区、跟随、交互 | 圆形高亮光区跟随移动，照亮底层内容。 |
| `vignette` | 暗角渐变 | Vignette | 入门 | 暗角、渐变、聚焦、氛围 | 四周渐暗中间亮的暗角效果，聚焦视觉中心。 |
| `sat-pulse` | 饱和度脉冲 | Saturation Pulse | 入门 | 饱和度、脉冲、灰度、彩色 | 元素饱和度周期性变化，从灰到彩色再回灰。 |

### 🔷 几何变换 Geometry（9）

| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |
| --- | --- | --- | --- | --- | --- |
| `spin` | 连续旋转 | Spin | 入门 | 旋转、匀速、加载、基础 | 元素持续匀速旋转，加载指示器的基础。 |
| `sq-to-circle` | 方形变圆 | Square to Circle | 入门 | 方形、圆形、变形、圆角 | 元素圆角从小到大方形到圆形的变形。 |
| `flip-y` | Y轴翻转 | Flip Y | 入门 | 翻转、Y轴、3D、循环 | 元素沿Y轴做3D翻转，像翻书页。 |
| `flip-x` | X轴翻转 | Flip X | 入门 | 翻转、X轴、3D、循环 | 元素沿X轴做3D翻转，翻跟头效果。 |
| `shake` | 摇晃 | Shake | 入门 | 摇晃、错误、提示、抖动 | 元素像不倒翁一样左右摇晃，常用于错误提示。 |
| `wobble` | 弹簧摇摆 | Wobble | 进阶 | 弹簧、摇摆、物理、不倒翁 | 元素像弹簧一样反复摇摆，物理感强。 |
| `heartbeat` | 心跳 | Heartbeat | 入门 | 心跳、双峰、点赞、节律 | 元素模拟心跳的双峰节律，常用于点赞按钮。 |
| `float` | 浮动效果 | Float | 入门 | 浮动、悬浮、轻柔、循环 | 元素在垂直方向轻柔浮动，悬空悬浮感。 |
| `pendulum` | 钟摆摆动 | Pendulum | 入门 | 钟摆、摆动、物理、循环 | 元素以顶部为轴心像钟摆一样左右往复摆动。 |

### ⏳ 加载动画 Loading（13）

| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |
| --- | --- | --- | --- | --- | --- |
| `spinner` | 旋转环 | Spinner | 入门 | 旋转、加载、圆环、经典 | 最经典的加载动画，圆环缺口旋转。 |
| `dot-bounce` | 弹跳三点 | Dot Bounce | 入门 | 弹跳、加载、圆点、聊天 | 三个圆点交替上下弹跳，常见于聊天加载。 |
| `pulse-dot` | 脉冲点 | Pulse Dots | 入门 | 脉冲、加载、呼吸、圆点 | 多个圆点脉冲缩放，有节奏地呼吸。 |
| `skeleton` | 骨架屏 | Skeleton | 入门 | 骨架、加载、占位、闪烁 | 内容加载前显示占位骨架，模拟布局。 |
| `progress-bar` | 进度条 | Progress Bar | 入门 | 进度、加载、条形、循环 | 水平进度条从左到右推进。 |
| `grid-spin` | 旋转方块 | Grid Spinner | 入门 | 旋转、方块、加载、网格 | 方块组旋转变化，像魔方加载器。 |
| `ripple-ld` | 波纹扩散 | Ripple Loader | 入门 | 波纹、扩散、涟漪、加载 | 同心圆环向外扩散消失，像水面涟漪。 |
| `line-load` | 线条穿梭 | Line Loader | 入门 | 线条、穿梭、加载、水平 | 线条在水平方向来回穿梭，指示进行中。 |
| `letter-load` | 字母加载 | Letter Load | 入门 | 字母、加载、闪烁、文字 | 字母依次出现显示，如L-O-A-D。 |
| `spin-scale` | 圆弧缩放旋转 | Spin Scale | 入门 | 旋转、缩放、苹果、加载 | 圆弧缺口同时旋转和缩放，苹果风格。 |
| `wave-load` | 波浪加载 | Wave Loader | 入门 | 波浪、加载、柱形、节奏 | 多个柱形元素做波浪式高低变化。 |
| `dual-ring` | 双环旋转 | Dual Ring | 入门 | 双环、旋转、加载、对比 | 内外双环反向旋转，视觉丰富。 |
| `hourglass` | 沙漏加载 | Hourglass Loader | 进阶 | 沙漏、加载、翻转、等待 | 沙漏形状周期性翻转180度，模拟沙漏计时。 |

### 🖱️ 悬停交互 Hover（10）

| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |
| --- | --- | --- | --- | --- | --- |
| `hover-scale` | 悬停放大 | Hover Scale | 入门 | 悬停、放大、交互、反馈 | 鼠标悬停时元素轻微放大，最常用交互反馈。 |
| `hover-lift` | 悬停提升 | Hover Lift | 入门 | 悬停、提升、阴影、立体 | 悬停时阴影增大加深，产生浮起立体感。 |
| `hover-glow-border` | 悬停发光边框 | Hover Glow Border | 入门 | 悬停、发光、边框、光晕 | 悬停时边框出现光晕效果。 |
| `hover-color` | 悬停色变 | Hover Color | 入门 | 悬停、颜色、渐变、文字 | 悬停时文字颜色渐变切换。 |
| `hover-rotate` | 悬停旋转图标 | Hover Rotate Icon | 入门 | 悬停、旋转、图标、箭头 | 悬停时图标旋转90度，常用于箭头。 |
| `fill-bg` | 背景色填充 | Fill Background | 入门 | 背景、填充、悬停、按钮 | 背景色从左向右扩散填满。 |
| `hover-flip` | 悬停翻转卡片 | Hover Flip Card | 进阶 | 悬停、翻转、3D、卡片 | 卡片悬停时3D翻转露出背面。 |
| `hover-ripple` | 悬停涟漪 | Hover Ripple | 进阶 | 悬停、涟漪、扩散、按钮 | 悬停时从中心产生涟漪扩散效果。 |
| `hover-tilt` | 悬停倾斜 | Hover Tilt | 入门 | 悬停、倾斜、3D、透视 | 元素向鼠标方向轻微倾斜，3D透视感。 |
| `draw-border` | 边框绘制 | Draw Border | 进阶 | 边框、绘制、悬停、手绘 | 悬停时边框逐段绘制出现，手绘感。 |

### 📜 滚动效果 Scroll（10）

| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |
| --- | --- | --- | --- | --- | --- |
| `scroll-fade` | 滚动淡入 | Scroll Fade In | 进阶 | 滚动、淡入、视口、入场 | 元素滚入视口时从透明渐现。 |
| `scroll-slide-left` | 滚动滑入 | Scroll Slide Left | 进阶 | 滚动、滑入、左、图文 | 元素从左侧滑入视口，适合图文排版。 |
| `scroll-slide-right` | 滚动右滑入 | Scroll Slide Right | 进阶 | 滚动、滑入、右、Z字 | 元素从右侧滑入，与左滑交替形成Z字排版。 |
| `scroll-scale` | 滚动缩放 | Scroll Scale | 进阶 | 滚动、缩放、视口、入场 | 元素滚入时从小到大缩放出现。 |
| `stagger` | 交错入场 | Stagger | 进阶 | 交错、入场、列表、网格 | 多个子元素依次交错入场，适合列表和网格。 |
| `parallax` | 视差滚动 | Parallax | 高级 | 视差、滚动、景深、背景 | 背景与前景以不同速度滚动，营造景深感。 |
| `scroll-progress` | 滚动进度条 | Scroll Progress | 进阶 | 滚动、进度、指示、顶部 | 页面顶部显示滚动进度指示条。 |
| `sticky-header` | 粘性标题 | Sticky Header | 入门 | 粘性、标题、固定、导航 | 标题滚到顶部后固定，始终可见。 |
| `scroll-counter` | 滚动计数 | Scroll Counter | 高级 | 滚动、计数、数字、视口 | 数字在滚入视口时从0递增到目标值。 |
| `scroll-morph` | 滚动变形 | Scroll Morph | 高级 | 滚动、变形、圆角、缩放 | 元素在滚动中形状持续变化。 |

### 🔘 按钮交互 Button（11）

| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |
| --- | --- | --- | --- | --- | --- |
| `btn-press` | 按钮按压 | Button Press | 入门 | 按压、按钮、反馈、缩小 | 按钮按下时缩小松开弹回，模拟物理按压。 |
| `btn-ripple` | 按钮波纹 | Button Ripple | 进阶 | 波纹、按钮、Material、点击 | Material Design风格的点击波纹。 |
| `btn-loading` | 按钮加载态 | Button Loading | 进阶 | 加载、按钮、状态、旋转 | 点击后按钮变为加载状态，完成后恢复。 |
| `btn-glow` | 按钮发光 | Button Glow | 入门 | 发光、按钮、悬停、光晕 | 按钮悬停时出现柔和的发光效果。 |
| `toggle` | 切换开关 | Toggle Switch | 入门 | 开关、切换、滑动、状态 | 开关从一侧滑到另一侧的过渡动画。 |
| `liquid-btn` | 液体变形 | Liquid Button | 入门 | 液体、变形、按钮、圆角 | 按钮悬停时产生液体形变效果。 |
| `arrow-slide` | 箭头滑动 | Arrow Slide | 入门 | 箭头、滑动、按钮、悬停 | 按钮内箭头在悬停时向右滑动。 |
| `submit-success` | 提交成功 | Submit Success | 高级 | 提交、成功、变形、状态 | 点击后按钮缩小变圆，最终变为成功状态。 |
| `magnet` | 磁吸按钮 | Magnet Button | 进阶 | 磁吸、按钮、吸引、交互 | 元素像被磁铁吸引一样向目标靠拢。 |
| `jelly` | 果冻按钮 | Jelly Button | 入门 | 果冻、弹性、按钮、变形 | 点击后按钮像果冻一样弹性变形抖动。 |
| `btn-3d` | 3D按压按钮 | 3D Push Button | 入门 | 3D、按压、按钮、立体 | 按钮带厚重底边阴影，按下时整体下沉贴地，立体感强。 |

### 🔀 过渡转场 Transition（8）

| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |
| --- | --- | --- | --- | --- | --- |
| `mask-transition` | 遮罩过渡 | Mask Transition | 进阶 | 遮罩、过渡、电影、页面 | 页面切换时用色块遮罩覆盖再揭开，电影感。 |
| `slide-page` | 滑动切换 | Slide Page | 进阶 | 滑动、切换、页面、过渡 | 新页面从右侧滑入，旧页面向左滑出。 |
| `zoom-transition` | 缩放过渡 | Zoom Transition | 进阶 | 缩放、过渡、放大、页面 | 旧内容缩小消失，新内容从大到正常出现。 |
| `wipe` | 擦除过渡 | Wipe Transition | 入门 | 擦除、过渡、蒙版、揭示 | 像擦黑板一样用蒙版擦除旧内容。 |
| `blur-transition` | 模糊过渡 | Blur Transition | 入门 | 模糊、过渡、梦幻、柔和 | 内容通过模糊效果渐入渐出，柔和梦幻。 |
| `expand` | 折叠展开 | Expand | 进阶 | 折叠、展开、3D、纸张 | 元素像折纸一样从折叠状态展开。 |
| `morph-tr` | 形变过渡 | Morph Transition | 进阶 | 形变、过渡、圆角、变形 | 元素在不同形状之间平滑过渡。 |
| `crossfade` | 交叉淡入淡出 | Crossfade | 入门 | 交叉、淡入、淡出、过渡 | 两个元素交替淡入淡出切换。 |

### 🚀 高级效果 Advanced（12）

| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |
| --- | --- | --- | --- | --- | --- |
| `particle-up` | 粒子上升 | Particle Up | 进阶 | particle、animation、green、float | 多个粒子从底部向上飘散并逐渐缩小消失，营造梦幻氛围 |
| `twinkle` | 星星闪烁 | Twinkle Stars | 进阶 | star、twinkle、animation、night | 随机分布的星星以不同节奏闪烁，模拟夜空繁星 |
| `orbit` | 光环旋转 | Orbit Ring | 入门 | orbit、ring、spin、space | 双层旋转光环，内外层反向旋转，营造行星轨道感 |
| `water-wave` | 水波纹 | Water Wave | 入门 | water、wave、ripple、expand | 从中心向外扩散的水波纹效果，层层叠叠 |
| `squash-stretch` | 拉伸形变 | Squash Stretch | 入门 | squash、stretch、deform、bounce | 弹性形变效果，物体先被压缩再拉伸最后恢复 |
| `shatter` | 散射碎裂 | Shatter | 进阶 | shatter、break、explode、fragment | 元素碎裂成多个碎片向不同方向飞散消失 |
| `breathe-glow` | 呼吸光圈 | Breathe Glow | 入门 | glow、breathe、pulse、shadow | 圆形元素发出呼吸般节奏的光圈脉冲 |
| `stagger-grid` | 瀑布网格 | Stagger Grid | 进阶 | grid、stagger、intersection、reveal | 网格中的格子交错出现，形成瀑布式逐个显现效果 |
| `glow-border` | 旋转发光边框 | Glow Border | 进阶 | glow、border、conic、gradient | 卡片边框发出旋转的彩虹光效，酷炫科技感 |
| `glassmorphism` | 毛玻璃 | Glassmorphism | 入门 | glass、blur、frosted、modern | 毛玻璃效果，半透明背景带有模糊和白色边框 |
| `floating-orbs` | 悬浮光球 | Floating Orbs | 进阶 | orb、float、gradient、ambient | 多个彩色光球缓慢浮动，营造梦幻氛围 |
| `elastic-hover` | 弹性缩放悬停 | Elastic Scale Hover | 入门 | hover、elastic、scale、bounce | 悬停时元素弹性放大，带有overshoot回弹效果 |

### ⚡ 微交互 Micro（11）

| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |
| --- | --- | --- | --- | --- | --- |
| `check-draw` | 选中勾勒 | Check Draw | 入门 | checkbox、check、draw、form | 勾选标记以绘画动画出现，先画横再画竖 |
| `badge-in` | 通知角标弹入 | Badge In | 入门 | badge、notification、bounce、pop | 通知角标以弹性缩放动画弹入显示 |
| `fly-to-cart` | 飞入购物车 | Fly to Cart | 进阶 | cart、fly、ecommerce、motion | 商品缩略图沿弧线飞入购物车图标 |
| `like-burst` | 点赞爆裂 | Like Burst | 进阶 | like、heart、burst、favorite | 点赞时心形图标弹跳缩放，周围粒子爆裂散开 |
| `confetti` | 庆祝纸屑 | Confetti | 进阶 | confetti、celebrate、party、colorful | 彩色纸屑从中心爆发出并向四周飘落 |
| `cursor-trail` | 光标拖尾 | Cursor Trail | 高级 | cursor、trail、canvas、mouse | 鼠标移动时留下渐变色的拖尾光点效果 |
| `ripple-click` | 点击波纹 | Ripple Click | 进阶 | ripple、click、material、touch | 点击位置产生向外扩散的波纹效果 |
| `toast-slide` | 通知滑入 | Toast Slide | 入门 | toast、notification、slide、alert | 通知消息从右侧滑入，停留后自动滑出 |
| `star-pop` | 收藏弹出 | Star Pop | 入门 | star、favorite、pop、bookmark | 收藏星星图标弹跳缩放并旋转的动画 |
| `shake-error` | 错误抖动 | Error Shake | 入门 | shake、error、validation、form | 输入框验证失败时水平来回抖动提示错误 |
| `bell-ring` | 铃铛摇晃 | Bell Ring | 入门 | 铃铛、通知、摇晃、提醒 | 铃铛图标以顶部为轴左右摇晃并逐渐停止，提示新消息。 |

## 高级动效页

| ID | 名称 | 中文名 | 分类 | 描述 |
| --- | --- | --- | --- | --- |
| `magnetic` | Magnetic Button | 磁吸按钮 | 光标交互 | 鼠标靠近时按钮产生磁吸跟随效果。 |
| `spotlight` | Spotlight Reveal | 聚光灯揭示 | 光标交互 | 以鼠标为圆心揭示隐藏内容。 |
| `hoverglow` | Hover Glow | 光晕跟随 | 光标交互 | 鼠标位置产生柔和光晕。 |
| `ripple` | Ripple Click | 点击波纹 | 光标交互 | 点击时从鼠标位置扩散波纹。 |
| `scrollrev` | Scroll Reveal | 滚动显现 | 滚动驱动 | 元素进入视口时淡入显现。 |
| `parallax` | Parallax Layers | 视差滚动 | 滚动驱动 | 不同层以不同速度滚动产生深度感。 |
| `progress` | Scroll Progress | 进度条 | 滚动驱动 | 实时显示滚动进度百分比。 |
| `counter` | Counter Animation | 数字跳动 | 滚动驱动 | 数字从0滚动到目标值。 |
| `textwave` | Text Wave | 文字波浪 | 文字动画 | 拆分为单个字符依次入场。 |
| `scramble` | Text Scramble | 文字解码 | 文字动画 | 从随机乱码逐帧解码为目标文本。 |
| `marquee` | Infinite Marquee | 无限跑马灯 | 文字动画 | 文字无限循环滚动。 |
| `typewriter` | Typewriter | 打字机 | 文字动画 | 文字逐字打出配合闪烁光标。 |
| `tilt3d` | 3D Tilt Card | 3D倾斜 | 3D变换 | 鼠标驱动卡片3D旋转+光泽反射。 |
| `flipcard` | Flip Card | 翻转卡片 | 3D变换 | 悬停翻转展示正反面。 |
| `morphing` | Morphing Shape | 形变动画 | 3D变换 | 形状在多个形态间平滑过渡。 |
| `stagger` | Stagger Grid | 瀑布网格 | 3D变换 | 网格元素依次级联动画入场。 |
| `trail` | Cursor Trail | 光标拖尾 | 3D变换 | 鼠标留下彩色粒子轨迹。 |
| `elastic` | Elastic Scale | 弹性缩放 | 3D变换 | hover弹性放大，overshoot回弹。 |
| `glowborder` | Glow Border | 旋转发光边框 | 氛围质感 | 渐变色在边框持续旋转。 |
| `glass` | Glassmorphism | 毛玻璃 | 氛围质感 | 半透明背景配合背景模糊。 |
| `orbs` | Floating Orbs | 悬浮光球 | 氛围质感 | 多个渐变光球随机漂浮。 |
| `gradientbg` | Animated Gradient | 流动渐变 | 氛围质感 | 背景渐变色持续平滑过渡。 |
| `neon` | Neon Pulse | 霓虹脉冲 | 氛围质感 | 文字霓虹灯发光脉冲。 |
| `cursorring` | Cursor Follower | 光标跟随环 | 光标交互 | 小圆点即时跟随，外环惯性延迟追随。 |
| `scrollhl` | Scroll Highlight | 逐词高亮 | 滚动驱动 | 文字随滚动进度逐词点亮。 |
| `dotwave` | Dot Matrix Wave | 点阵波浪 | 氛围质感 | Canvas点阵从中心扩散涟漪波。 |
