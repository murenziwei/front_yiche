import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const liwei = [
  {
    path: '/repairing',
    name: 'repairing',
    component: () => import('@/view/apply/index')//汽修中心
  },
  {
    path: '/repset',
    name: 'repset',
    component: () => import('@/view/apply/set')//修改汽修中心状态
  },
  {
    path: '/approve',
    name: 'approve',
    component: () => import('@/view/apply/approve')//申请汽修中心
  },
  {
    path: '/audit',
    name: 'audit',
    component: () => import('@/view/apply/audit')//审核中心
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/view/about/about')//关于我们
  },
  {
    path: '/invite',
    name: 'invite',
    component: () => import('@/view/invite/invite')//邀请好友
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/view/message/home'),//消息
    redirect :'/message/msg',
    children: [
      {
        path: 'msg',
        name: 'msg',
        component: () => import('@/view/message/child/index'),
        meta:{
          isFooter:true
        }
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
];

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/address',
      name: 'address',
      component: () => import('@/components/address/address'),  //地址
      children:[
           
      ]
    },
    {
      path: '/address/editaddress',
      name: 'editaddress',
      component: () => import('@/components/address/editaddress'), //地址编辑or新增
    }, 
    {
      path: '/order',
      name: 'order',
      component: () => import('@/components/order/order'),  //订单
    },
    {
      path: '/order/orderDetails',
      name: 'orderDetails',
      component: () => import('@/components/order/orderDetails'),   //订单详情
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('@/components/me/me'),    //我的
    },
    {
      path: '/me/earnings',
      name: 'earnings',
      component: () => import('@/components/me/earnings'),  //收益中心
    },
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
      meta: {
        isFooter: true
      }
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('@/view/price/price'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/view/detail/detail'),
    },
    {
      path: '/reply',
      name: 'reply',
      component: () => import('@/view/comment/reply'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/view/search/search'),
    },
    {
      path: '/searchList',
      name: 'searchList',
      component: () => import('@/view/search/searchList'),
    },
    {
      path: '/description',
      name: 'description',
      component: () => import('@/view/description/description'),
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('@/view/shopping/shopping'),
      meta: {
        isFooter: true
      }
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/view/map/map'),
      meta: {
        isFooter: true
      }
    }
  ]
})
