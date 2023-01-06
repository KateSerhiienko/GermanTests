import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/perfect',
    name: 'Perfect',
    component: () => import('../views/Perfect.vue')
  },
  {
    path: '/personal_pronouns_in_akkusativ',
    name: 'PersonalPronounsInAkkusativ',
    component: () => import('../views/PersonalPronounsInAkkusativ.vue')
  }, {
    path: '/3_person_singular_prasens',
    name: '3PersonSingularPrasens',
    component: () => import('../views/3PersonSingularPrasens.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
