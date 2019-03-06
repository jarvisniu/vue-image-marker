import Vue from 'vue'
import VueImageMarker from '../src/vue-image-marker.vue'
import App from './app.vue'

Vue.component('VImageMarker', VueImageMarker)
Vue.component('App', App)

new Vue({
  el: '#app',
  render: h => h('App')
})
