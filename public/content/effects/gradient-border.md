---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 3046022100d548bfce5433cc38520c0109682efcfd262236ac5550b90b674b8ba393c0c427022100ff7b20b76baca09827a20fee80f5b5f72e4472faf55681ca1636da5eb9d27bb6
    ReservedCode2: 3044022069e5f25db682ed13c92f1cab62144fa3c57abedbc96e9bcc9b0c5b15f26e4114022020c986ee6c55d5c45d0463b00104b8bb8f2fb201d42ebb679fd73854ce3bfecc
author: MiniMax Agent
category: 装饰
createdAt: "2025-12-15"
demoComponent: GradientBorder
description: 具有流动渐变效果的边框装饰，适用于强调重要内容
difficulty: easy
id: "6"
likes: 31
name: 渐变边框
tags:
    - 边框
    - 渐变
    - 装饰
    - 动画
---

## 效果演示

渐变边框效果包含：
- 流动的渐变色彩
- 动态边框动画
- 多样化颜色组合
- 响应式适配
- 优雅的视觉效果

## 使用场景

- 重要内容强调
- 产品特色展示
- 按钮装饰
- 卡片边框
- 徽章设计

## 技术特点

- 纯CSS实现
- 无JavaScript依赖
- 可自定义渐变方向
- 支持多种色彩搭配
- 平滑动画过渡

## 代码示例

```html
<div class="gradient-border">
  <div class="gradient-border-content">
    <h3>渐变边框卡片</h3>
    <p>这是一张具有流动渐变边框的卡片</p>
  </div>
</div>
```

```css
.gradient-border {
  padding: 3px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fd79a8);
  background-size: 400% 400%;
  animation: gradient-shift 4s ease infinite;
  border-radius: 1rem;
}

.gradient-border-content {
  background: white;
  padding: 2rem;
  border-radius: calc(1rem - 3px);
  color: #2d3748;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 不同方向的渐变 */
.gradient-border.horizontal {
  animation: gradient-horizontal 3s ease infinite;
}

@keyframes gradient-horizontal {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

/* 按钮样式 */
.gradient-border-button {
  position: relative;
  padding: 12px 24px;
  background: transparent;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  overflow: hidden;
}

.gradient-border-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  padding: 2px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  background-size: 200% 200%;
  animation: gradient-border-move 3s ease infinite;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: exclude;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}

@keyframes gradient-border-move {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* 紫色主题 */
.gradient-border.purple {
  background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c);
}

/* 绿色主题 */
.gradient-border.green {
  background: linear-gradient(45deg, #11998e, #38ef7d, #12c2e9, #f64f59);
}
```

## 实现原理

1. **渐变背景**: 使用`linear-gradient`创建多色渐变
2. **动画移动**: 通过`background-position`变化实现流动效果
3. **边框效果**: 使用`padding`作为边框，配合`border-radius`创建圆角
4. **内容遮罩**: 使用白色背景遮盖中心内容
5. **CSS遮罩**: 使用`mask`属性实现仅显示边框的效果