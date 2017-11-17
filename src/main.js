import Vue from 'vue'
// import AMap from 'AMap';
import App from './App'
import router from './router'
import './common/css/reset.css'
import './common/js/rem'
import './common/js/jquery'

const vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})