import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerIndex from '@/components/customers/CustomerIndex.vue'
import CustomerEdit from '../components/customers/CustomerEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/customers',
    name: 'customers',
    component: CustomerIndex
  },

  {
    path: '/customers/:id/edit',
    name: 'editCustomer',
    component: CustomerEdit
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
