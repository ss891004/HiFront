var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开已存在的文件！");
//fs.read(fd, buffer, offset, length, position, callback)
/*
该方法使用了文件描述符来读取文件。
参数：
fd通过fs.open()方法返回的文件描述符；
buffer数据写入的缓冲区；
offset缓冲区写入的写入偏移量；
length要从文件中读取的字节数；
position文件读取的起始位置，如果position值为null，则会从当前文件指针的位置读取；
callback回调函数，有三个参数err, bytesRead, buffer，err为错误信息，bytesRead 表示读取的字节数，buffer为缓冲区对象。
*/

fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件：");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  字节被读取");
      
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});