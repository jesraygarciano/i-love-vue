import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomeComponent from './components/HomeComponent.vue'
import DashboardComponent from './components/DashboardComponent.vue'
import PostComponent from './components/PostComponent.vue'

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
const routes = [
  {}
];

const router = new VueRouter({ mode: 'history',
routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
