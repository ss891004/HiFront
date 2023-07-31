<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
		<button @click="n++">点我n+1</button>
		<hr />
		<input type="text" v-fbind:value="n">
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      n:1
    };
  },
};
</script>

<style scoped>

</style>