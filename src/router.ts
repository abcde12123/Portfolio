import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import PortfolioView from './views/PortfolioView.vue'
import SkillsView from './views/SkillsView.vue'
import GamingView from './views/GamingView.vue'
import ProjectDetailView from './views/ProjectDetailView.vue'

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
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView,
    meta: { index: 3 }
  },
  {
    path: '/gaming',
    name: 'gaming',
    component: GamingView,
    meta: { index: 4 }
  },
  {
    path: '/project/:id',
    name: 'project-detail',
    component: ProjectDetailView,
    meta: { index: 5 }
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
