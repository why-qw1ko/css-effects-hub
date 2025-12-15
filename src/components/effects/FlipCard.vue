<script setup lang="ts">
</script>

<template>
  <div class="demo-container">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3>正面</h3>
          <p>悬停查看背面</p>
        </div>
        <div class="flip-card-back">
          <h3>背面</h3>
          <p>这是卡片的背面内容</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
}

.flip-card {
  perspective: 1000px;
  width: 300px;
  height: 200px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
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
  align-items: center;
  justify-content: center;
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

.flip-card-front h3,
.flip-card-back h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.flip-card-front p,
.flip-card-back p {
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
}
</style>