<template>
  <p>
    <router-link to="/">首页</router-link>---
    <router-link :to="{ name: 'ticket'}">彩票信息</router-link>---
    <router-link :to="{ name: 'login'}">登录</router-link>---
  </p>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
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
