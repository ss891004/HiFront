<template>
  <div id="app">
      <form @submit.prevent="postData">
        <input v-model="fruit" type="text">
        <button>添加</button>
      </form>
      <ul>
        <li v-for="item,index of fruitList">
          {{item}}
          <button @click="del(index)">删除</button>
        </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return {
      fruit:"",
      fruitList:[]
    }
  },
  methods:{
    // 响应的数据是数组
    getFruitList(){
      axios.get("http://127.0.0.1:3000/fruits")
      .then((res) => {
        this.fruitList = res.data;
      })
    },
    // 响应的数据是布尔值
    postData(){
      axios.post("http://127.0.0.1:3000/fruits",{
        fruit:this.fruit
      })
      .then(() => {
        this.getFruitList();
      })
    },
    del(index){
      axios.delete(`http://127.0.0.1:3000/fruits/${index}`)
      .then(() => {
        this.getFruitList();
      })
    }
  },
  created(){
    this.getFruitList();
    
  }
}
</script>

