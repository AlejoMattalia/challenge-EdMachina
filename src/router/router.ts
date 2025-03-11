import Dashboard from '@/page/Dashboard.vue'
import Home from '@/page/Home.vue'
import NotFound from '@/page/NotFound.vue'
import PetProfile from '@/page/PetProfile.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/pet-profile', component: PetProfile },
  { path: '/:pathMatch(.*)*', component: NotFound }, // Ruta comodín para manejar 404
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
