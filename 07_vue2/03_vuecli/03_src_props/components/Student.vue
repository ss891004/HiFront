<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age+1 }}</h2>
    <h2>学生年龄：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg:"欢迎您，学习vue",

    };
  },
  props:['name','sex','age']
};
</script>
