<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>

    <select v-model.number="a">
      <option value="1" selected>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="add2">当前和为奇数再加</button>
    <button @click="add3">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      sum: 0,
      a: 0,
    };
  },
  methods: {
    add() {
      console.log(this.sum);
      console.log(this.a);
      this.sum += this.a;
    },
    sub() {
      this.sum -= this.a;
    },
    add2() {
      if (this.sum % 2) {
        this.sum += this.a;
      }
    },
    add3() {
      setTimeout(() => {
        this.sum += this.a;
      }, 1000);
    },
  },
};
</script>