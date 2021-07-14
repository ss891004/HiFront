<template>
  <button @click="handle">hahaha</button>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  methods: {
    handle() {
      // 跨域请求
      axios
        .get(
          "/ajax/movieOnInfoList?token=&optimus_uuid=B7C0C9B0DC9E11EABDF83B2B19B81E94EBA03A3B4D5A47A39FFC3F36CCA46F06&optimus_risk_level=71&optimus_code=10"
        )
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>

<style>
</style>
