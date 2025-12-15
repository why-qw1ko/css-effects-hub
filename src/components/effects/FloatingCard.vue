<template>
  <div class="floating-card">
    <h3>浮动卡片</h3>
    <p>悬停我试试！</p>
  </div>
</template>

<style scoped>
.floating-card {
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-align: center;
  border: 1px solid #e5e7eb;
}

.floating-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.floating-card h3 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
}

.floating-card p {
  margin: 0;
  color: #6b7280;
}
</style>