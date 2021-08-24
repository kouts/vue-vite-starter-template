import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '@/layouts/default/Default.vue'
import Home from '@/views/Home.vue'

Vue.component('LayoutDefault', Default)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    component: () => import('@/views/About.vue'),
    meta: {
      layout: 'default'
    }
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
