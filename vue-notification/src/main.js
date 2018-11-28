import Vue from 'vue'
import App from './App.vue'

import VueAxios from 'vue-axios'
import Axios from 'axios'

Vue.use(VueAxios, Axios)

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
