---
author: MiniMax Agent
category: 导航
createdAt: "2025-12-15"
demoComponent: NavigationHover
description: 优雅的导航菜单悬停效果，支持下划线动画和背景渐变
difficulty: easy
id: "9"
likes: 33
name: 导航悬停
tags:
    - 导航
    - 悬停
    - 菜单
    - 动画
---

## 效果演示

导航悬停效果包含：
- 动态下划线动画
- 背景渐变过渡
- 平滑的颜色变化
- 响应式布局
- 多种样式变体

## 使用场景

- 网站主导航
- 面包屑导航
- 侧边栏菜单
- 标签页切换
- 移动端菜单

## 技术特点

- 纯CSS实现
- 无JavaScript依赖
- 可自定义动画速度
- 支持多种颜色主题
- 移动端友好

## 代码示例

```html
<nav class="navigation-hover">
  <ul>
    <li><a href="#" class="nav-link">首页</a></li>
    <li><a href="#" class="nav-link">产品</a></li>
    <li><a href="#" class="nav-link">服务</a></li>
    <li><a href="#" class="nav-link">关于</a></li>
    <li><a href="#" class="nav-link">联系</a></li>
  </ul>
</nav>
```

```css
.navigation-hover ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.nav-link {
  position: relative;
  display: block;
  padding: 16px 24px;
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #667eea;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
}

.nav-link:hover::before {
  width: 100%;
}

/* 下划线从右到左 */
.nav-link.right-to-left::before {
  left: auto;
  right: 0;
}

/* 居中展开 */
.nav-link.center::before {
  left: 50%;
  transform: translateX(-50%);
}

.nav-link.center:hover::before {
  width: 100%;
  transform: translateX(-50%);
}

/* 背景高亮效果 */
.nav-link.highlight {
  position: relative;
}

.nav-link.highlight::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.nav-link.highlight:hover::after {
  opacity: 1;
}

/* 缩放效果 */
.nav-link.scale:hover {
  transform: scale(1.05);
}

/* 垂直导航 */
.navigation-vertical ul {
  flex-direction: column;
  width: 200px;
}

.navigation-vertical .nav-link {
  padding: 12px 20px;
  border-bottom: 1px solid #e2e8f0;
}

.navigation-vertical .nav-link:last-child {
  border-bottom: none;
}

.navigation-vertical .nav-link::before {
  left: 0;
  bottom: auto;
  top: 0;
  width: 4px;
  height: 0;
  background: linear-gradient(45deg, #667eea, #764ba2);
}

.navigation-vertical .nav-link:hover::before {
  height: 100%;
}

/* 不同颜色主题 */
.navigation-hover.blue .nav-link::before {
  background: linear-gradient(45deg, #3b82f6, #1d4ed8);
}

.navigation-hover.blue .nav-link:hover {
  color: #3b82f6;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(29, 78, 216, 0.1));
}

.navigation-hover.green .nav-link::before {
  background: linear-gradient(45deg, #10b981, #059669);
}

.navigation-hover.green .nav-link:hover {
  color: #10b981;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1));
}

/* 活跃状态 */
.nav-link.active {
  color: #667eea;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
}

.nav-link.active::before {
  width: 100%;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navigation-hover ul {
    flex-direction: column;
    width: 100%;
  }
  
  .nav-link {
    padding: 12px 20px;
    text-align: center;
  }
}
```

## 实现原理

1. **下划线动画**: 使用`::before`伪元素创建可动画的下划线
2. **宽度变化**: 通过`width`属性的变化实现下划线扩展
3. **悬停检测**: 使用`:hover`伪类触发动画效果
4. **渐变背景**: 使用`linear-gradient`创建平滑的背景过渡
5. **层次管理**: 使用`z-index`确保下划线在文字之上
6. **响应式适配**: 使用媒体查询适配移动端布局