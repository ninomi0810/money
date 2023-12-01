import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/money',
      name: 'money',
      component: () => import('../views/money.vue')
    },
        
    
  ]
})

export default router
