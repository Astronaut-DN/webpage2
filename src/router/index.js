import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'
import login from '../views/login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
   {
    path: '/login',
    name: 'login',
    component: login
   },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
