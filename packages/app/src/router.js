import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        auth: false
      },
      component: () => import(/* webpackChunkName: "login" */ './pages/Auth.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "list" */ './pages/Retros.vue')
    },
    {
      path: '/retros/:id',
      name: 'retro',
      component: () => import(/* webpackChunkName: "retro" */ './pages/Retro.vue')
    },
    {
      path: '/mark/create/:type',
      name: 'mark',
      component: () => import(/* webpackChunkName: "mark" */ './pages/Mark.vue')
    }
  ]
})
