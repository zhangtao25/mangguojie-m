import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
      // r
    },
    {
      path: '/login',
      component: ()=>import('../layouts/login.vue')
    },
    {
      path: '/home',
      component: ()=>import('../layouts/home.vue')
    },
    {
      path: '/mall',
      component: ()=>import('../layouts/mall.vue')
    },
    {
      path: '/msg',
      component: ()=>import('../layouts/msg.vue')
    },
    {
      path: '/mine',
      component: ()=>import('../layouts/mine.vue')
    },
  ]
})
