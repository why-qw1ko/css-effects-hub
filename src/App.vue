<template>
  <div id="app">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// 全局应用配置
onMounted(() => {
  console.log('Vue应用已初始化')
})
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
}
</style>