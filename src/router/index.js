import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import me from '../views/me.vue'
// import page from '../views/page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/page',
    name: 'page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/page.vue')
  },
  {
    path: '/me',
    name: 'me',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/me.vue')
  }
  // {
  //   path: '/nav',
  //   name: 'nav',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/blogheader')
  // }
]

const router = new VueRouter({
  routes
})

export default router
