const  express=require('express')

const app=express()

//自定义中间件， 拦截器
app.use('/',(req,res,next)=>{
  console.log('中间件')
  let {token} =req.query
  if(token){
    next()
  }else{
    res.send('缺少token')
  }
  // next() //是否继续往下执行

})

//等价于下面语句
//app.use((req,res,next)=>{})


app.get('/test1',(req,res)=>{
  console.log('test1')
  // let {token}=req.query
  // if(token){
  //   res.send('ok')
  // }else{
  //   res.send('no ok')

  // }
  res.send('test1')
})

app.get('/test2',(req,res)=>{
  console.log('test2')
  // let {token}=req.query
  // if(token){
  //   res.send('ok')
  // }else{
  //   res.send('no ok')
  // }
  res.send('test2')
})


app.listen(3000,()=>{
  console.log('server start')
})