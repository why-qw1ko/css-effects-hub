# CSS Design Plus — 重构方案文档

## 项目概述

**名称**：CSS Design Plus
**定位**：CSS 动效展示与学习平台，提供实时预览、代码示例、AI Prompt
**部署目标**：GitHub Pages（纯静态 SSG）

## 技术栈

| 层面 | 技术 | 说明 |
|------|------|------|
| 框架 | Astro 5 | 静态站点生成（`output: 'static'`） |
| UI | Vue 3 | 交互组件（预览、搜索、过滤） |
| 样式 | Tailwind CSS 3 | class 模式暗色主题 |
| 状态 | Pinia | 搜索/过滤/主题状态 |
| 代码高亮 | Prism.js | 代码块语法高亮 |
| 语言 | TypeScript | 全项目类型安全 |

## 设计规范

### 主题
- **默认**：亮色模式（参考大动效.html）
- **可切换**：暗色模式
- 通过 Tailwind `darkMode: 'class'` + CSS 变量实现

### 色彩
```css
/* 亮色 */
--bg: #F5F6F8
--card: #FFFFFF
--primary: #4F7CFF
--text: #1A1D26
--text-secondary: #6B7084
--border: #E2E4EA

/* 暗色 */
--bg: #0a0a0c
--card: #111115
--primary: #c8a2ff
--text: #e8e8ed
--text-secondary: #8b8b9e
--border: #2a2a33
```

### 字体
- 标题：`Syne`（粗体，现代感）
- 正文/代码：`DM Mono`（等宽，技术感）
- Google Fonts 加载

### 布局
- 响应式网格：`grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`
- Sticky Header + 分类导航
- 卡片式动效展示

## 分类体系（11 类，约 120 个动效）

| 分类 | ID | 数量 | 说明 |
|------|------|------|------|
| 基础动画 | basic | ~12 | 淡入淡出、滑入、缩放、弹跳、翻转、旋转 |
| 文字效果 | text | ~15 | 打字机、渐变文字、故障抖动、波浪、逐字 |
| 光标交互 | cursor | ~10 | 磁吸按钮、聚光灯、光晕跟随、涟漪、拖尾 |
| 卡片组件 | card | ~10 | 翻转卡片、浮动卡片、玻璃态、3D倾斜 |
| 加载动画 | loading | ~12 | 旋转环、弹跳点、骨架屏、进度条、波纹 |
| 背景氛围 | background | ~10 | 渐变流动、光球漂浮、噪声纹理、星空 |
| 滚动效果 | scroll | ~10 | 滚动揭示、视差、进度条、计数动画 |
| 按钮交互 | button | ~12 | 波纹、发光、果冻、液体变形、提交成功 |
| 过渡转场 | transition | ~8 | 遮罩过渡、滑动切换、缩放、擦除、模糊 |
| 微交互 | micro | ~10 | 点赞爆裂、通知弹入、飞入购物车、庆祝纸屑 |
| 形状变换 | shape | ~10 | 形变动画、弹性缩放、摇晃、心跳、浮动 |

## 动效数据结构

每个动效用一个 JSON 对象定义（存放在 `src/data/effects.ts`）：

```typescript
interface Effect {
  id: string              // 唯一标识，如 "fade-in"
  name: string            // 中文名，如 "淡入"
  nameEn: string          // 英文名，如 "Fade In"
  category: string        // 分类 ID
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]          // 标签
  description: string     // 简短描述
  html: string            // HTML 代码
  css: string             // CSS 代码
  js?: string             // JavaScript 代码（可选）
  prompt: string          // AI Prompt
  previewHtml: string     // 预览区用的 HTML（含内联样式/脚本）
}
```

## 页面结构

```
/               → 首页（Hero + 精选动效 + 分类入口）
/effects        → 动效库（分类筛选 + 搜索 + 网格卡片）
/effect/[id]    → 动效详情（独立页，预览 + 代码 + Prompt）
/about          → 关于页面
```

## 核心组件

