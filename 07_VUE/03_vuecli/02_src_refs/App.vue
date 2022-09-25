<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <h2 ref="h222"></h2>
    <Student ref="std"></Student>
    <button ref="btn" @click="showInfo">ref属性</button>
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
  methods: {
    //showInfo(){
    showInfo: function () {
      console.log(this);    
      console.log(this.$refs);
      console.log(this.$refs.std);
    },
  },
};
</script>
