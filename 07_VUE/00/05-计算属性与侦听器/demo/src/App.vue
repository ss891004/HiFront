<template>
  <div id="app">
    <h1>计算属性与侦听器</h1>
    <p>单价：{{price}}</p>
    <p>
      <button @click="sub">-</button>
      {{quatity}}
      <button @click="add">+</button>

    </p>
    <p>折扣：{{discount}}</p>
    <p>总价：{{totalPrice}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      price:99,
      quatity:0,
      discount:0.5,
      totalPrice:0
    }
  },
  computed:{
    totalPrice(){
      return this.price * this.quatity * this.discount;
    }
  },
  // watch:{
  //   quatity(val){
  //     this.totalPrice = this.price * val * this.discount;
  //   }
  // },
  methods:{
    sub(){
      this.quatity--
    },
    add(){
      this.quatity++
    }
  }
}
</script>

