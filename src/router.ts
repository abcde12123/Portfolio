import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import PortfolioView from './views/PortfolioView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { index: 1 }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView,
    meta: { index: 2 }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router
