import Router from 'vue-router'
import Vue from 'vue'


// compornent
import signinWork from '../components/signinWork.vue'
import homePage from '../components/homePage.vue'



Vue.use(Router)

export default new Router({
    mode: 'history', //追加
    routes: [
      {
        path: '/',
        name: 'signinWork',
        component: signinWork
      },
      {
        path: '/',
        name: 'homePage',
        component: homePage
      }
    ]
  })