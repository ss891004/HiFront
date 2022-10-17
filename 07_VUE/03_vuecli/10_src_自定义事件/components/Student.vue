<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <!-- A-2. 事件绑定在哪个对象上，就有该对象触发事件 -->
    <button @click="sendStudentName">wxyz-给App父组件发送信息</button>
    <!-- B-2. 事件绑定在哪个对象上，就有该对象触发事件 -->
    <br />
    <button @click="sendStudentNameB">xyza-给App父组件发送信息</button>

    <!-- 事件解绑 -->
    <br />
    <button @click="unbind">解绑wxyz事件</button>
    <br />
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },

  methods: {
    sendStudentName() {
      //A-3. 触发Student组件实例身上的wxyz事件
      this.$emit("wxyz", this.name, 666, 888, 900);
    },
    sendStudentNameB() {
      //B-3. 触发Student组件实例身上的wxyz事件
      this.$emit("xyza", this.name, 777, 888, 900);
    },

    unbind() {
      this.$off("wxyz"); //解绑一个自定义事件
      // this.$off(['wxyz','xyza']) //解绑多个自定义事件
      // this.$off() //解绑所有的自定义事件
    },
    death() {
      this.$destroy(); //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效。
    },
  },
};
</script>
