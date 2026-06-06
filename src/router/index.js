import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductCreateView from '../views/ProductCreateView.vue'
import ModelView from '../views/ModelView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/admin/products/create',
      component: ProductCreateView
    },
    {
  path: '/modelo/:id',
  component: ModelView
  }
  ]
})

export default router