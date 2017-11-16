import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/reset.css'
import './common/js/rem'
import $ from 'jquery'

const vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})