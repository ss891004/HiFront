<template>
  <div id="app">
    <!-- --------------独立测试区1-------------- -->
    <bBar msg="Vue-CLI"></bBar>
    <sBar msg="Vuex"></sBar>

    <!-- --------------独立测试区2-------------- -->
    <!-- <aBar>
      <button @click="bShow=!bShow">aBar的aButton控制【bBar显示/隐藏】</button>
    </aBar>
    <bBar v-show="bShow" msg="Vue-CLI"></bBar> -->

  </div>
</template>

<script>
import aBar from './components/abar.vue';
import bBar from './components/bbar.vue';
import sBar from './components/sbar.vue';
import Vue from 'vue';

// 全局组件
Vue.component(  // 这里不给换行后再括号
  'sBar',
  sBar  
);

export default 
{
  name: 'App',
  data() 
  {
    return { // 这里不给换行后再大括号
      bShow:true
    }
  },
  components: // 局部组件，即子组件
  {
    aBar,
    bBar,
    // bBar:
    // {
    //   template:`xxxxx`
    // }
  }
}
</script>

<style>
</style>
