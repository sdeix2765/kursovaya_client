import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView"
import RoomClassView from '@/views/RoomClassView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/classes',
    name: 'classes',
    component: RoomClassView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
