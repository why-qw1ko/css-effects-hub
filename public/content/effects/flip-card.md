---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 304502207e83b6f074a5ac0b6298b522dc4cfeb069784603e83ee1491661c5191f589026022100d987d1355d9b19c79fe97fc88e3f1f7c5a60ae2903cf8e67b8a1beef56eac196
    ReservedCode2: 3046022100b6aee540618a519ee86bb3bae318482b7ea2f7c357fdc95e4c6856cab2d4b98b022100b4104a989edbf37b918c12767341c8eef2f19dd91c35cc6520f91ffa6a46edee
author: MiniMax Agent
category: 卡片
createdAt: "2025-12-15"
demoComponent: FlipCard
description: 具有3D翻转效果的卡片组件，可展示前后两面内容
difficulty: medium
id: "5"
likes: 38
name: 翻转卡片
tags:
    - 卡片
    - 3D
    - 翻转
    - 动画
---

## 效果演示

翻转卡片具有：
- 3D立体翻转效果
- 前后双面内容展示
- 平滑过渡动画
- 悬停触发机制
- 响应式设计

## 使用场景

- 产品展示卡片
- 团队成员介绍
- 服务特色展示
- 知识卡片
- 交互式菜单

## 技术特点

- 纯CSS 3D变换
- 无JavaScript依赖
- 支持触摸设备
- 可自定义翻转方向
- 流畅的过渡动画

## 代码示例

```html
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>前面内容</h3>
      <p>显示正面信息</p>
    </div>
    <div class="flip-card-back">
      <h3>背面内容</h3>
      <p>显示背面信息</p>
    </div>
  </div>
</div>
```

```css
.flip-card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.flip-card-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.flip-card-back {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  transform: rotateY(180deg);
}

/* 不同翻转方向 */
.flip-card.vertical:hover .flip-card-inner {
  transform: rotateX(180deg);
}

.flip-card.vertical .flip-card-back {
  transform: rotateX(180deg);
}

/* 点击触发（需JavaScript） */
.flip-card.active .flip-card-inner {
  transform: rotateY(180deg);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .flip-card {
    width: 250px;
    height: 150px;
  }
}
```

## 实现原理

1. **3D透视**: 使用`perspective`属性创建3D空间
2. **3D变换**: 使用`transform-style: preserve-3d`保持3D效果
3. **背面隐藏**: 使用`backface-visibility: hidden`隐藏背面
4. **翻转动画**: 通过`rotateY`或`rotateX`实现翻转
5. **双面布局**: 使用绝对定位堆叠前后两面