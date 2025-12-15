---
author: MiniMax Agent
category: 按钮
createdAt: "2025-12-15"
demoComponent: PulseButton
description: 具有脉冲动画效果的按钮，适用于重要操作或CTA按钮
difficulty: easy
id: "7"
likes: 45
name: 脉冲按钮
tags:
    - 按钮
    - 脉冲
    - 动画
    - CTA
---

## 效果演示

脉冲按钮效果包含：
- 持续的脉冲动画
- 吸引用户注意力
- 多种颜色变体
- 悬停交互效果
- 可调节脉冲强度

## 使用场景

- 重要行动号召
- 立即购买按钮
- 紧急操作提示
- 引导用户行为
- 特殊功能入口

## 技术特点

- 纯CSS实现
- 无JavaScript依赖
- 可自定义脉冲速度
- 支持多种颜色
- 响应式设计

## 代码示例

```html
<button class="pulse-button">立即购买</button>
```

```css
.pulse-button {
  position: relative;
  padding: 12px 30px;
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.pulse-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: width 0.6s, height 0.6s;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.pulse-button span {
  position: relative;
  z-index: 1;
}

.pulse-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
}

.pulse-button:hover::before {
  width: 300px;
  height: 300px;
}

/* 脉冲动画效果 */
.pulse-button.pulse {
  animation: pulse-ring 2s ease-out infinite;
}

@keyframes pulse-ring {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(255, 107, 107, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 107, 107, 0);
  }
}

/* 不同颜色变体 */
.pulse-button.blue {
  background: linear-gradient(45deg, #3b82f6, #1d4ed8);
}

.pulse-button.blue.pulse {
  animation: pulse-ring-blue 2s ease-out infinite;
}

@keyframes pulse-ring-blue {
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(59, 130, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

.pulse-button.green {
  background: linear-gradient(45deg, #10b981, #059669);
}

.pulse-button.green.pulse {
  animation: pulse-ring-green 2s ease-out infinite;
}

@keyframes pulse-ring-green {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

/* 持续脉冲效果 */
.pulse-button.continuous {
  animation: pulse-continuous 1.5s ease-in-out infinite;
}

@keyframes pulse-continuous {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* 禁用状态 */
.pulse-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  animation: none;
}

.pulse-button:disabled:hover {
  transform: none;
  box-shadow: none;
}
```

## 实现原理

1. **脉冲环效果**: 使用`box-shadow`的扩散和收缩创建脉冲
2. **渐变背景**: 使用`linear-gradient`创建多色按钮
3. **悬停波纹**: 使用伪元素和`transform`创建点击波纹效果
4. **动画循环**: 使用`animation`属性实现持续的脉冲效果
5. **颜色变体**: 通过不同的类名切换颜色主题