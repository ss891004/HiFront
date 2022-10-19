<template>
  <div id="root">
    <div class="todo-container">
      <!-- 1. 设置一个自定义事件 -->
      <Header @H_add="addTodo"></Header>
      <Todos :todoX="todos"></Todos>
      <Footer
        :todos="todos"
        @checkAllTodo="checkAllTodo"
        @clearAllTodo="clearAllTodo"
      ></Footer>
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import pubsub from "pubsub-js";

export default {
  name: "App",
  components: {
    Todos,
    Header,
    Footer,
  },
  methods: {
    //2. 设置一个回调函数
    //4. 若触发了本事件，就进行回调
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },

    //勾选or取消勾选一个todo
    checkTodo(_,id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },

    //删除一个todo _ 是占位的
    deleteTodo(_,id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    //全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },

    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },

  data() {
    return {
      // 数据在哪里，操作数据的方法就在哪里
      todos: JSON.parse(localStorage.getItem("ls_todos")) || [],
    };
  },

  mounted() {
    // 接收数据的组件，使用事件总线绑定事件
    //this.$bus.$on("checkTodo", this.checkTodo);
    this.pid1 = pubsub.subscribe("checkTodo", this.checkTodo); //订阅消息
    //this.$bus.$on("deleteTodo", this.deleteTodo);
    this.pid2 = pubsub.subscribe("deleteTodo", this.deleteTodo); //订阅消息
  },
  beforeDestroy() {
    pubSub.unsubscribe(pid1);
    pubSub.unsubscribe(pid2);
  },

  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("ls_todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>