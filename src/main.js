import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import './common/css/reset.css'
import './common/js/rem.js'
import jquery from './common/js/jquery.js'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
