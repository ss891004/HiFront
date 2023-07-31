<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
				<!-- 跳转路由并携带params参数，to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

				<!-- 跳转路由并携带params参数，to的对象写法 -->
        <router-link
          :to="{
            name: 'xiangqing2',
            params: { id: m.id, title: m.title },
          }"
        >
          {{ m.title }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message2",
  data() {
    return {
      messageList: [
        { id: "101", title: "yy1" },
        { id: "102", title: "yy2" },
        { id: "103", title: "yy3" },
      ],
    };
  },
  beforeDestroy() {
    console.log("Message2组件即将被销毁了");
  },
  mounted() {
    console.log("Message2组件挂载完毕了", this);
  },
};
</script>

<style scoped>
</style>