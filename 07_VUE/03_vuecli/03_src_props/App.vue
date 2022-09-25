<template>
  <div>
    <Student :age="18" sex="30" name="张三"/>
    <Student :age="20" sex="man" name="李四"/>
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
  methods: {
    
  },
};
</script>
