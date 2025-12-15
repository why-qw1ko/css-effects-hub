---
author: MiniMax Agent
category: 卡片
createdAt: "2025-12-15"
demoComponent: FloatingCard
description: 具有悬停浮动效果的卡片组件，带有阴影和缩放动画
difficulty: easy
id: "1"
likes: 42
name: 浮动卡片
tags:
    - 卡片
    - 悬停
    - 浮动
    - 阴影
---

## 效果演示

浮动卡片具有优雅的悬停效果，包含：

- 向上浮动动画
- 阴影变化
- 轻微缩放效果
- 平滑的过渡动画

## 使用场景

适用于：
- 产品展示卡片
- 博客文章摘要
- 功能介绍模块
- 用户资料展示

## 技术特点

- 纯CSS实现
- 无JavaScript依赖
- 支持暗色主题
- 响应式设计

## 代码示例

```html
<div class="floating-card">
  <h3>浮动卡片</h3>
  <p>悬停我试试！</p>
</div>
```

```css
.floating-card {
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.floating-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.floating-card h3 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
}

.floating-card p {
  margin: 0;
  color: #6b7280;
}
```

## 实现原理

1. **基础样式**: 定义卡片的基础外观
2. **过渡效果**: 使用`transition`属性控制动画时长
3. **悬停状态**: 使用`:hover`伪类触发动画
4. **动画效果**: 结合`transform`和`box-shadow`创建立体感