import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../components/home'], resolve),
      children: [
        {
          path: 'menu',
          component: resolve => require(['../components/menu'], resolve)
        },
        {
          path: 'addBill',
          component: resolve => require(['../components/addBill'], resolve)
        },
        {
          path: 'search',
          component: resolve => require(['../components/search'], resolve)
        },
        {
          path: 'statistics',
          component: resolve => require(['../components/statistics'], resolve)
        },
        {
          path: 'admin',
          component: resolve => require(['../components/admin'], resolve)
        },
        {
          path: 'personalcenter',
          component: resolve => require(['../components/personalCenter'], resolve)
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
