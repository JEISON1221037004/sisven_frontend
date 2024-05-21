import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerIndex from '@/components/customers/CustomerIndex.vue'
import CustomerEdit from '../components/customers/CustomerEdit.vue'
import CustomerNew from '../components/customers/CustomerNew.vue'
import CategoryIndex from '../components/categories/CategoryIndex.vue'
import CategoryNew from '../components/categories/CategoryNew.vue'
import CategoryEdit from '../components/categories/CategoryEdit.vue'
import PayModeIndex from '../components/paymodes/PayModeIndex.vue'
import PayModeNew from '../components/paymodes/PayModeNew.vue';

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
  },

  {
    path: '/customers/new',
    name: 'newCustomer',
    component: CustomerNew
  },

  {
    path: '/categories',
    name: 'categories',
    component: CategoryIndex
  },

  {
    path: '/categories/new',
    name: 'newCategory',
    component: CategoryNew
  },

  {
    path: '/categories/:id/edit',
    name: 'editCategory',
    component: CategoryEdit
  },

  {
    path: '/paymodes',
    name: 'paymodes',
    component: PayModeIndex
  },

  {
    path: '/paymodes/new',
    name: 'newPayMode',
    component: PayModeNew
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
