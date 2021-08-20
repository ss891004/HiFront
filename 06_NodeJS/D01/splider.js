/*
1. 请求网站数据
2. 将数据保存本地文件
*/

// http 和 https 两个模块

const http=require('https')
const fs=require('fs')
const cheerio=require('cheerio')
let url='https://www.qunar.com/'
let json='http://nodejs.org/dist/index.json'

http.get(url,(res)=>{
  // 安全判断
  const { statusCode } = res;  //状态码
  const contentType = res.headers['content-type']; //文件类型

  console.log(statusCode,contentType)
  let err =null;

  //异步错误优先处理
  if(statusCode!==200){
     err=new Error('请求状态错误')
  }else if(!/^text\/html/.test(contentType)){
     //格式类型是网页
     err=new Error('请求类型错误')
  }


  // err 为真两个判断出错
  if(err){
    console.log(err)
    res.resume(); // 重置缓存
    return false
  }


  //数据处理
  // 数据分段 只要接受数据就会触发data 事件 chunk 每次接受的数据片段
  let rawData=''
  res.on('data',(chunk)=>{
    console.log('----')
    rawData+=chunk.toString('utf8')
    // console.log(chunk.toString('utf8'))
  })
  // 数据流传输完毕
  res.on('end',()=>{
    // 将请求的数据保存到本地
    // fs.writeFileSync('./bibi.html',rawData)
   console.log('数据传输完毕')
   //通过cheerio 分析
   let $=cheerio.load(rawData)// 将请求的网页数据进行转化
   $('img').each((index,el)=>{
    console.log($(el).attr('src'))
   })
  })
}).on('error',(err)=>{
  console.log('请求错误')
})

/*
// let obj={name:123,age:456}
// let name=obj.name
// let {name}=obj

*/ 