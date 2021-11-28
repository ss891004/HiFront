<template>
  <div>
    <h1 class="sbar">Hello,{{ msg }}!(sBar)</h1>
  </div>
</template>

<script>
export default 
{
  name: 'sBar', 
  //  不要使用下划线命名 s_Bar,因为要在标签中使用
  props:
  {
    msg:String
  }
}
</script>

<style scoped lang='less'>
// .sbar
// {
//     background: bisque;
// }
h1{background: orange;}
</style>
