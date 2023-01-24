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
    name: 'TestsPerfect',
    component: () => import('../views/TestsPerfect.vue')
  },
  {
    path: '/personal_pronouns_in_akkusativ',
    name: 'TestsPersonalPronounsInAkkusativ',
    component: () => import('../views/TestsPersonalPronounsInAkkusativ.vue')
  },
  {
    path: '/third_person_singular_prasent',
    name: 'TestsThirdPersonSingularPrasent',
    component: () => import('../views/TestsThirdPersonSingularPrasent.vue')
  },
  {
    path: '/verben',
    name: 'CardsVerbs',
    component: () => import('../views/CardsVerbs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
