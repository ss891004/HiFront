
	const app = Vue.createApp({})
 
    //= { template: '<div>Home</div>' }
    const myReg = { template: `<div>
    <p>
        <input  type="text" v-model="name" placeholder="用户名">  	
        <input  type="text" v-model="email" placeholder="邮箱">
   </p>

   <p>  <input type="text" placeholder="手机号码" ref="userphone"></p>
   <p>
    <input   type="password" v-model="pwd" placeholder="密码" id="test">
    <input   type="password" v-model="againpwd" placeholder="重复密码" id="test1">
  </p> 
     <button @click="register()">注册</button>
</div>
`,
		data() {
                return {
					name:"",
					email:"",
					phone:"",
					pwd:"",
            		againpwd:"",
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
 
				checkemail(){
					var regEmail=/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
					if(this.email==''){
						alert("邮箱格式不能为空");
						return -1;
					}else if(!regEmail.test(this.email)){
						alert("邮箱格式不正确");
						return -2;
						}
						return 0;
					},
				checkphone(ph){
					if(ph.length!=11){
						alert("手机长度不对");
        				return -1;
					}

					if (isNaN(ph)) {
						alert("手机号必须全部是数字。");
        				return -2;
    				}
					return 0;
					},
				checkpwd(){
					if(this.pwd==""){ alert("密码不能为空");return -1;}
					else if(this.pwd !=this.againpwd){
						alert("输入密码不一致");
					 	return -2;
						}
					return 0;
         			},

				register(){
					var r = this.checkname();
					if(r) 	return;
					r = this.checkemail();
					if(r) 	return;
					this.phone=this.$refs.userphone.value;
					r= this.checkphone(this.phone);
					if(r) 	return;
					r = this.checkpwd();
					if(r) 	return;
					alert("注册成功");
            }
            }
			
	 }
 
    
    const routes = [
    { path: '/', component: Login },
    { path: '/reg', component: myReg },
    ]

    
    const router = VueRouter.createRouter({
 
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
    })

 
    app.use(router)
    app.mount('#box')
 