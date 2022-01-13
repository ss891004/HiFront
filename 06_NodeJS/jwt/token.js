const jwt=require('jsonwebtoken')

let screat='sflsdjfl;ajflsjflasjflasjfoas' //产生token的私钥
let payload={ 
  us:123,
  ps:456
}
//传递的数据
//产生一个token
// let token=jwt.sign(payload,screat) //hs256加密 数据 载荷  screat
let token='hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cyI6MTIzLCJwcyI6NDU2LCJpYXQiOjE1NTg0MjE4OTB9.8TEQ_dMFzckiMVE--7XP-jjmnl7QE68qz0bptEMn5vs'
// console.log(token)
//验证token的合法性
jwt.verify(token,screat,(err,data)=>{
console.log(err)
console.log(data)
})