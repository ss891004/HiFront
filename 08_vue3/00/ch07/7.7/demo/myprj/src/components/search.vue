<template>
   <input type="search" v-model="keywd">
   <button @click="funcSearch">search</button>
</template>

<script>
export default {
  name: 'compSearch',
  data(){
    return{
        keywd:''
    }
  },
  methods:{
      funcSearch()
      {
          alert("search over");
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
