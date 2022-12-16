var fs = require("fs");

console.log("准备写入文件");
//fs.writeFile(file, data[, options], callback)
/*
如果文件存在，该方法写入的内容会覆盖旧的文件内容。
参数：
file文件名或文件描述符；data要写入文件的数据，可以是String或Buffer对象；
options该参数是一个对象，包含{encoding, mode, flag}，默认编码为utf8，模式0666，flag为'w'；
callback回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
*/
fs.writeFile('input.txt', '我是通过写入adfadfadsfadsfasdfa的文件内容！',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });
});