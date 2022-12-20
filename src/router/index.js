import { createRouter, createWebHistory } from 'vue-router'
import SingleProduct from '../components/singleProduct.vue'
import Home from '../views/Products.vue'
import Cart from '../views/Cart.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/product/:id',
        component: SingleProduct,
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart,
      }
]


const router = createRouter({
    history: createWebHistory(),
    params: true,
    routes
  });
  
  export default router