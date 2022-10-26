<template>
  <div>
    <h2>名字: {{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>工作：{{ job.type }}</h2>
    <h2>工资:{{ job.salary }}</h2>
    <button @click="changeInfo">改名</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "V03",
  setup() {
    //数据
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端工程师",
      salary: "30K",
    });

    //方法
    function changeInfo() {
      // RefImpl{}
      console.log(name);
      // 只有通过value 的属性更改，才能触发vue的响应式的页面的更新
      //（这个value 有set get 的函数）
      name.value = "李四";  
      age.value = 48;
      console.log(job);
      //Proxy{}
      console.log(job.value);
      job.value.type = "UI设计师";
      job.value.salary = "60K";
    }

    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>


