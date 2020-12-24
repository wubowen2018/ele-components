import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/Login.vue')
  },
  {
    path: '/puzzle',
    name: 'Puzzle',
    component: ()=> import('../views/showPuzzle.vue')
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import('../views/axios.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/goduch',
    name: 'Goduch',
    component: () => import('../views/GoDuchPage.vue')
  },
  {
    path: '/showfair',
    name: 'ShowFair',
    component: () => import('../views/ShowFairPage.vue')
  },
  {
    path: '/backTopOne',
    name: 'backTopOne',
    //异步加载，不使用不加载
    component: ()=> import('../views/BackTopOne')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
