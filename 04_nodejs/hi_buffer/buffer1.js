/*

JavaScript语言自身只有字符串数据类型，没有二进制数据类型。
但在处理像TCP流或文件流时，必须使用到二进制数据。因此在Node.js中定义了一个Buffer类，该类用来创建一个专门存放二进制数据的缓存区。
在Node.js中，Buffer类是随Node内核一起发布的核心库。
Buffer库为Node.js带来了一种存储原始数据的方法，可以让Node.js处理二进制数据，每当需要在Node.js中处理I/O操作中移动的数据时，就有可能使用Buffer库。
原始数据存储在Buffer类的实例中。一个Buffer类似于一个整数数组，但它对应于V8堆内存之外的一块原始内存。
*/


//创建Buffer类
var buf = new Buffer(10);

var buf3=  Buffer.alloc(50);
buf3.write('xxxxx中文')
console.log(buf3.toString('utf8'))

var buf1 = new Buffer([10, 20, 30, 40, 50]);

var buf2 = new Buffer("www.runoob.com", "utf-8");

//写入缓冲区
len = buf.write("www.runoob.com");
console.log("写入字节数 : "+  len);



//---------------------------------------------------------
//从缓冲区读取数据
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//------------------------------------------------------
//将 Buffer转换为JSON对象
buf = new Buffer('www.xuexilinux.com');
var json = buf.toJSON(buf);
console.log(json);

//----------------------------------------
//缓冲区合并
var buffer1 = new Buffer('教程 ');
var buffer2 = new Buffer('www.xuexilinux.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());



//----------------------------------------
//缓冲区比较
buffer1 = new Buffer('ABC');
buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}


//----------------------------------------
//复制缓冲区
buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

//裁剪
buffer1 = new Buffer('runoob');
buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());

//长度
buffer = new Buffer('www.xuexilinux.com');
console.log("buffer length: " + buffer.length);