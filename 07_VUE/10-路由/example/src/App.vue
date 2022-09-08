<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">博客</router-link> | 
      <router-link to="/video">视频</router-link> ||
      <span>欢迎：{{username}} <button @click="logout">注销</button></span>
    </div>
    <div class="conteiner">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:""
    }
  },
  watch:{
    '$route.path':function(){
      this.username = localStorage.getItem("username")
    }
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push("/login")
    }
  }
}
</script>
