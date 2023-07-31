<template >
  <div>
    <h2>id: {{ $route.query.id }}</h2>
    <h2>title: {{ $route.query.id }}</h2>
    <h2>props使用</h2>
    <h2>{{id}}</h2>
    <h2>{{title}}</h2>
    <h2>{{a}}</h2>
    <h2>{{b}}</h2>
  </div>
</template>
  
  <script>
export default {
  name: "Detail",
  props:['id','title','a','b'],
  beforeDestroy() {
    console.log("Detail组件即将被销毁了");
  },
  mounted() {
    console.log("Detail组件挂载完毕了", this);
  },
};
</script>
  
  <style scoped>
</style>