---
author: MiniMax Agent
category: 加载
createdAt: "2025-12-15"
demoComponent: LoadingSpinner
description: 优雅的圆形加载指示器，支持多种尺寸和颜色
difficulty: easy
id: "4"
likes: 52
name: 加载动画
tags:
    - 加载
    - 旋转
    - 动画
    - 指示器
---

## 效果演示

加载动画适用于：
- 页面加载状态
- 数据获取等待
- 表单提交处理
- 异步操作反馈

## 使用场景

- 网络请求等待
- 页面初始化
- 文件上传进度
- 数据处理状态

## 技术特点

- 纯CSS实现
- 无JavaScript依赖
- 支持多种尺寸
- 可自定义颜色
- 平滑旋转动画

## 代码示例

```html
<div class="loading-spinner"></div>
```

```css
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 不同尺寸 */
.loading-spinner.small {
  width: 20px;
  height: 20px;
  border-width: 2px;
}

.loading-spinner.large {
  width: 60px;
  height: 60px;
  border-width: 6px;
}

/* 不同颜色 */
.loading-spinner.green {
  border-top-color: #10b981;
}

.loading-spinner.red {
  border-top-color: #ef4444;
}

/* 双层旋转效果 */
.loading-spinner-double {
  width: 40px;
  height: 40px;
  position: relative;
}

.loading-spinner-double::before,
.loading-spinner-double::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 3px solid transparent;
}

.loading-spinner-double::before {
  border-top-color: #3b82f6;
  animation: spin 1.5s linear infinite;
}

.loading-spinner-double::after {
  border-top-color: #93c5fd;
  animation: spin 0.8s linear infinite reverse;
}
```

## 实现原理

1. **圆形边框**: 使用`border-radius: 50%`创建圆形
2. **部分边框**: 使用透明和彩色边框创建扇形效果
3. **旋转动画**: 通过`transform: rotate`实现连续旋转
4. **性能优化**: 使用`transform`而不是`left/top`定位