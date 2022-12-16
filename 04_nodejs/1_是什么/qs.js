const qs=require('querystring')
// let string='name=wangyi&pass=123&sex=0'
// let obj=qs.parse(string)
// let string='name-wangyi#pass-123#sex-0'
// let obj=qs.parse(string,'#','-')
// 将query字符串变成query对象 split
// console.log(obj)

//stringfy
// let obj={ name: 'wangyi', pass: '123', sex: '0' }
// let string=qs.stringify(obj,'^','?')
// console.log(string)

// let strinfg='w=你好&foo=bar'
// let result=qs.escape(strinfg)
// console.log(result)

let escape='w%3D%E4%BD%A0%E5%A5%BD%26foo%3Dbar'
console.log(qs.unescape(escape))