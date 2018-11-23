import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vue.Store({
    state: {
        coins: []
    },
    actions: {
        loadCoints({commit}){
            axios
            .get('http://localhost:4000/results')
            .then(r => r.data)
            .then(coins => {
                console.log(coins)
            })
        }
    },
    mutations: {
        SET_COINTS (state,coins) {
            state.coins = coins
        }
    }
})