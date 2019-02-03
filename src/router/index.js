import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'
import Employee from '@/components/Employee'
import Department from '@/components/Department'

Vue.use(Router)


const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login,
      hidden: true
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      hidden: true
    },{
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      hidden: true
    },{
      path: '/employee',
      name: 'employee',
      component: Employee,
      hidden: true
    },{
      path: '/department',
      name: 'department',
      component: Department,
      hidden: true
    }
  ]
export default new Router({
  mode:'history',
  routes
  
})