import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trainings',
    name: 'TrainingsPage',
    component: () => import('../views/TrainingsPage.vue')
  },
  {
    path: '/cards',
    name: 'CardsPage',
    component: () => import('../views/CardsPage.vue')
  },
  {
    path: '/translations',
    name: 'TranslationsPage',
    component: () => import('../views/TranslationsPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
