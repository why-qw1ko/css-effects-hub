---
author: MiniMax Agent
category: 文本
createdAt: "2025-12-15"
demoComponent: TextShake
description: 具有震动效果的文字动画，适用于错误提示或警告信息
difficulty: easy
id: "2"
likes: 28
name: 文字抖动
tags:
    - 文本
    - 抖动
    - 动画
    - 警告
---

## 效果演示

文字抖动效果适用于：
- 表单验证错误提示
- 重要警告信息
- 错误状态反馈
- 吸引用户注意力

## 使用场景

- 表单验证失败提示
- 系统错误信息
- 重要通知提醒
- 游戏或互动应用

## 技术特点

- 纯CSS实现
- 无JavaScript依赖
- 可自定义抖动强度
- 支持多种触发方式

## 代码示例

```html
<div class="shake-text">请填写正确信息！</div>
```

```css
.shake-text {
  display: inline-block;
  color: #ef4444;
  font-weight: 600;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-4px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(4px);
  }
}

/* 自定义抖动强度 */
.shake-text.intense {
  animation-duration: 0.3s;
  animation-iteration-count: 3;
}

.shake-text.intense {
  animation-name: shake-intense;
}

@keyframes shake-intense {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-8px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(8px);
  }
}
```

## 实现原理

1. **关键帧动画**: 使用`@keyframes`定义抖动路径
2. **左右震动**: 在不同时间点应用`translateX`变换
3. **缓动函数**: 使用`ease-in-out`创建自然的抖动效果
4. **可定制性**: 支持不同的抖动强度和持续时间