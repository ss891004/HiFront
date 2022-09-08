<template>
    <div>
        <form @submit.prevent="doLogin">
            <input type="text" v-model="username">
            <input type="text">
            <button>登录</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:""
        }
    },
    methods:{
        doLogin(){
            console.log(this.username)
            // 本地存储
            localStorage.setItem("usr",this.username);
            this.$router.push("/");

            // localStorage.getItem("usr")
        }
    }
}
</script>