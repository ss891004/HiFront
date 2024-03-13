<template>
  
  <MyWeek/>
  <MySearch/>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="hi,boy!Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyWeek from './components/aaa.vue'
import MySearch from './components/search.vue'

 

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyWeek,
    MySearch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
