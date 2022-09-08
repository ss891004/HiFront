<template>
    <div>
        <form @submit.prevent="doLogin">
            <input v-model="username" type="text" placeholder="用户名">
            <input type="text" placeholder="密码">
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
            localStorage.setItem("username",this.username);
            this.$router.push("/")
        }
    }
}
</script>