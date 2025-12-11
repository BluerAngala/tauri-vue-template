import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/Demo.vue'),
  },
  {
    path: '/animation',
    name: 'Animation',
    component: () => import('@/views/Animation.vue'),
  },
  {
    path: '/icons',
    name: 'Icons',
    component: () => import('@/views/Icons.vue'),
  },
  {
    path: '/hooks',
    name: 'Hooks',
    component: () => import('@/views/Hooks.vue'),
  },
  {
    path: '/cookie',
    name: 'Cookie',
    component: () => import('@/views/CookieReader.vue'),
  },
  {
    path: '/screen',
    name: 'Screen',
    component: () => import('@/views/ScreenWindow.vue'),
  },
  {
    path: '/screen-content',
    name: 'ScreenContent',
    component: () => import('@/views/ScreenContent.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
