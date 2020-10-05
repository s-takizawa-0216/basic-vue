import Vue from 'vue'
import Router from 'vue-router'

import Section2 from './components/Section2'
import Section3 from './components/Section3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/section2',
      name: 'section2',
      component: Section2,
    },
    {
      path: '/section3',
      name: 'section3',
      component: Section3,
    }
  ]
})