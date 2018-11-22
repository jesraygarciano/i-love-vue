import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
const routes = [];

const router = new VueRouter({ mode: 'history',
routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
