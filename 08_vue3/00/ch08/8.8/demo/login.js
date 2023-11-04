// 1. 定义（路由）组件。
const Login  = {    template: `   
<div>
<p>
<input  type="text" v-model="name" placeholder="username">  	
<input   type="password" v-model="pwd" placeholder="password" id="test">
</p>

<button @click=" onlogin()">login</button>
</div>`,
// data必须是一个函数
data() {
    return {
        name:"",
        pwd:"",
    }
},
methods: {
    checkname(){
    if(this.name==""){
        alert("用户名不能为空");
        return -1;
        }
        return 0;
    },
  
    checkpwd(){
        if(this.pwd==""){ alert("密码不能为空");return -1;}
        return 0;
    },

    onlogin(){
        var r = this.checkname();
        if(r) 	return;
        r = this.checkpwd();
        if(r) 	return;
        alert("login ok");
    }
}
}
 
