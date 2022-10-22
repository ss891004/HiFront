<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
      <router-link :to="{ path:'/home/message/detail',query:{id:m.id,title: m.title}}" > {{m.title}} </router-link>
    </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return {
        messageList:[
            {id:'001',title:'xx1'},
            {id:'002',title:'xx2'},
            {id:'003',title:'xx3'},
        ]
    }
  }
};
</script>

<style scoped>
</style>