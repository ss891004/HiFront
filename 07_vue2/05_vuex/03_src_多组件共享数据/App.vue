<template>
  <div>
    <Count />
    <br><hr>
    <Person/>
  </div>
</template>

<script>
import Count from "./components/Count";
import Person from './components/Person.vue';
export default {
  name: "App",
  components: { Count ,Person},
  mounted() {
    console.log("App", this);
  },
};
</script>
