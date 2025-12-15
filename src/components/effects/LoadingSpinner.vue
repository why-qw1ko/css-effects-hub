<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // 模拟加载完成
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
</script>

<template>
  <div class="demo-container">
    <div class="loading-spinner" v-if="isLoading">
      <div class="spinner"></div>
      <p>加载中...</p>
    </div>
    <div v-else class="completed-message">
      <p>加载完成！</p>
    </div>
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

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-spinner p {
  margin: 0;
  color: #6b7280;
  font-size: 0.875rem;
}

.completed-message {
  text-align: center;
  color: #059669;
  font-weight: 500;
}
</style>