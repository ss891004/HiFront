<template>
	<ul class="todo-main">
		<Todo 
			v-for="todoObj in todoX"
			:key="todoObj.id" 
			:todo="todoObj" 
      :checkTodo="checkTodoX"
			:deleteTodo="deleteTodoX"
		/>
	</ul>

  </template>
  
  <script>
import Todo from './Todo'
  export default {
    name: "Todos",
    components:{Todo},
		//声明接收App传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件Todo用的
		props:['todoX','checkTodoX','deleteTodoX']
    
  };
  </script>

  <<style scoped>
  /*main*/
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