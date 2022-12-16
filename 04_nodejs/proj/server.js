const express=require('express')
const db=require('./db/connect')
const path=require('path')
const app=express()
const Mail=require('./utils/mail')
console.log(Mail)
const bodypaser=require('body-parser')
const request =require('request')
app.use(bodypaser.urlencoded({ extended: false }))
app.use(bodypaser.json())
//通过cors 解决跨域
const cors=require('cors')
app.use(cors())

app.use('/public',express.static(path.join(__dirname,'./static')))
// 路由
const userRouter = require('./router/userRouter')
const fooodRouter= require('./router/foodRouter')
const  fileRouter= require('./router/fileRouter')
app.use('/user',userRouter)
app.use('/food',fooodRouter)
app.use('/file',fileRouter)

app.get('/cors',(req,res)=>{
	// 发送一个服务器请求
	console.log('cors.htmk 的ajax')
	request('http://www.baidu.com',(err,response,body)=>{
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