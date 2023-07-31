<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和*4-5: {{ bs3 }}</h1>
    <h1>当前求和*4-10: {{ bs2 }}</h1>
    <h1>我在{{ school }}，学习{{ subject }}</h1>
    <hr />
    <h1 style="color: red">用户的个数: {{ personList.length }}</h1>

    <select v-model.number="n">
      <option value="1" selected>1</option>
    </select>

    <button @click="increment(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    ...mapMutations({ increment: "JIA" }),
    ...mapMutations(["JIAN"]),

    ...mapActions({ incrementOdd: "jiaOdd" }),
    ...mapActions(["jiaWait"]),
  },

  computed: {
    //=========================================
    ...mapState({ sum: "sum" }),
    ...mapState(["school", "subject", "personList"]),
    //=========================================
    ...mapGetters({ bs3: "bs" }),
    ...mapGetters(["bs2"]),
  },
  mounted() {
    console.log("Count", this);
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
