<template>
  <div>
    <h2>工作：{{ job.type }}</h2>
    <h2>工资:{{ job.salary }}</h2>
    <button @click="changeInfo">改名</button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "V04",
  setup() {
    //数据
    let job = reactive({
      type: "前端工程师",
      salary: "30K",
    });

    //方法
    function changeInfo() {
        
        //Proxy{}
      console.log(job);
      
      job.type = "UI设计师";
      job.salary = "60K";
    }
    return{
        job,changeInfo
    }
  },
};
</script>