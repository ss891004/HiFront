const express =require('express')
const app=express()
// express 实例化
const bodypaser=require('body-parser')

// app.use  使用中间件（插件）
// 解析表单数据  x-www-form-urlencode
app.use(bodypaser.urlencoded({ extended: false }))
app.use(bodypaser.json())

//解析json 数据
// 最简单的api 接口
app.get('/user/login',(req,res)=>{
    // 接受get 参数  req.query 
    console.log(req.query)
    let  {us,ps}=req.query
    // 处理数据
    if(us==='wangyi'&&ps==456){
      res.send({err:0,msg:'login ok'})
    }else{
      res.send({err:-1,msg:'us pass no ok'})
    }
   
})

app.post('/user/reg',(req,res)=>{
  // 接受post 数据 消息体 请求体 req.body
  let {us,ps}=req.body

  console.log(req.body)
  // express 不能直接解析消息体
  // 通过第三方的插件实现解析
  if(us==123&&ps==123){
    res.send({err:0,msg:'ok'})
  }else{
    res.send({err:-1,msg:'nook'})
  }
  
})

app.listen(3000,()=>{
  // 监听3000 端口 开启服务器
  console.log('server start')
})


/*
api  接口的构成要素
ip
port
pathname  语义化
method get  post
接受用户传递数据 数据格式是由后端确定的
*/