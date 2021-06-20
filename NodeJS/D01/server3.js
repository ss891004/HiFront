/*
（1）引入required模块，可以使用require指令来载入Node.js模块。
（2）创建服务器，监听客户端请求，类似于Apache、Nginx等HTTP服务器。
（3）接收请求与响应请求，服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP请求，服务器接收请求后返回响应数据。
*/
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');


/*
第一行请求（require）Node.js自带的http模块，并且把它赋值给http变量。
第二行调用http模块提供的函数createServer，这个函数会返回一个对象，这个对象有一个叫做listen的方法，指定HTTP服务器监听端口。
*/