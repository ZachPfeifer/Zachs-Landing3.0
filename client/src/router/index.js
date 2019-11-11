import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/messages',
    name: 'messages',
    // route level code-splitting
    // this generates a separate chunk (messages.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      // @ts-ignore
      return import(/* webpackChunkName: "messages" */ '../views/Messages.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
