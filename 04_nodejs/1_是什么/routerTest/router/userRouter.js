var express = require('express')
var router = express.Router() //获取路由的实例


router.get('/add',(req,res)=>{
  res.send('user add ')
})


router.get('/del',(req,res)=>{
  res.send('del add ')
})


module.exports = router