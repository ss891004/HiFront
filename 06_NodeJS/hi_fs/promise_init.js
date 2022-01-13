const fs=require('fs')

// fs.stat('./hehe.js',(err,stats)=>{
//   if(err){
//     console.log('文件不存在')
//   }else{
//     fs.unlink('./hehe.js',(err)=>{
//       console.log(err)
//       fs.writeFile('./test.js','xxxx',()=>{
//         ...
//       })
//     })
//   }
// })
//异步操作需要保持一定的执行顺序  回调函数的嵌套  回调地狱


function delfile(){
  return  new Promise((reslove,reject)=>{
      //异步操作
      // fs.unlink('./hehe.js',(err)=>{
      //   if(err){
      //     // 失败
          reject('失败了')     // 外部通过chatch 接受  表示失败的处理
      //   }else{
      //     reslove('成功了') // 外部走then的处理函数  表示ok
      //   }
      // })
  })
}

delfile()
.then((msg)=>{
  console.log('then:'+msg)
})
.catch((err)=>{
  console.log('err:'+err)
})
