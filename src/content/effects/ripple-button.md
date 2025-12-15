---
author: MiniMax Agent
category: 按钮
createdAt: "2025-12-15"
demoComponent: RippleButton
description: 具有涟漪扩散效果的按钮，Material Design风格的交互反馈
difficulty: medium
id: "8"
likes: 41
name: 涟漪按钮
tags:
    - 按钮
    - 涟漪
    - Material Design
    - 交互
---

## 效果演示

涟漪按钮效果包含：
- 点击时涟漪扩散动画
- Material Design风格
- 多种颜色支持
- 平滑的动画过渡
- 响应式交互

## 使用场景

- 表单提交按钮
- 导航按钮
- 操作确认按钮
- 移动端交互
- 现代UI设计

## 技术特点

- 纯CSS实现
- Material Design风格
- 可自定义涟漪颜色
- 支持点击坐标定位
- 兼容移动端

## 代码示例

```html
<button class="ripple-button">
  <span>涟漪按钮</span>
</button>
```

```css
.ripple-button {
  position: relative;
  overflow: hidden;
  padding: 12px 24px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.ripple-button span {
  position: relative;
  z-index: 1;
}

.ripple-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
  z-index: 0;
}

.ripple-button:active::before {
  width: 300px;
  height: 300px;
}

.ripple-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

/* 不同颜色变体 */
.ripple-button.red {
  background: linear-gradient(45deg, #ff6b6b, #ee5a52);
}

.ripple-button.green {
  background: linear-gradient(45deg, #51cf66, #40c057);
}

.ripple-button.blue {
  background: linear-gradient(45deg, #339af0, #228be6);
}

/* 扁平化设计 */
.ripple-button.flat {
  background: #f8f9fa;
  color: #495057;
  border: 2px solid #dee2e6;
}

.ripple-button.flat::before {
  background: rgba(52, 58, 64, 0.1);
}

.ripple-button.flat:hover {
  background: #e9ecef;
  border-color: #adb5bd;
}

/* 轮廓按钮 */
.ripple-button.outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.ripple-button.outline::before {
  background: rgba(102, 126, 234, 0.2);
}

.ripple-button.outline:hover {
  background: #667eea;
  color: white;
}

/* 大尺寸 */
.ripple-button.large {
  padding: 16px 32px;
  font-size: 18px;
}

/* 小尺寸 */
.ripple-button.small {
  padding: 8px 16px;
  font-size: 14px;
}

/* 涟漪效果自定义 */
.ripple-button.custom::before {
  background: rgba(255, 215, 0, 0.6); /* 金色涟漪 */
}

/* 波纹从点击位置扩散 */
.ripple-button.positioned {
  /* 需要JavaScript来设置点击位置 */
}

.ripple-button.positioned::before {
  /* 通过CSS变量设置位置 */
  left: var(--ripple-x, 50%);
  top: var(--ripple-y, 50%);
}

/* 禁用状态 */
.ripple-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.ripple-button:disabled:hover {
  transform: none;
  box-shadow: none;
}

.ripple-button:disabled::before {
  display: none;
}
```

## 实现原理

1. **涟漪扩散**: 使用伪元素和`border-radius`创建圆形涟漪
2. **点击定位**: 通过`::before`伪元素从中心向外扩散
3. **动画控制**: 使用`transition`控制涟漪的展开速度
4. **层次管理**: 使用`z-index`确保内容在涟漪之上
5. **交互反馈**: 通过`:active`伪类触发动画效果
6. **材料设计**: 遵循Material Design的涟漪交互规范