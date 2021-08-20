const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8080 },()=>{
    console.log('socket start')
})
// 创建服务器
// 连接监听 clinet表示已经连接的客户端对象有多个

let clinets=[] //保存所有客户端连接
ws.on('connection',(clinet)=>{
  console.log('客户端已连接')
  clinets.push(clinet)
  // clinet.send('欢迎广临')// 主动向前端发送数据

  clinet.on('message',(msg)=>{
    // 监听客户端发送消息
    console.log('来自前端的问候：')
    console.log(msg)
  })

  clinet.on('close',(msg)=>{
    // 客户端主动断开连接
    console.log('客户端主动断开连接')
  })
  // setTimeout(()=>{
  //    let  num=parseInt(Math.random()*200)%3+1

  //    clinet.send(JSON.stringify({type:num}))
  // },3000)
  
})

setTimeout(()=>{
  sendAll()
},20000)

//群发 广播
function sendAll(){
  for (let index = 0; index < clinets.length; index++) {
    let  num=parseInt(Math.random()*200)%3+1
     clinets[index].send(JSON.stringify({type:num}))
    
  }
}
/*
type ：1 中奖 2.欠费 3.新信息
*/ 