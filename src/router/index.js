import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const liwei=[
  {
    path: '/message',
    name: 'message',
    component: () => import('@/view/message/home'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/view/message/child/index'),
      },
      {
        path: 'service',
        name: 'service',
        component: () => import('@/view/message/child/service'),
      },
      {
        path: 'xtdata',
        name: 'xtdata',
        component: () => import('@/view/message/child/xtdata'),
      },
      {
        path: 'xdetail',
        name: 'xdetail',
        component: () => import('@/view/message/child/xdetail')
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  routes: [
    ...liwei,
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/login'),
      children: [
        {
          path: 'register',
          name: 'register',
          component: () => import('@/view/login/register'),
        },
        {
          path: 'reset',
          name: 'reset',
          component: () => import('@/view/login/resetpwd'),
        },
        {
          path: 'binding',
          name: 'binding',
          component: () => import('@/view/login/binding'),
        },
        {
          path: 'protocol',
          name: 'protocol',
          component: () => import('@/view/login/protocol'),
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/view/index/index'),
    }
  ]
})
