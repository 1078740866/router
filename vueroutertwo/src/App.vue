<template>
  <div id="app">
    <signinWork></signinWork>
    <homePage></homePage>
  </div>
</template>

<script>
import signinWork from './components/signinWork.vue'
import HomePage from './components/homePage.vue'

export default {
  name: 'App',
  components: {
    signinWork,
    HomePage
}
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  padding: 6em 0 4em;
  background: url("../images/header.jpg") no-repeat fixed center bottom / cover;
  background-size: 100% 100%;
  position: fixed;
  text-align: center;
  color: rgb(193, 184, 154);
}
</style>
