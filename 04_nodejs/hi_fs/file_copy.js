// 文件的复制

const fs = require('fs');
const path = require('path');

console.time('read');
fs.readFile('C:\\Users\\iceStone\\Desktop\\1.iso', (err, data) => {
  if (err) {
    throw err
  }
  console.timeEnd('read');
  console.time('write');
  // 读取完文件拿到
  fs.writeFile('C:\\Users\\iceStone\\Desktop\\2.iso', data, err=> {
    if (err) {
      throw err
    }
    console.timeEnd('write');
    console.log('拷贝完成');
  });
});

// 大文件拷贝，内存受不了
// 没有进度的概念

