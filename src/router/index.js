import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tests',
    name: 'TestPage',
    component: () => import('../views/TestPage.vue')
  },
  {
    path: '/cards',
    name: 'CardsPage',
    component: () => import('../views/CardsPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
