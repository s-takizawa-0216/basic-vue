import Vue from 'vue'
import Router from 'vue-router'

import Section2 from './components/Section2'
import Fruits from './components/Section3/Fruits'
import Header from './views/Section3/Header'
import LoginView from './views/Section3/LoginView'

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
      path: '/section3-1',
      name: 'section3-1',
      component: Fruits,
    },
    {
      path: '/section3-2',
      name: 'section3-2',
      component: Header,
    },
    {
      path: '/section3-3',
      name: 'section3-3',
      component: LoginView,
    }
  ]
})