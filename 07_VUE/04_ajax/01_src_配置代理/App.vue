<template>
  <div>
    <button @click="getPublic1">获取public文件夹中页面信息</button><br>
    <button @click="getPublic2">获取public文件夹中图片</button> <br>
    <button @click="getStudent">获取学生信息</button><br>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getPublic1() {
      // 当 npm run serve 前端项目运行起来后， public 文件夹就是整个运行的目录
      // local 和 Network 的区别？？？
      // 所有的请求都从public 先寻找
      axios.get("http://192.168.1.112:8080/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },


    getPublic2() {
      axios.get("http://192.168.1.112:8080/logo.png").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },

    getStudent() {
      axios.get("http://192.168.1.112:8080/api/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>
