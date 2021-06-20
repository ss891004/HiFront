var fs = require("fs");

console.log("创建目录 /tmp/test/");
/*
fs.mkdir(path[, mode], callback)
参数：path文件路径；callback回调函数，没有参数。
*/
fs.mkdir("/tmp/test/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});



/*
fs.readdir(path, callback)
参数：path文件路径；callback回调函数，没有参数。
 */
console.log("查看 /tmp 目录");
fs.readdir("/tmp/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});


/*
fs.readdir(path, callback)
参数：path文件路径；callback回调函数，没有参数。
*/
console.log("准备删除目录 /tmp/test");
fs.rmdir("/tmp/test",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("读取 /tmp 目录");
   fs.readdir("/tmp/",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});