import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import History from '@/views/History'
import Target from '@/views/Target'
import Mine from '@/views/Mine'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/target',
    name: 'Target',
    component: Target
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