```
src/components/
├── ui/
│   ├── Header.vue        # 导航栏 + 主题切换
│   ├── Footer.vue        # 页脚
│   ├── ThemeToggle.vue   # 亮/暗切换按钮
│   ├── SearchBar.vue     # 搜索框
│   └── CategoryNav.vue   # 分类导航标签
├── effects/
│   ├── EffectCard.vue    # 动效卡片（预览 + 名称 + 标签）
│   ├── EffectGrid.vue    # 动效网格列表
│   ├── EffectDetail.vue  # 动效详情（Tab切换：预览/HTML/CSS/Prompt）
│   ├── CodeBlock.vue     # 代码块 + 一键复制
│   └── PreviewFrame.vue  # 动效预览 iframe/容器
```

## 功能特性

### 1. 主题切换
- 默认亮色，可切换暗色
- localStorage 持久化
- 系统偏好自动检测

### 2. 搜索与过滤
- 按名称/描述/标签搜索
- 按分类筛选
- 实时过滤，结果计数

### 3. 动效详情页（4 个 Tab）
- **👀 预览**：实时演示效果
- **📄 HTML**：代码块 + 一键复制
- **🎨 CSS**：代码块 + 一键复制
- **🤖 AI Prompt**：简洁提示词 + 一键复制

### 4. 代码复制
- 点击复制按钮
- 复制成功反馈（Toast）

### 5. AI Prompt
- 每个动效附带一段简洁的 Prompt
- 格式：描述需求 + 技术约束 + 示例参考
- 一键复制到剪贴板

## 执行计划

### Phase 1 — 骨架搭建
- [x] 清理旧项目，建立新目录结构
- [x] package.json + astro.config + tailwind 配置
- [x] 全局样式 + 主题系统
- [x] MainLayout + Header + Footer
- [x] 首页 Hero
- [x] 动效列表页骨架

### Phase 2 — 基础动画（12 个）
- [x] 动效数据定义
- [x] EffectCard + EffectGrid 组件
- [x] EffectDetail + CodeBlock 组件
- [x] 动效详情页路由
- [x] 预览系统

### Phase 3 — 文字效果 + 光标交互（25 个）
- [x] 批量添加动效数据 (15个文字效果)
- [x] 验证预览和代码复制

### Phase 4 — 卡片组件 + 背景氛围（20 个）
- [x] 批量添加动效数据 (10颜色 + 10几何)
- [x] 复杂动效的预览处理

### Phase 5 — 加载动画 + 滚动效果（22 个）
- [x] 批量添加动效数据 (12加载 + 10滚动)
- [x] 滚动类动效的容器内模拟

### Phase 6 — 按钮交互 + 过渡 + 微交互 + 形状（40 个）
- [x] 批量添加动效数据 (10按钮 + 8过渡 + 16高级 + 10微交互)
- [x] 最终验收

## 注意事项

1. **纯静态**：所有页面在构建时生成，无服务器端逻辑
2. **预览方案**：CSS-only 动效直接在 div 中预览；需要 JS 的动效在预览区注入脚本
3. **滚动类动效**：预览区用小容器内滚动模拟，代码给出完整页面级实现
4. **代码高亮**：使用 Prism.js，构建时或客户端高亮
5. **响应式**：移动端适配，卡片网格自适应

## 文件结构

```
css-effects-hub/
├── PLAN.md                    # 本文档
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── postcss.config.mjs
├── public/
│   └── favicon.svg
├── src/
│   ├── styles/
│   │   └── global.css
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── effects.astro
│   │   ├── effect/[id].astro
│   │   └── about.astro
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Header.vue
│   │   │   ├── Footer.vue
│   │   │   ├── ThemeToggle.vue
│   │   │   ├── SearchBar.vue
│   │   │   └── CategoryNav.vue
│   │   └── effects/
│   │       ├── EffectCard.vue
│   │       ├── EffectGrid.vue
│   │       ├── EffectDetail.vue
│   │       ├── CodeBlock.vue
│   │       └── PreviewFrame.vue
│   ├── data/
│   │   └── effects.ts         # 所有动效数据
│   ├── stores/
│   │   ├── effects.ts         # 搜索/过滤状态
│   │   └── theme.ts           # 主题状态
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── index.ts
```
