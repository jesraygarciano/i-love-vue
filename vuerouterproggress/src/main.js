import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld.vue';
import AboutComponent from './components/AboutComponent.vue';
import ContactComponent from './components/ContactComponent.vue';

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
        name: 'Home',
        path: '/',
        component: HelloWorld
  },
  {
      name: 'About',
      path: '/about',
      component: AboutComponent
  },
  {
      name: 'Contact',
      path: '/contact',
      component: ContactComponent
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')