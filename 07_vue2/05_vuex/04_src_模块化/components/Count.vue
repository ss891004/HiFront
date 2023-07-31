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
    ...mapMutations('countAbout',{ increment: "JIA" }),
    ...mapMutations('countAbout',["JIAN"]),

    ...mapActions('countAbout',{ incrementOdd: "jiaOdd" }),
    ...mapActions('countAbout',["jiaWait"]),
  },

  computed: {
    //=========================================
    ...mapState('countAbout', { sum: "sum" }),
    ...mapState('countAbout',["school", "subject"]),
    ...mapState('personAbout',["personList"]),
    //=========================================
    ...mapGetters('countAbout',{ bs3: "bs" }),
    ...mapGetters('countAbout',["bs2"]),
  },
  mounted() {

  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
