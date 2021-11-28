<template>
  <div>
    <h1>Hello,{{ msg }}!(bBar)</h1>
  </div>
</template>

<script>
export default 
{
  name: 'bBar', 
  //  不要使用下划线命名 b_Bar,因为要在标签中使用
  props:
  {
    msg:String
  }
}
</script>

<style>
</style>
