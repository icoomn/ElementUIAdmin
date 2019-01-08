import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Users from './views/Users.vue'
import Articles from './views/Articles.vue'
import Echarts from './views/Echarts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'home'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: Echarts
    }
  ]
})
