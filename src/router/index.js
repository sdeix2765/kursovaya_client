import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView"
import RoomClassView from '@/views/RoomClassView.vue'
import AddRoomClassView from '../views/AddRoomClassView'
import AddRoomView from '../views/AddRoomView'
import ReviewsView from '../views/ReviewsView'
import BookView from '../views/BookView'
import ContactsView from '../views/ContactsView'
import AdminRoomsView from '../views/AdminRoomsView'
import AdminClassView from '../views/AdminClassView'
import AdminBookView from '../views/AdminBookView'
import AdminGuestsView from '../views/AdminGuestsView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/adminrooms',
    name: 'adminrooms',
    component: AdminRoomsView
  },
  {
    path: '/adminclass',
    name: 'adminclass',
    component: AdminClassView
  },
  {
    path: '/adminbook',
    name: 'adminbook',
    component: AdminBookView
  },  
  {
    path: '/adminguests',
    name: 'adminguests',
    component: AdminGuestsView
  },
  {
    path: '/classes',
    name: 'classes',
    component: RoomClassView
  },  
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsView
  },  
  {
    path: '/book',
    name: 'book',
    component: BookView
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
  {
    path: '/Contacts',
    name: 'Contacts',
    component: ContactsView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
