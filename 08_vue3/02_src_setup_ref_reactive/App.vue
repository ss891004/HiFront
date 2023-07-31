<template>
  <div>
    <hr />
    <div>02——setup的使用</div>
    <V02 msg="Welcome to Your Vue.js App" />
    <hr />
    <div>03-ref函数</div>
    <V03/>
    <div>04-reactive函数</div>
    <V04/>
  </div>
</template>

<script>
import V02 from "./components/V02.vue";
import V03 from "./components/V03.vue";
import V04 from "./components/V04.vue";

export default {
  name: "App",
  components: {
    V02,
    V03,
    V04
  },
};
</script>
