// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';

import Welcome from './components/Welcome';
import Employee from './components/Employee';
import Department from './components/Department';
import Login from './components/Login';
import Home from './components/Home';
Vue.config.productionTip = false

import router from './router'
/* eslint-disable no-new 

const routes = [{
	path:"/",
	redirect:"/Login"
},{
	path:"/Welcome",
	name: 'Welcome',
	component: Welcome
},{
	path:"/Employee",
	name: 'Employee',
	component: Employee
},{
	path:"/Department",
	name: 'Department',
	component: Department
},{
	path:"/Login",
	name: 'Login',
	component: Login
},{
	path:"/home",
	name: 'Home',
	component: Home
}];
*/

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
