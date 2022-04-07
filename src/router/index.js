import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/index.vue'
import Login from '../views/login/index.vue'
import Home from '../views/home/index.vue'
// 异步
const Goods = () => import('../views/goods/index.vue')
const Params = () => import('../views/params/index.vue')
const Advert = () => import('../views/advert/index.vue')
const Order = () => import('../views/order/index.vue')
const OrderList = () => import('../views/order/orderList/index.vue')
const OrderBack = () => import('../views/order/orderBack/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/goods',
        name: 'Goods',
        component: Goods
      },
      {
        path: '/params',
        name: 'Params',
        component: Params
      },
      {
        path: '/advert',
        name: 'Advert',
        component: Advert
      },
      {
        path: '/order',
        name: 'Order',
        component: Order,
        redirect: 'order/orderList',
        children: [
          {
            path: 'orderList',
            component: OrderList
          },
          {
            path: 'orderBack',
            component: OrderBack
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    children: []
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
