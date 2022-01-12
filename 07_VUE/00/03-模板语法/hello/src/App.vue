<template>
  <div>
    <Header></Header>
    <Menu-list></Menu-list>
    <!-- v-if：是不渲染dom -->
    <h1 v-if="false">hello world</h1>

    <!-- 插值表达式 -->
    <h2 v-text="message"></h2>
    <h2>aabbbba{{ message }} bbb</h2>

    <div v-html="url"></div>
    <!-- v-show：渲染dom，然后将元素设置为display:none -->
    <h1 v-show="false">hello world</h1>

    <p v-if="isLogin">欢迎：小明</p>
    <p v-if="!isLogin"><a href="">请登录</a></p>

    <h1 v-if="type === 'L'">L</h1>
    <h1 v-else-if="type === 'XL'">XL</h1>
    <h1 v-else-if="type === 'XXL'">XXL</h1>
    <h1 v-else>XXXL</h1>

    <ul>
      <li v-for="(item, i) in items" :key="i">值：{{ item }}，索引：{{ i }}</li>
    </ul>

    <ul>
      <li v-for="(fruit, index) of fruits" :key="index">
        <p>水果名称：{{ fruit }}</p>
        <p>水果序号：{{ index }}</p>
      </li>
    </ul>
    <table>
      <thead>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
      </thead>
      <tbody>
        <tr v-for="(v, i) of students" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ v.name }}</td>
          <td>{{ v.age }}</td>
        </tr>
      </tbody>
    </table>

        <span v-bind:title='message'>   <!-- 绑定标签用v-bind 非标签则{{xxxx}} -->
            鼠标停在这儿看看【动态绑定】的提示信息！
            <!-- vm.message = 'yes!!!' 则会改变title提示的信息-->
        </span>
        <!-- 双向绑定 -->
        <input type="text" v-model="message">


  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MenuList from "./components/MenuList.vue";
export default {
  // 注册组件
  components: { Header, MenuList },
  data() {
    return {
      isLogin: false,
      message: "hhhaaaaa",
      type: "LL",
      url: "<h1>v-html与v-show演示</h1>",
      fruits: ["香蕉", "苹果", "鸭梨"],
      items: ["大?", "加大?", "加加大"],
      students: [
        { name: "小明", age: 1 },
        { name: "小红", age: 2 },
        { name: "小亮", age: 3 },
      ],
    };
  },
};
</script>

