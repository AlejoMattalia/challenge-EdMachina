import Dashboard from '@/page/Dashboard.vue'
import ForgotPassword from '@/page/ForgotPassword.vue'
import Home from '@/page/Home.vue'
import Login from '@/page/Login.vue'
import NotFound from '@/page/NotFound.vue'
import PetProfile from '@/page/PetProfile.vue'
import Register from '@/page/Register.vue' // Agregar la ruta para Register
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from 'vue-router'

// Función para verificar si el usuario está logueado
const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const user: string | null = localStorage.getItem('user')

  if (!user) {
    next('/login')
  } else {
    next()
  }
}

const routes = [
  { path: '/', component: Home, beforeEnter: requireAuth },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: requireAuth,
  },
  { path: '/pet-profile', component: PetProfile, beforeEnter: requireAuth },
  { path: '/login', component: Login, meta: { layout: 'auth' } },
  { path: '/register', component: Register, meta: { layout: 'auth' } },
  { path: '/forgot-password', component: ForgotPassword, meta: { layout: 'auth' } },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
