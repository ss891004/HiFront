const cheerio=require('cheerio');
let $=cheerio.load('<div><p>你好</p><img src="http://ww.baidu.com"><img src="http://ww.baidu111.com"></div>')
// 将一组 html格式的字符串 转化为类dom 之后可以通过jq的语法选中其中的元素
// console.log($('img').attr('src'))
// console.log($('p').text())
$('img').each((index,el)=>{
  // console.log(el)
  console.log($(el).attr('src'))
})