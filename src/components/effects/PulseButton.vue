<template>
  <button class="pulse-button" @click="handleClick">
    点击我
  </button>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('脉冲按钮被点击了！')
}
</script>

<style scoped>
.pulse-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  outline: none;
}

.pulse-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.pulse-button:hover::before {
  width: 300px;
  height: 300px;
}

.pulse-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.pulse-button:active {
  transform: scale(0.98);
}
</style>