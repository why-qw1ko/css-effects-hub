---
author: MiniMax Agent
category: 文本
createdAt: "2025-12-15"
demoComponent: MarqueeText
description: 具有滚动动画效果的文字展示，适用于新闻条幅或重要公告
difficulty: medium
id: "3"
likes: 35
name: 跑马灯文字
tags:
    - 文本
    - 跑马灯
    - 滚动
    - 动画
---

## 效果演示

跑马灯文字效果包含：

- 水平滚动动画
- 无缝循环播放
- 可调节滚动速度
- 支持多行文本
- 响应式设计

## 使用场景

- 新闻滚动条
- 重要公告展示
- 股票价格显示
- 活动宣传语
- 网站公告栏

## 技术特点

- 纯CSS实现
- 无限循环动画
- 可自定义滚动速度
- 支持暂停悬停效果
- 兼容主流浏览器

## 代码示例

```html
<div class="marquee-container">
  <div class="marquee-text">
    🚀 重要公告：网站即将进行系统维护，预计维护时间为2小时，敬请谅解！
  </div>
</div>
```

```css
.marquee-container {
  width: 100%;
  overflow: hidden;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 1rem 0;
  white-space: nowrap;
}

.marquee-text {
  display: inline-block;
  animation: marquee 20s linear infinite;
  font-size: 1.125rem;
  font-weight: 500;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* 悬停暂停效果 */
.marquee-container:hover .marquee-text {
  animation-play-state: paused;
}

/* 自定义滚动速度 */
.marquee-text.fast {
  animation-duration: 10s;
}

.marquee-text.slow {
  animation-duration: 30s;
}

/* 多行文本支持 */
.marquee-multiple {
  white-space: normal;
  animation: marquee-vertical 30s linear infinite;
}

@keyframes marquee-vertical {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}
```

## 实现原理

1. **容器设置**: 使用`overflow: hidden`隐藏超出部分
2. **动画路径**: 通过`transform: translateX`实现水平移动
3. **循环播放**: 设置`animation: infinite`实现无缝循环
4. **性能优化**: 使用`transform`代替`position`变化提高性能
5. **交互控制**: 通过`animation-play-state: paused`实现悬停暂停