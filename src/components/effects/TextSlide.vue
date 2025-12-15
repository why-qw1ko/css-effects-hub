<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showText = ref(false)

onMounted(() => {
  // 延迟显示文字以触发动画
  setTimeout(() => {
    showText.value = true
  }, 500)
})
</script>

<template>
  <div class="demo-container">
    <div class="text-slide-container">
      <h2 class="slide-text" :class="{ 'animate': showText }">
        欢迎来到动效世界
      </h2>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
}

.text-slide-container {
  overflow: hidden;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 0.5rem;
}

.slide-text {
  margin: 0;
  color: #1f2937;
  font-size: 2rem;
  font-weight: bold;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.8s ease-out;
}

.slide-text.animate {
  transform: translateX(0);
  opacity: 1;
}
</style>