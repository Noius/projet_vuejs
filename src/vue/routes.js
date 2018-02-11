import VueRouter from 'vue-router'
import Liste from './liste.vue'
import Film from './film.vue'
import Newfilm from './newfilm.vue'
import Editfilm from './editfilm.vue'

const routes = [
  { path: '/', component: Liste },
  { path: '/movie', component: Film },
  { path: '/movie/new', component: Newfilm },
  { path: '/movie/edit', component: Editfilm }
]

export default new VueRouter({
  routes
})
