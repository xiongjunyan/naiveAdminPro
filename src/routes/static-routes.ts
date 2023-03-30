import type { RouteRecordRaw } from 'vue-router'
const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: '登录页面',
    component: () => import('~/pages/login/index.vue'),
    meta: {
      title: '侧边栏标题'
    }
  },
  {
    path: '/error',
    name: '错误页面',
    component: () => import('~/pages/exception/error.vue')
  },
  {
    path: '/redirect/:path(.*)',
    name: '重定向',
    component: () => import('~/pages/redirect/index.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '错误页面',
    component: () => import('~/pages/exception/error.vue')
  },
  {
    path: '/',
    name: '首页',
    component: () => import('~/pages/index.vue')
  }
]
export default staticRoutes
