// 文件流的方式的复制

const fs = require('fs');
const path = require('path');


// 对于读入写出都是相对于程序的

/*
磁盘
内存
应用程序

*/

// 创建文件的读取流，并没有读出正式的数据，开始了读取文件的任务（）
var reader = fs.createReadStream('C:\\Users\\iceStone\\Desktop\\1.itcast');

// 磁盘： 7200转 6100转 转速越快 读写越快 资源消耗更大
fs.stat('C:\\Users\\iceStone\\Desktop\\1.itcast', (err, stats) => {

  if (stats) {
    
    var readTotal = 0;
    reader.on('data', (chunk) => { 
      // chunk是一个buffer(字节数组)
      console.log('读了一点 进度：' + ((readTotal += chunk.length) / stats.size * 100) + '%');
    });
    
  }

});
