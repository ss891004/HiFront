const fs = require('fs');
// 创建文件 覆盖写入
fs.writeFile('name.txt', '今天天气不错123', (err) => {
    console.log(err+'1')
})
// 写入文件
fs.appendFile('name.txt', '你好呀韩梅梅', (err) => {
    console.log(err+'2')
})
// 读取文件
fs.readFile('name.txt', 'utf8', (err, msg) => {
    console.log(err+'3')
    console.log(msg + 'xxxxx')
    console.log(msg.toString('utf8'))
    //默认读取二进制数据流 buffer  
})
// 删除文件
fs.unlink('./name.txt', (err) => {
    console.log(err+'4')
})