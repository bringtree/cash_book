import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import login from '@/components/login'
import home from '@/components/home'
import menu from '@/components/menu'
import personalCenter from '@/components/personalCenter'
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
      component: home,
      children: [
        {
          path: 'menu',
          component: menu
        },
        {
          path: 'personalcenter',
          component: personalCenter
        }
      ]
    }
  ]
})
