import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
    path: '/user-info',
    name: 'user-info',
    component: () => import('@/views/user/UserInfo.vue'),
    redirect: '/user-info/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/user/UserHome.vue'),
      },
      {
        path: 'video-page',
        name: 'video-page',
        component: () => import('@/views/user/video/VideoPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
