const  express=require('express')

const app=express()

app.get('/test1',(req,res,next)=>{
  console.log('fun1')
  //next()
},
(req,res)=>{
  console.log('fun2')
  res.send('test1')
})
// app.get('/pathname',fun,fun,fun,fun,fun....)


app.listen(3000,()=>{
  console.log('server start')
})