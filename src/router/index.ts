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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
