<script setup lang="ts">
</script>

<template>
  <div class="demo-container">
    <div class="gradient-border-card">
      <div class="card-content">
        <h3>渐变边框卡片</h3>
        <p>这是一个具有动态渐变边框的卡片效果</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
}

.gradient-border-card {
  position: relative;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 300px;
}

.gradient-border-card::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 2px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: gradient-rotate 3s linear infinite;
  background-size: 400% 400%;
}

@keyframes gradient-rotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-content h3 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
}

.card-content p {
  margin: 0;
  color: #6b7280;
  font-size: 0.875rem;
}
</style>