<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->

        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: { id: m.id, title: m.title },
          }"
        >
          {{ m.title }}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "xx1" },
        { id: "002", title: "xx2" },
        { id: "003", title: "xx3" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "xq",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "xq",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },

  beforeDestroy() {
    console.log("Message组件即将被销毁了");
  },
  mounted() {
    console.log("Message组件挂载完毕了", this);
  },
};
</script>

<style scoped>
</style>