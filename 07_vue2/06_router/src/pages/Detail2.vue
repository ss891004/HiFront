<template >
  <div>
    <h2>id: {{ $route.params.id }}</h2>
    <h2>title: {{ $route.params.id }}</h2>
  </div>
</template>
  
  <script>
export default {
  name: "Detail",
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