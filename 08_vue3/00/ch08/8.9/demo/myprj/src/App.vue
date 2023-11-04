<template>
  <img alt="Vue logo" src="./assets/logo.png" />
    <p>
        <!--使用<router-link>组件定义导航，to属性：指定链接，即url路径 -->
        <router-link to="/">Go to Home</router-link>&nbsp;
        <router-link to="/news">Go to News</router-link>&nbsp;&nbsp;
        <router-link to="/about">Go to News</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 2.路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
</template>
<script>

 
export default {
  name: "App",
  components: {
  },
};
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
