---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 3046022100e2c05fc21d95d7c2c29f52974880809b637b297addd2ef5bc5a1280e3facb03d022100a30b4ebd95eb10faa47a601739465d417c27ed2b9490d3b5fb505e81293c366e
    ReservedCode2: 3045022100e542a3873dbc888820af0c7b228ec4187daf3cf954d74d0e44e76afdc548c38d022019e81cf0785146f47cbff30edcb75d63cf79abe4fdf6cfdf105484720c93d634
---

# CSS动效中心

一个专注于分享CSS动效的网站平台，使用现代前端技术栈构建。

## 🚀 技术栈

- **框架**: Astro 5.x + Vue 3
- **样式**: Tailwind CSS
- **状态管理**: Pinia
- **UI组件**: Naive UI
- **代码高亮**: Prism.js
- **类型**: TypeScript

## ✨ 功能特性

- 🎨 **主题系统**: 支持亮色/暗色主题切换，可自定义主题颜色
- 📱 **响应式设计**: 完美适配桌面和移动设备
- 🔍 **搜索和过滤**: 支持按分类、标签搜索动效
- 💻 **代码展示**: 语法高亮的HTML/CSS代码展示
- 👀 **实时预览**: 动效效果实时预览
- ❤️ **点赞系统**: 社区驱动的动效评分
- 🌟 **分类管理**: 清晰的动效分类体系

## 🛠️ 安装和运行

```bash
# 克隆项目
git clone <repository-url>
cd css-effects-hub

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 📁 项目结构

```
css-effects-hub/
├── public/                 # 静态资源
├── src/
│   ├── components/        # Vue组件
│   │   ├── effects/      # 动效相关组件
│   │   └── ui/           # UI组件
│   ├── layouts/          # 页面布局
│   ├── pages/            # 页面路由
│   ├── stores/           # Pinia状态管理
│   ├── styles/           # 全局样式
│   ├── types/            # TypeScript类型定义
│   └── utils/            # 工具函数
├── astro.config.mjs      # Astro配置
├── tailwind.config.mjs   # Tailwind配置
└── package.json          # 项目配置
```

## 🎯 核心页面

- **首页**: 展示精选动效和平台介绍
- **动效库**: 浏览所有动效，支持搜索和过滤
- **贡献动效**: 提交新的CSS动效作品
- **关于我们**: 平台介绍和团队信息

## 🎨 示例动效

目前包含两个示例动效：

1. **浮动卡片**: 具有悬停浮动效果的卡片组件
2. **脉冲按钮**: 带脉冲动画的交互按钮

## 🔧 开发指南

### 添加新动效

1. 在 `src/stores/effects.ts` 中添加动效数据
2. 创建对应的Vue组件（如果需要）
3. 更新相关页面和分类

### 自定义主题

- 修改 `src/stores/theme.ts` 中的颜色配置
- 使用主题切换器实时预览效果

### 代码规范

- 使用TypeScript进行类型安全
- 遵循Vue 3 Composition API风格
- 使用Tailwind CSS进行样式开发

## 🌟 贡献

欢迎提交Issue和Pull Request来帮助改进这个项目！

## 📄 许可证

MIT License

## 🙏 致谢

感谢所有为CSS动效社区做出贡献的开发者们！