<template>
  <ul class="todo-main">
    <Todo v-for="todoObj in todoX" :key="todoObj.id" :todo="todoObj" />
  </ul>
</template>
  
  <script>
import Todo from "./Todo";
export default {
  name: "Todos",
  components: { Todo },
  props: ["todoX"],
};
</script>

  <style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>