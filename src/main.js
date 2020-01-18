import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
Vue.config.productionTip = false
Vue.use(Router)
import login from './components/login.vue'
import hello from './components/HelloWorld.vue'
import index from './components/index.vue'
import register from './components/register.vue'
import usercenter from './components/UserCenter.vue'
import newactivity from './components/newActivity.vue'
var routerObj = new Router({
	routes:[
	{
		path:'/login',
		component:login
	},
	{
		path: '/hello',
		component: hello
	},
	{
		path: '/',
		component: index
	},
	{
		path: '/register',
		component: register
	},
	{
		path: '/userCenter',
		component: usercenter
	},
	{
		path: '/newactivity',
		component: newactivity
	}
	]
})

new Vue({
  render: h => h(App),
  router: routerObj,
  data:{}
}).$mount('#app')
