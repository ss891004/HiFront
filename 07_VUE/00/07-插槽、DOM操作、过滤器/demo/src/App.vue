<template>
    <div id="app">
        <h1>{{date | dateFormate}}</h1>
        <h1>{{date1 | dateFormate}}</h1>
    </div>
</template>

<script>
export default {
    filters:{
        dateFormate(value){
            let date = new Date(value);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let d = date.getDate();
            return `${year}年${month}月${d}日`
        }
    },
    data(){
        return {
            date:"2020-1-1",
            date1:"2022-6-5"
        }
    }
};
</script>

<style>

</style>


