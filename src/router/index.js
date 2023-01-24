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
  },
  {
    path: '/third_person_singular_prasent',
    name: 'ThirdPersonSingularPrasent',
    component: () => import('../views/ThirdPersonSingularPrasent.vue')
  },
  {
    path: '/verben',
    name: 'Verben',
    component: () => import('../views/Verben.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
