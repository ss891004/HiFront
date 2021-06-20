var fs = require("fs");
var data = '';


/*
Stream是一个抽象接口，Node中有很多对象实现了这个接口。例如对http服务器发起请求的request对象就是一个Stream，还有stdout（标准输出）。
Node.js，Stream 有四种流类型：
（1）Readable可读操作。
（2）Writable可写操作。
（3）Duplex可读可写操作.
（4）Transform操作被写入数据，然后读出结果。

所有的Stream对象都是EventEmitter的实例。常用的事件有：
（1）data当有数据可读时触发。
（2）end没有更多的数据可读时触发。
（3）error在接收和写入过程中发生错误时触发。
（4）finish所有数据已被写入到底层系统时触发。

*/

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");