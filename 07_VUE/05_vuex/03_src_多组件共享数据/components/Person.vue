<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="add">提交</button>
    <ol>
      <li v-for="p in c_per_list" :key="p.id">{{ p.name }}</li>
    </ol>
    <h1 style="color: blue">
      <h1>当前求和为：{{ c_sum }}</h1>
    </h1>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      n: 1, //用户选择的数字
      name: "",
    };
  },
  methods: {
    add() {
      const p = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSON", p);
    },
  },

  computed: {
    c_per_list() {
      return this.$store.state.personList;
    },
    c_sum() {
      return this.$store.state.sum;
    },
  },

  mounted() {},
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
