<template>
  <div>
    <div>$store.state 与 $store.getters</div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h1>当前求和*4-5: {{ $store.getters.bs3 }}</h1>
    
	<hr />
    <div> mapState与 mapGetters</div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和*4-5: {{ bs3 }}</h1>
    <h1>当前求和*4-10: {{ bs2 }}</h1>
    <h1>我在{{ school }}，学习{{ subject }}</h1>
    <hr />

    <select v-model.number="n">
      <option value="1" selected>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

	<div>mapActions 与 mapMutations</div>
    <button @click="increment(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions,mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    // increment(n) {
    //   this.$store.commit("JIA", n);
    // },
	//=========================================
    // decrement(n) {
    //   this.$store.commit("JIAN", n);
    // },

	...mapMutations({increment:'JIA'}),
	...mapMutations(['JIAN']),


	//=========================================
    // incrementOdd(n) {
    //   this.$store.dispatch("jiaOdd", n);
    // },

    ...mapActions({ incrementOdd: "jiaOdd"}),
	...mapActions(['jiaWait']),

    // incrementWait(n) {
    //   this.$store.dispatch("jiaWait", n);
    // },

    //=========================================
  },

  
  computed: {
    //=========================================
    ...mapState({ sum: "sum" }),
    ...mapState(["school", "subject"]),
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
