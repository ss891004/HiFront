const express =require('express')
const app=express()
// express 实例化

// 最简单的api 接口
//回调函数
app.get('/user/login',(req,res)=>{
    console.log('你好 ')
    res.send({err:0,msg:'regist ok222'})
})

app.listen(3001,()=>{
  // 监听3000 端口 开启服务器
  console.log('server start')
})

//协议 http

// http://localhost:3000/user/login