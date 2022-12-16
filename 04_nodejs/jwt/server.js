const express=require('express')
const db=require('./db/connect')
const  cookieParse=require('cookie-parser')
const  session = require('express-session')
const path=require('path')
const app=express()
const Mail=require('./utils/mail')
console.log(Mail)
const  JWT=require('./utils/jwt')
const bodypaser=require('body-parser')
const request =require('request')
app.use(bodypaser.urlencoded({ extended: false }))
app.use(bodypaser.json())
//通过cors 解决跨域
// const cors=require('cors')
// app.use(cors())

// seesion 整体配置
app.use(session({
	secret: 'sjfsdkjflajf', //为了安全性的考虑设置secret属性
	cookie: {maxAge: 60 * 1000*24*7  }, //设置过期时间
	resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
	saveUninitialized: false, //无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
}));

app.use('/public',express.static(path.join(__dirname,'./static')))
// 路由
const userRouter = require('./router/userRouter')
const fooodRouter= require('./router/foodRouter')
const  fileRouter= require('./router/fileRouter')
app.use('/user',userRouter)
// app.use('/food',(req,res,next)=>{
// 	console.log(req.body)
// 	console.log(req.session)
// 	if(req.session.login){
// 		next()
// 	}else{
// 		res.send({err:-999,msg:'请先登录'})
// 	}

// },fooodRouter)
// jwt 的验证逻辑
app.use('/food',(req,res,next)=>{
	console.log(req.body)
	let {token}=req.body
	JWT.checkToken(token)
	.then((data)=>{
			next()
	})
	.catch((err)=>{
		res.send({err:-998,msg:'token 非法'})
	})
	// if(req.session.login){
	// 	next()
	// }else{
	// 	res.send({err:-999,msg:'请先登录'})
	// }

},fooodRouter)

app.use('/file',fileRouter)

app.get('/cors',(req,res)=>{
	// 发送一个服务器请求
	console.log('cors.htmk 的ajax')
	request('http://47.95.207.1:3000/fcj/recommend/banner',(err,response,body)=>{
		// console.log(err)
		// console.log(response)
		// console.log(body)
		if(!err){
			res.send(body)
		}
	})
	
})

app.listen(3000,()=>{
  console.log('server start')
})