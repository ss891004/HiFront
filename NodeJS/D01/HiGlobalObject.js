
//_filename表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 
// 如果在模块中，返回的值是模块文件的路径。
console.log( __filename );

//__dirname表示当前执行脚本所在的目录。
console.log( __dirname );


function printHello(){
    console.log( "Hello, World!");
 }

 // setTimeout(cb, ms)全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。返回一个代表定时器的句柄值。
 // 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

//clearTimeout( t )全局函数用于停止一个之前通过setTimeout() 创建的定时器。参数t是通过setTimeout()函数创建的定时器。
 // 清除定时器
//clearTimeout(t);

//setInterval(cb, ms)全局函数在指定的毫秒(ms)数后执行指定函数(cb)。返回一个代表定时器的句柄值
// 两秒后执行以上函数
setInterval(printHello, 2000);


/*
console用于提供控制台标准输出，是由Internet Explorer的JScript引擎提供的调试工具，后来逐渐成为浏览器的事实标准。
Node.js沿用了这个标准，提供与习惯行为一致的console对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符。

*/
console.log('Hello world'); 

console.info("程序开始执行：");

console.time("获取数据");
//
// 执行一些代码
// 
console.timeEnd('获取数据');



process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
      console.log("该代码不会执行");
    }, 0);
    
    console.log('退出码为:', code);
  });
  console.log("程序执行结束");

  //---------------------------------------------------

  // 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);

//----------------------------------------------------
// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());