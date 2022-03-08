<template>
  <div id="app">
    <div id="nav">
      <!-- a标签 href -->
      <router-link to="/">首页</router-link> |
      <router-link to="/blog">博客</router-link> | 
      <router-link to="/video">视频</router-link>  ||

      <span v-if="showUser">欢迎：{{username}} <button @click="logout">注销</button></span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:localStorage.getItem("usr"),
      showUser:localStorage.getItem("usr")
    }
  },
  watch:{
    '$route.path':function(){
      this.username = localStorage.getItem("usr")
      this.showUser = localStorage.getItem("usr")
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

