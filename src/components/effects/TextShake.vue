<script setup lang="ts">
import { ref } from 'vue'

const isShaking = ref(false)

const triggerShake = () => {
  isShaking.value = true
  setTimeout(() => {
    isShaking.value = false
  }, 1000)
}
</script>

<template>
  <div class="demo-container">
    <div class="text-shake-section">
      <div class="text-shake" :class="{ 'animate': isShaking }" @click="triggerShake">
        重要提醒！
      </div>
      
      <div class="text-shake-gentle">
        温和抖动
      </div>
      
      <button class="shake-trigger" @click="triggerShake">
        点击触发抖动
      </button>
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

.text-shake-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text-shake {
  display: inline-block;
  color: #ef4444;
  font-weight: bold;
  font-size: 1.25rem;
  animation: shake 0.5s infinite;
  cursor: pointer;
  user-select: none;
}

.text-shake.animate {
  animation: shake-intense 1s infinite;
}

.text-shake-gentle {
  color: #f59e0b;
  font-weight: 600;
  font-size: 1.1rem;
  animation: shake-gentle 1s infinite;
}

.shake-trigger {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.shake-trigger:hover {
  background: #2563eb;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
  20%, 40%, 60%, 80% { transform: translateX(2px); }
}

@keyframes shake-intense {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-3px) rotate(-1deg); }
  20%, 40%, 60%, 80% { transform: translateX(3px) rotate(1deg); }
}

@keyframes shake-gentle {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-1px); }
  75% { transform: translateX(1px); }
}
</style>