<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="add">提交</button>
    <button @click="addPersonServer">添加一个人，名字随机</button>
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
      this.$store.commit("personAbout/ADD_PERSON", p);
      this.name=""
    },
    addPersonServer(){

      this.$store.dispatch("personAbout/addPersonServer");

    }
  },

  computed: {
    c_per_list() {
      return this.$store.state.personAbout.personList;
    },
    c_sum() {
      return this.$store.state.countAbout.sum;
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
