//静态资源

const  express=require('express')
const  path=require('path')
const app=express()

//绝对路径
// console.log(__dirname)
// console.log(path.join(__dirname,'./hehe'))
// app.use(express.static(path.join(__dirname,'./hehe')))
// 域名：3000 直接指向规定的静态目录
app.use('/public',express.static(path.join(__dirname,'./hehe')))
app.listen(3000,()=>{
  console.log('server start')
})