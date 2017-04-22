import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import login from '@/components/login'
import addBill from '@/components/addBill'
import search from '@/components/search'
import statistics from '@/components/statistics'
import admin from '@/components/admin'
import details from '@/components/details'
import clearBill from '@/components/clearBill'
import modify from '@/components/modify'
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
          path: 'personalcenter',
          component: resolve => require(['../components/personalCenter'], resolve)
        }
      ]
    },
    {
      path: '/addBill',
      name: 'addBill',
      component: addBill
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: statistics
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/clearBill',
      name: 'clearBill',
      component: clearBill
    },
    {
      path: '/modify',
      name: 'modify',
      component: modify
    },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
