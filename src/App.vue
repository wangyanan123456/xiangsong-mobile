<template>
  <div id="app">
    <router-view></router-view>
    <Foot></Foot>
    <!-- <Try></Try> -->
  </div>
</template>

<script>
import Foot from './components/footer/Footer.vue'
// import Try from './components/try/try.vue'
export default {
  components: {
    Foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
