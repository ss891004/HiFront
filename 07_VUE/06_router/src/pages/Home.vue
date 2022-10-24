<template >
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            :to="{name:'abcd'}"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >query参数</router-link
          >
        </li>

        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message2"
            >params参数</router-link
          >
        </li>
      </ul>
		<!-- 缓存多个路由组件 -->
			<!-- <keep-alive :include="['News','Message']"> -->
				
			<!-- 缓存一个路由组件  New 代表引入组件名 -->
			<keep-alive include="New">
				<router-view></router-view>
			</keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log("Home组件即将被销毁了");
  },
  mounted() {
    console.log("Home组件挂载完毕了", this);
  },
};
</script>

<style scoped>
</style>