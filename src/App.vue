<script setup lang="ts">
import { RouterView, RouterLink, useRoute } from 'vue-router'
import ThemeSelector from '@/components/ThemeSelector.vue'
import { initLogger } from '@/composables/useLogger'

// 初始化日志系统
initLogger()

const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-base-200">
    <!-- 导航栏 -->
    <div class="navbar bg-base-100 shadow-lg">
      <div class="flex-1">
        <span class="text-xl font-bold px-4">Tauri + Vue + DaisyUI</span>
      </div>
      <div class="flex-none gap-2">
        <ul class="menu menu-horizontal px-1">
          <li>
            <RouterLink to="/" :class="{ active: route.path === '/' }">首页</RouterLink>
          </li>
          <li>
            <RouterLink to="/demo" :class="{ active: route.path === '/demo' }">Tauri</RouterLink>
          </li>
          <li>
            <RouterLink to="/animation" :class="{ active: route.path === '/animation' }">动画</RouterLink>
          </li>
          <li>
            <RouterLink to="/icons" :class="{ active: route.path === '/icons' }">图标</RouterLink>
          </li>
          <li>
            <RouterLink to="/hooks" :class="{ active: route.path === '/hooks' }">Hooks</RouterLink>
          </li>
        </ul>
        <ThemeSelector />
      </div>
    </div>

    <!-- 主内容区 -->
    <main class="container mx-auto p-8 max-w-4xl">
      <RouterView />
    </main>
  </div>
</template>
