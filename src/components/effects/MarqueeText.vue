<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isPaused = ref(false)

onMounted(() => {
  // 演示用途：5秒后自动暂停
  setTimeout(() => {
    isPaused.value = true
  }, 5000)
})
</script>

<template>
  <div class="demo-container">
    <div class="marquee-section">
      <h3>标准跑马灯效果</h3>
      <div class="marquee-container">
        <div class="marquee-text" :class="{ 'paused': isPaused }">
          🚀 最新消息：CSS动效博客上线啦！更多精彩内容等你发现！✨
        </div>
      </div>
      
      <h3>双倍长度版本（无缝循环）</h3>
      <div class="marquee-container">
        <div class="marquee-double" :class="{ 'paused': isPaused }">
          <div class="marquee-content">
            🔥 热门推荐：文字抖动效果 - 让你的网页更有活力！ 🔥 热门推荐：文字抖动效果 - 让你的网页更有活力！
          </div>
          <div class="marquee-content">
            🔥 热门推荐：文字抖动效果 - 让你的网页更有活力！ 🔥 热门推荐：文字抖动效果 - 让你的网页更有活力！
          </div>
        </div>
      </div>
      
      <button class="pause-btn" @click="isPaused = !isPaused">
        {{ isPaused ? '继续播放' : '暂停播放' }}
      </button>
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

.marquee-section {
  width: 100%;
  max-width: 600px;
}

.marquee-section h3 {
  margin: 0 0 1rem 0;
  font-size: 1rem;
  color: #374151;
  text-align: center;
}

.marquee-container {
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.75rem 0;
  margin-bottom: 1.5rem;
  position: relative;
}

.marquee-text {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 15s linear infinite;
  font-size: 1rem;
  color: #374151;
  font-weight: 500;
}

.marquee-text.paused,
.marquee-double.paused {
  animation-play-state: paused;
}

.marquee-double {
  width: 200%;
  display: flex;
}

.marquee-content {
  width: 50%;
  display: flex;
  animation: marquee-double 10s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

@keyframes marquee-double {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.pause-btn {
  display: block;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  background: #6b7280;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.pause-btn:hover {
  background: #4b5563;
}

@media (max-width: 640px) {
  .marquee-text,
  .marquee-content {
    font-size: 0.875rem;
  }
}
</style>