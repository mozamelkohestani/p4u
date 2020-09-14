import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

import CreatePlace from '../views/CreatePlace.vue'

import Events from '../views/Events.vue'
import CreateEvents from '../views/CreateEvents.vue'

import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/signup',
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
    component: CreatePlace
  },
  {
    path: '/places/:id/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/events/create/:placeId',
    name: 'Create Events',
    component: CreateEvents
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL + '/admin',
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/admin/signup'];
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
