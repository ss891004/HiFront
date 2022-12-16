const fs=require('fs');
//封装
function isEixt(){
  return new Promise((resolve,reject)=>{
      fs.stat('./hehe.js',(err,stats)=>{
        if(err){
          reject('文件不存在')
        }else{
           resolve('文件存在')
        }
      })
  })
}

function delFile(){
  return new Promise((resolve,reject)=>{
    fs.unlink('./hehe.js',(err)=>{
      if(err){
        reject('del no  ok')
      }else{
        resolve('del ok')
      }
    })
  })
}

isEixt()
.then(()=>{
  console.log('is exit 的成功处理')
  return delFile()
})
.then(()=>{
  console.log('删除文件成功处理')
})
.catch((err)=>{
  console.log('catch')
  console.log(err)
})
// 链式调用  一组链式调用中只需要一个catch
// 如何终止链式调用的执行