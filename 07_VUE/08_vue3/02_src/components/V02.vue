<template>
  <div>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>a的值是：{{ a }}</h2>
    <button @click="sayHello">说话(Vue3所配置的——sayHello)</button>
    <button @click="sayWelcome">说话(Vue2所配置的——sayWelcome)</button>
    <button @click="test1">
      测试一下在Vue2的配置中去读取Vue3中的数据、方法
    </button>
    <button @click="test2">
      测试一下在Vue3的setup配置中去读取Vue2中的数据、方法
    </button>
  </div>
</template>

<script>
export default {
  name: "V02",

  data() {
    return {
      a: 11111,
      sex: "sxxxx",
    };
  },

  methods: {
    sayWelcome() {
      alert(`${this.a}..........`);
    },

    test1() {
      console.log(this.name);
      console.log(this.a);
      console.log(this.sayHello);
    },
  },

  // vue2 和 vue3 不能混用，vue2 可以读取vue3中的属性和函数。
  // vue3 不能读取vue2的属性和函数。

  setup() {
    let name = "ssssss";
    let age = 33;
    let a = 200000;

    function sayHello() {
      alert(`...${name}, ...${age}`);
    }

    function test2() {
      console.log(name);
      console.log(a);
      console.log(this.sayWelcome);
    }

    return {
      name,
      age,
      sayHello,
      test2,
    };
  },
};
</script>


