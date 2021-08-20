const fs=require('fs')
//同步读取文件   在关键位置捕获错误信息
//错误处理 同步：try catch 
try{
  // 可能出错的代码
  let dirs=fs.readdirSync('./')
  console.log(dirs)
}
catch(err){
  console.log('出错了')
  console.log(err)
}

console.log('-------------------')

//异步读取
//错误的回调优先 在回调函数中第一个参数表示错误对象 默认为null 如果出现错误err 就是错误对象
//错误处理  异步 ：错误回调优先
fs.readdir('./',(err,data)=>{
  if(err){ //err 为真有错误  默认 是 null
    console.log('读取错误')
  }else{
    console.log(data)
  }
})