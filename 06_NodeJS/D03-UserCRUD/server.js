const express=require('express')
const db=require('./db/connect')
const app=express()
const Mail=require('./utils/mail')
console.log(Mail)
// npm install body-parser
const bodypaser=require('body-parser')
app.use(bodypaser.urlencoded({ extended: false }))
app.use(bodypaser.json())

// 路由
const userRouter = require('./router/userRouter')

app.use('/user',userRouter)

/*
nodemon  自动更新代码
npm  install  nodemon -g
node server.js
nodemon server.js
*/ 

app.listen(3000,()=>{
  console.log('server start')
})