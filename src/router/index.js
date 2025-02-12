import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CounterPage from '@/views/CounterPage.vue'
import SinglePage from '@/views/SinglePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutPage.vue'),
    },
    {
      path: '/count',
      name: 'count',
      component:CounterPage,
    },
    {
      path: '/single',
      name: 'single',
      component:SinglePage,
    },
  ],
})

export default router

