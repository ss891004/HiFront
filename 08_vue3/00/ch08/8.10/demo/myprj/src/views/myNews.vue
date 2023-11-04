<template>
  <div>
    <h1>News Page</h1>
    <p>
        <!--使用<router-link>组件定义导航，to属性：指定链接，即url路径 -->
      <router-link to="/myItem/100">news100</router-link><br>
      <router-link to="/myItem/200">news200</router-link><br>
      <router-link to="/myItem/300">news300</router-link>
    </p>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
     
<script>
export default {};
</script>
