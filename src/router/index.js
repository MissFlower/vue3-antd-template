/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 14:21:02
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-04-09 14:14:15
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from 'src/layout/MainLayout'

export const constantRoutes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Home',
        component: () => import('../views/Home'),
        meta: {
          title: 'Home',
          icon: 'iconhome',
          affix: true
        }
      }
    ]
  },
  {
    path: '/documentation',
    component: MainLayout,
    children: [{
      path: 'index',
      name: 'Documentation',
      component: () => import('src/views/Documentation'),
      meta: {
        title: 'Documentation',
        icon: 'iconfileprotect',
        affix: true
      }
    }]
  },
  {
    path: '/guide',
    component: MainLayout,
    // alwaysShow: true,
    // meta: {
    //   title: '导航',
    //   icon: 'iconteam'
    // },
    redirect: '/guide/index',
    children: [{
      path: 'index',
      name: 'Guide',
      component: () => import('src/views/Guide'),
      meta: {
        title: 'Guide',
        icon: 'iconteam',
        noCache: true
      }
    }]
  },
  {
    path: '/about',
    component: MainLayout,
    children: [{
      path: 'index',
      name: 'About',
      component: () => import('src/views/About'),
      meta: {
        title: 'About',
        icon: 'iconsafetycertificate',
        noCache: true
      }
    }]
  },
  {
    path: '/charts',
    component: MainLayout,
    name: 'Charts',
    redirect: '/charts/keyboardChart',
    meta: {
      title: 'Charts',
      icon: 'iconbarchart',
      code: '002'
    },
    children: [
      {
        path: 'keyboardChart',
        name: 'KeyboardChart',
        component: () => import('src/views/KeyboardChart'),
        meta: { title: 'Keyboard Chart', noCache: true, code: '002001' }
      },
      {
        path: 'lineChart',
        name: 'LineChart',
        component: () => import('src/views/LineChart'),
        meta: { title: 'Line Chart', noCache: true, code: '002002' }
      },
      {
        path: 'mixChart',
        name: 'MixChart',
        component: () => import('src/views/MixChart'),
        meta: { title: 'Mix Chart', noCache: true, code: '002003' }
      }
    ]
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MainLayout,
    redirect: '/menu/menu1',
    meta: { title: 'menu', icon: 'iconalert' },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        component: () => import('@/views/Menu'),
        meta: { title: 'menu1', icon: 'iconalert' },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu1-1',
            component: () => import('@/views/Menu'),
            meta: { title: 'menu1-1', icon: 'iconalert' },
            children: [
              {
                path: 'menu1-1-1',
                name: 'Menu1-1-1',
                component: () => import('@/views/Menu'),
                meta: { title: 'menu1-1-1', icon: 'iconalert' }
              },
              {
                path: 'menu1-1-2',
                name: 'Menu1-1-2',
                component: () => import('@/views/Menu'),
                meta: { title: 'menu1-1-2', icon: 'iconalert' }
              }
            ]
          },
          {
            path: 'menu1-2',
            name: 'Menu1-2',
            component: () => import('@/views/Menu'),
            meta: { title: 'menu1-2', icon: 'iconalert' }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('@/views/Menu'),
        meta: { title: 'menu2', icon: 'iconalert' }
      }
    ]
  }
]

export const asyncRoutes = []

const initRouter = () => createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = initRouter()

// 重置路由
export function resetRouter() {
  const newRouter = initRouter()
  router.matcher = newRouter.matcher
}

export default router
