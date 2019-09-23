import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './views/Homepage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/InConstruction',
      name: 'InConstruction',
      component: () => import('./views/InConstruction.vue')
    },
    {
      path: '/Play',
      name: 'Play',
      component: () => import('./views/Play.vue')
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: () => import('./views/Projects.vue')
    },
    {
      path: '/',
      name: 'Work',
      component: () => import('./views/Work.vue')
    },
    {
      path: '*',
      name: '/'
    }
  ]
})
