// PATH模块的使用

const path = require('path');

const temp = path.join(__dirname, './../a/a.lrc');

console.log(path.basename(temp));
// // 获取文件名
console.log(path.basename(temp, 'rc'));
// // 获取文件名without扩展名


// 获取不同操作系统中默认的路径分隔符 Windows是; Linux是:
// 获取环境变量
console.log(process.env.PATH.split(path.delimiter));


// 获取目录名称
path.dirname(temp)


// 获取路径中的扩展名，包含.
console.log(path.extname(temp));


// 将一个路径字符串转换为一个对象（包含文件目录，文件名，扩展名）

var obj = path.parse(temp);
console.log(obj);


// 将路径对象转字符串
var obj = path.parse(temp);
console.log(path.format(obj));

console.log(path.isAbsolute(temp));
console.log(path.isAbsolute('../temp/1.txt'));


// 拼合路径组成
path.join(__dirname, '..', './temp', 'a', '../../1.txt');

// 常规化一个路径
var a = path.normalize('C:/dev\\abc//cba////1.txt');
console.log(a);


// path.relative(from, to)

// 获取to 相对于from的相对路径

// path.resolve([from ...], to)

// console.log(path.resolve(__dirname, '..', './', './code'));


// path.sep

// 获取当前操作系统中默认用的路径成员分隔符 windows:\ linux:/
console.log(path.sep);


// 根据操作系统决定
path.win32

// 允许在任意操作系统上使用windows的方式操作路径
path.posix

// 允许在任意操作系统上使用Linux的方式操作路径