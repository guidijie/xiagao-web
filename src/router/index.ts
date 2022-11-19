import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'view-index',
    component: () => import('@/views/ViewMain.vue'),
  },
  {
    path: '/view-details',
    name: 'view-details',
    component: () => import('@/views/ViewDetails.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/UserInfo.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
