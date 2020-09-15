import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

import CreatePlace from '../views/CreatePlace.vue'

import Events from '../views/Events.vue'
import CreateEvents from '../views/CreateEvents.vue'

import Products from '../views/Products.vue'
import CreateProducts from '../views/CreateProducts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Sign up',
    component: Signup
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/places/create',
    name: 'Create Place',
    component: CreatePlace
  },
  {
    path: '/places/edit/:id',
    name: 'Edit Place',
    props: true,
    component: CreatePlace
  },
  {
    path: '/places/:id/events',
    name: 'Events',
    props: true,
    component: Events
  },
  {
    path: '/events/:placeId/create',
    name: 'Create Events',
    props: true,
    component: CreateEvents
  },
  {
    path: '/events/:placeId/edit/:eventId',
    name: 'Edit Events',
    props: true,
    component: CreateEvents
  },
  {
    path: '/events/:placeId/products/:eventId',
    name: 'Event Products',
    props: true,
    component: Products
  },
  {
    path: '/events/:placeId/product/:eventId/create',
    name: 'Create Product',
    props: true,
    component: CreateProducts
  },
  {
    path: '/events/:placeId/product/:eventId/edit/:productId',
    name: 'Edite Product',
    props: true,
    component: CreateProducts
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL ,
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next({ 
      path: '/login', 
      query: { returnUrl: to.path } 
    });
  }

  next();
})

export default router
