import { createRouter, createWebHistory } from 'vue-router'
import Manga from '../views/Manga.vue'
import Overlord from '../views/Overlord.vue'
import BlackClover from '../views/BlackClover.vue'
import OnePunchMan from '../views/OnePunchMan.vue'
import Slime from '../views/Slime.vue'
import Ror from '../views/Ror.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/manga',
    name: 'Manga',
    component: Manga
  },
  {
    path: '/overlord',
    name: 'Overlord',
    component: Overlord
  },
  {
    path: '/blackclover',
    name: 'BlackClover',
    component: BlackClover
  },
  {
    path: '/onepunchman',
    name: 'OnePunchMan',
    component: OnePunchMan
  },
  {
    path: '/TenseishitaraSlimeDattKen',
    name: 'Slime',
    component: Slime
  },
  {
    path: '/ShuumatsunoValkyrie',
    name: 'Ror',
    component: Ror
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
