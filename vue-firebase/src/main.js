import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import App from './App.vue'

import AddItem from './components/AddItem.vue'
import EditItem from './components/EditItem.vue'
import ListItem from './components/ListItem.vue'
import Home from './components/Home.vue'


Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Add',
    path: '/add',
    component: AddItem
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: EditItem
  },
  {
    name: 'List',
    path: '/index',
    component: ListItem
  }
];

const router = new VueRouter({mode: 'history', routes: routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
