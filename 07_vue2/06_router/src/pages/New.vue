<template >
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>

    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>


<script>
export default {
  name: "New",
  data() {
    return {
      opacity: 1,
    };
  },
  beforeDestroy() {
    console.log("New组件即将被销毁了");
  },
  mounted() {
    console.log("New组件挂载完毕了", this);
  },

  // 新的2个生命周期函数
  activated() {
    console.log("News组件被激活了");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("News组件失活了");
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
</style>