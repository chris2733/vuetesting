import Vue from 'vue'
import App from './App.vue'
import ServerStatus from './ServerStatus.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

Vue.component('myapp-serverstatus', ServerStatus);

new Vue({
  el: '#app',
  render: h => h(App)
})
