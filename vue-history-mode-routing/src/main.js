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
  {
    path: 'home',
    name: 'Home',
    component: HomeComponent    
  },
  {
    path: 'post',
    name: 'Post',
    component: PostComponent
  },
  {
    path: 'dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  }
];

const router = new VueRouter({ mode: 'history',
routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
