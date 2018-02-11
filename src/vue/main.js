import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import app from './app.vue' //fichier app.vue local
import router from './routes.js'
import {zestore} from './store.js'

Vue.use(Vuex)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  store: zestore,
  router,
  render: h => h(app)
})
