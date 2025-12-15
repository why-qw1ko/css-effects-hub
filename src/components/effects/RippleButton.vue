<script setup lang="ts">
import { ref } from 'vue'

const isClicked = ref(false)

const handleClick = () => {
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
  }, 300)
}
</script>

<template>
  <div class="demo-container">
    <button class="ripple-button" @click="handleClick">
      <span class="ripple-content">点击我</span>
    </button>
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

.ripple-button {
  position: relative;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease;
  outline: none;
}

.ripple-button:hover {
  background: #2563eb;
}

.ripple-button:active {
  background: #1d4ed8;
}

.ripple-content {
  position: relative;
  z-index: 1;
}

.ripple-button::after {
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
}

.ripple-button:active::after {
  width: 300px;
  height: 300px;
}
</style>