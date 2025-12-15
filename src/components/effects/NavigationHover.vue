<script setup lang="ts">
</script>

<template>
  <div class="demo-container">
    <nav class="nav-menu">
      <a href="#" class="nav-link">首页</a>
      <a href="#" class="nav-link">关于</a>
      <a href="#" class="nav-link">服务</a>
      <a href="#" class="nav-link">联系</a>
    </nav>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  padding: 1rem 2rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.nav-link {
  position: relative;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #3b82f6;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #3b82f6;
}

.nav-link:hover::after {
  width: 100%;
}
</style>