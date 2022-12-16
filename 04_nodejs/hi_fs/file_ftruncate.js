var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件！");
/*
fs.ftruncate(fd, len, callback)
参数：fd文件描述符；len文件内容截取的长度；callback回调函数，没有参数。
*/
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("截取10字节后的文件内容。");
   
   fs.ftruncate(fd, 10, function(err){
      if (err){
         console.log(err);
      } 
      console.log("文件截取成功。");
      console.log("读取相同的文件"); 
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
         if (err){
            console.log(err);
         }
         if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
         }

         fs.close(fd, function(err){
            if (err){
               console.log(err);
            } 
            console.log("文件关闭成功！");
         });
      });
   });
});