---
author: MiniMax Agent
category: 文本
createdAt: "2025-12-15"
demoComponent: TextSlide
description: 具有滑动切换效果的文字展示，适用于标语轮播或文字动画
difficulty: medium
id: "10"
likes: 29
name: 文字滑动
tags:
    - 文本
    - 滑动
    - 轮播
    - 动画
---

## 效果演示

文字滑动效果包含：
- 多行文字轮播
- 平滑的滑动过渡
- 自动播放功能
- 可控制播放速度
- 多种滑动方向

## 使用场景

- 标语轮播展示
- 新闻标题滚动
- 重要信息提示
- 产品特色介绍
- 用户评价展示

## 技术特点

- 纯CSS实现
- 支持自动轮播
- 可自定义播放间隔
- 多种滑动效果
- 响应式设计

## 代码示例

```html
<div class="text-slide-container">
  <div class="text-slide">
    <div class="slide-item">欢迎来到我们的网站</div>
    <div class="slide-item">发现无限可能</div>
    <div class="slide-item">创新科技，智慧未来</div>
    <div class="slide-item">用户体验至上</div>
  </div>
</div>
```

```css
.text-slide-container {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 8px;
  position: relative;
}

.text-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: slide-vertical 8s ease-in-out infinite;
}

.slide-item {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding: 0 20px;
}

@keyframes slide-vertical {
  0%, 20% {
    transform: translateY(0);
  }
  25%, 45% {
    transform: translateY(-60px);
  }
  50%, 70% {
    transform: translateY(-120px);
  }
  75%, 95% {
    transform: translateY(-180px);
  }
  100% {
    transform: translateY(-240px);
  }
}

/* 水平滑动效果 */
.text-slide.horizontal {
  flex-direction: row;
  animation: slide-horizontal 12s ease-in-out infinite;
}

.text-slide.horizontal .slide-item {
  width: 100%;
  height: 60px;
  flex-shrink: 0;
}

@keyframes slide-horizontal {
  0%, 20% {
    transform: translateX(0);
  }
  25%, 45% {
    transform: translateX(-100%);
  }
  50%, 70% {
    transform: translateX(-200%);
  }
  75%, 95% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(-400%);
  }
}

/* 淡入淡出效果 */
.text-slide.fade {
  animation: slide-fade 6s ease-in-out infinite;
}

@keyframes slide-fade {
  0%, 15% {
    opacity: 1;
    transform: translateY(0);
  }
  20%, 35% {
    opacity: 0;
    transform: translateY(-10px);
  }
  40%, 55% {
    opacity: 1;
    transform: translateY(0);
  }
  60%, 75% {
    opacity: 0;
    transform: translateY(-10px);
  }
  80%, 95% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* 旋转切换效果 */
.text-slide.rotate {
  animation: slide-rotate 10s ease-in-out infinite;
}

@keyframes slide-rotate {
  0%, 20% {
    opacity: 1;
    transform: rotateY(0deg);
  }
  25%, 45% {
    opacity: 0;
    transform: rotateY(-90deg);
  }
  50%, 70% {
    opacity: 1;
    transform: rotateY(0deg);
  }
  75%, 95% {
    opacity: 0;
    transform: rotateY(-90deg);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg);
  }
}

/* 不同速度 */
.text-slide.fast {
  animation-duration: 4s;
}

.text-slide.slow {
  animation-duration: 15s;
}

/* 悬停暂停 */
.text-slide-container:hover .text-slide {
  animation-play-state: paused;
}

/* 自定义样式 */
.text-slide.custom .slide-item {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 24px;
  font-weight: 700;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .text-slide-container {
    height: 50px;
  }
  
  .slide-item {
    height: 50px;
    font-size: 16px;
    padding: 0 15px;
  }
  
  @keyframes slide-vertical {
    0%, 20% {
      transform: translateY(0);
    }
    25%, 45% {
      transform: translateY(-50px);
    }
    50%, 70% {
      transform: translateY(-100px);
    }
    75%, 95% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(-200px);
    }
  }
}
```

## 实现原理

1. **容器溢出控制**: 使用`overflow: hidden`隐藏超出部分
2. **多行布局**: 使用`flex-direction`控制滑动方向
3. **动画关键帧**: 使用`@keyframes`定义滑动路径和时间点
4. **循环播放**: 设置`animation: infinite`实现无缝轮播
5. **悬停控制**: 使用`animation-play-state: paused`实现悬停暂停
6. **性能优化**: 使用`transform`属性提高动画性能