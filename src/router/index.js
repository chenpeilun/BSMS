/*
* @Author: CPL
* @Date:   2019-03-09 22:44:01
* @Last Modified by:   Chen peilun
* @Last Modified time: 2019-03-09 22:44:35
*/
import Vue from 'vue'
import Router from 'vue-router'
import Login from './../views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
