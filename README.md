# CSS Design Plus

[![Deploy to GitHub Pages](https://github.com/why-qw1ko/css-effects-hub/actions/workflows/deploy.yml/badge.svg)](https://github.com/why-qw1ko/css-effects-hub/actions/workflows/deploy.yml)

> 精选 CSS 动效合集，每个效果均可实时预览。

🔗 **在线预览**：https://why-qw1ko.github.io/css-effects-hub/

---

## ✨ 特色功能

- **实时预览** — 每个动效都可以直接查看效果，无需离开页面
- **完整代码** — 提供可直接复制的 HTML/CSS 代码示例
- **AI Prompt** — 一键复制提示词，快速让 AI 生成类似效果
- **分类清晰** — 11 个分类，覆盖常见 UI 动效场景
- **主题切换** — 支持亮色/暗色模式，护眼又时尚
- **响应式设计** — 完美适配桌面端和移动端

---

## 📦 动效分类

| 分类 | 图标 | 数量 |
|------|------|------|
| 基础动画 | ✨ | 12 |
| 文字效果 | ✏️ | 15 |
| 颜色效果 | 🎨 | 10 |
| 几何变换 | 🔷 | 10 |
| 加载动画 | ⏳ | 12 |
| 悬停交互 | 🖱️ | 10 |
| 滚动效果 | 📜 | 10 |
| 按钮交互 | 🔘 | 10 |
| 过渡转场 | 🔀 | 8 |
| 高级效果 | 🚀 | 16 |
| 微交互 | ⚡ | 10 |

**总计：123 个动效**

---

## 🛠 技术栈

- **[Astro 5](https://astro.build/)** — 静态站点生成框架
- **[Vue 3](https://vuejs.org/)** — 交互组件开发
- **[Tailwind CSS](https://tailwindcss.com/)** — 原子化 CSS 框架
- **[TypeScript](https://www.typescriptlang.org/)** — 类型安全

---

## 🚀 本地开发

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/why-qw1ko/css-effects-hub.git
cd css-effects-hub

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看效果。

### 构建与预览

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

---

## 📁 项目结构

```
css-effects-hub/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置
├── public/
│   └── favicon.svg          # 网站图标
├── src/
│   ├── components/
│   │   ├── effects/         # 动效相关组件
│   │   │   ├── CodeBlock.vue
│   │   │   ├── EffectCard.vue
│   │   │   ├── EffectDetail.vue
│   │   │   ├── EffectGrid.vue
│   │   │   └── PreviewFrame.vue
│   │   └── ui/              # 通用 UI 组件
│   │       ├── CategoryNav.vue
│   │       ├── Footer.vue
│   │       ├── Header.vue
│   │       ├── SearchBar.vue
│   │       └── ThemeToggle.vue
│   ├── data/
│   │   └── effects.ts       # 动效数据源
│   ├── layouts/
│   │   └── MainLayout.astro # 主布局
│   ├── pages/
│   │   ├── index.astro      # 首页
│   │   ├── about.astro      # 关于页面
│   │   ├── effects.astro    # 动效列表页
│   │   └── effect/
│   │       └── [id].astro   # 动效详情页（动态路由）
│   ├── plugins/
│   │   └── vue.ts           # Vue 插件配置
│   ├── stores/              # Pinia 状态管理
│   ├── styles/              # 全局样式
│   ├── types/               # TypeScript 类型定义
│   └── utils/               # 工具函数
├── astro.config.mjs         # Astro 配置
├── tailwind.config.mjs      # Tailwind 配置
├── tsconfig.json            # TypeScript 配置
└── package.json
```

---

## 📝 使用方式

1. **浏览动效** — 在首页或动效列表中浏览所有动效
2. **查看详情** — 点击动效卡片查看完整代码和预览
3. **复制代码** — 直接复制 HTML/CSS 代码到你的项目
4. **使用 AI Prompt** — 复制提示词交给 AI 助手，快速生成类似效果

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/amazing-effect`
3. 提交更改：`git commit -m 'feat: add amazing effect'`
4. 推送分支：`git push origin feature/amazing-effect`
5. 提交 Pull Request

---

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。

---

## 🙏 致谢

感谢所有 CSS 动效创作者和开源社区的贡献者！

---

**Made with ❤️ by [why-qw1ko](https://github.com/why-qw1ko)**
