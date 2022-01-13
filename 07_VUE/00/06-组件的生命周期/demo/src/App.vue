<template>
  <div id="app">
    <h1>水果列表</h1>
    <p v-if="loading">loading...</p>
    <ul v-if="!loading">
      <li v-for="(item,index) of fruitList" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      fruitList:[],
      loading:true
    }
  },
  created(){
    this.getData();
  },
  methods:{
    getData(){
      // 通过计时器，模拟一个ajax获取数据的方法
      setTimeout(()=>{
        this.fruitList = ["香蕉","苹果","鸭梨"];
        this.loading = false;
      },2000)
    }
  }
}
</script>


