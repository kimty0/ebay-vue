<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
	<vue/>
  </div>
</template>

<script>
import vue from './components/vue.vue'
export default {
  name: 'app',
  components: {
	vue
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
