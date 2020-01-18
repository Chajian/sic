<template>
  <div id="app">
	<router-link to="/login">asdasda</router-link>
	<router-view></router-view>
  </div>
</template>

<script>
// import index from './components/index.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
	// index
    //HelloWorld
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
  margin-top: 60px;
}
</style>
