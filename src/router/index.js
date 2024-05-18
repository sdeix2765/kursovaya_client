import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView"
import RoomClassView from '@/views/RoomClassView.vue'
import AddRoomClassView from '../views/AddRoomClassView'
import AddRoomView from '../views/AddRoomView'

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
    path: '/addclasses',
    name: 'addclasses',
    component: AddRoomClassView
  },
  {
    path: '/addrooms',
    name: 'addrooms',
    component: AddRoomView
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
