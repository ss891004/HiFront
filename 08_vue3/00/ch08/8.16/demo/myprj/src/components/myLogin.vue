<template>
    <div>
        <h3>{{ info }}</h3>
        <table>
            <caption>用户登录</caption>
            <tbody>
                <tr>
                    <td><label>用户名：</label></td>
                    <td><input type="text" v-model.trim="username"></td>
                </tr>
                <tr>
                    <td><label>口令：</label></td>
                    <td><input type="password" v-model.trim="password"></td>
                </tr>
                <tr>
                    <td cols="2">
                        <input type="submit" value="登录" @click.prevent="login"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username: "",
            password: "",
            info: ""   //用于保存登录失败后的提示信息
        }
    },
    methods: {
        login() {
            //实际场景中，这里应该通过Ajax向服务端发起请求来验证
            if("Jack" == this.username && "888" == this.password){
                //sessionStorage中存储的都是字符串值，因此这里实际存储的将是字符串"true"
                sessionStorage.setItem("isAuth", true);
                this.info = "";
                //如果存在查询参数
                if(this.$route.query.redirect){   
                    let redirect = this.$route.query.redirect;
                    //跳转至进入登录页前的路由
                    this.$router.replace(redirect); 
                }else{
                    //否则跳转至首页
                    this.$router.replace('/');    
                }
            }
            else  if("Jack" != this.username)
            {
                 sessionStorage.setItem("isAuth", false);
                this.username = "";
                this.password = "";
                this.info = "用户名错误";

            }
            else
            {
                sessionStorage.setItem("isAuth", false);
                this.username = "";
                this.password = "";
                this.info = "口令错误";
            }
                
        }
    }
}
</script>
