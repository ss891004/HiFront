
## Node 简介

### 客户端的JavaScript是怎样的
- 什么是 JavaScript？
  + 是一个脚本语言
  + 运行在浏览器（浏览器的js解析内核  v8）
  + 实现用户的交互 （interactive）
  + 变量  赋值   循环 逻辑 判断 分支 对象   函数。。。。
  + dom 操作
  + bom 操作
  + ajax 

- JavaScript 的运行环境？
  + 浏览器内核解析内核   es6  

- 浏览器中的 JavaScript 可以做什么？

- 浏览器中的 JavaScript 不可以做什么？（不安全）
  + 访问数据库
  + 不能对文件进行操作    
  + 对os 进行操作
  + 原因 是不安全  和浏览器运行机制有关

- 在开发人员能力相同的情况下编程语言的能力取决于什么？
  + cordova hbuilder    平台  platform
  + java   java虚拟机        （运行平台）
  + php    php虚拟机
  + c#     .net framework   mono
  + js     解析内核  chrome v8 

- JavaScript 只可以运行在浏览器中吗？
  + 不是

### 为什么是JavaScript
+ node js 不是因为js 产生的
+ node 选择了js


### 什么是nodejs 
- Node.js 是一个基于Chrome V8 引擎的JavaScript运行环境
- Node.js使用了一个事件驱动、非阻塞式I/O的模型,使其轻量又高效
- Node.js的包管理工具npm,是全球最大的开源库生态系统
- 官网 http://nodejs.cn/
- npm 插件官网：https://www.npmjs.com/


### Node.js 简介

+ Node.js 是一个能够在服务器端运行 JavaScript 的开放源代码、跨平台 JavaScript 运行环境 。

+ Node 采用 Google 开发的 V8 引擎运行 js 代码 ，使用 事件驱动 、非阻塞 和 异步 I/O 模型 等技术来提高性能，可优化应用程序的传输量和规模 。
+ Node 大部分基本模块都用 JavaScript 编写 。在 Node 出现之前JS 通常 作为客户端程序设计语言使用， 以 JS 写出 的程序常在用户的浏览器上运行 。
+ 目前， Node 已被 IBM 、 Microsoft 、 Yahoo! 、 Walmart 、Groupon 、 SAP 、 LinkedIn 、 Rakuten 、 PayPal 、 Voxer 和GoDaddy 等企业采用。

### 简介
+ Node 主要 用于编写像 Web 服务器一样的网络应用，这和 PHP和 Python 是类似的 。
+ 但是 Node 与其 他语言最大的不同之处在于， PHP 等语言是阻塞 的而 Node 是非 阻塞 的。
+ Node 是 事件驱动的。开发者可以在不使用线程的情况下开发出一个能够承载高并发的服务器。其他服务器端语言难以开发高并发应用，而且即使开发出来，性能也不尽人意 。
+ Node 正是 在这个前提下被创造出来 。
+ Node 把 JS 的 易学易用和 Unix 网络编程的强大结合到了一起。
+ Node.js 允许通过 JS 和 一系列模块来编写服务器端应用和网络相关的应用 。
+ 核心模块包括文件系统 I/O 、网络（ HTTP 、 TCP 、 UDP 、 DNS 、TLS/SSL 等）、二进制数据流、加密算法、数据流等等 。 Node模块的 API 形式简单，降低了编程的复杂度 。
+ 使用框架可以加速开发。常用的框架有 Express.js 、 Socket.IO和 Connect 等 。 Node.js 的程序可以在 Microsoft Windows 、Linux 、 Unix 、 Mac OS X 等服务器上运行。
+ Node.js 也可以使用 CoffeeScript 、 TypeScript 、 Dart 语言，以及其他能够编译成 JavaScript 的语言编程。

### Node的用途
+ Web 服务 API ，比如 REST
+ 实时多人游戏
+ 后端的 Web 服务，例如跨域、服务器端的请求
+ 基于 Web 的应用
+ 多客户端的通信，如即时通信


### commonJS规范

#### ECMAScript
+ 标准的缺陷
+ 没有模块系统
+ 标准库较少
+ 没有标准接口
+ 缺乏管理系统

### 模块化
+ 如果程序设计的规模达到了一定程度，则必须对其进行模块化 。
+ 模块化 可以有多种形式，但至少 应该 提供能够将代码分割为多个源文件的机制 。
+ CommonJS 的模块 功能可以帮我们解决该问题。


### CommonJS规范
+ CommonJS 规范的提出，主要是为了弥补当前 JavaScript 没有 模块化 标准 的 缺陷 。
+ CommonJS 规范为 JS 指定了一个美好的愿景，希望 JS 能够在任何地方运行 。
+ CommonJS 对模块的定义十分简单：
    + 模块引用
    + 模块定义
    + 模块标识

### 模块引用
+ 在规范中，定义了 require() 方法，这个方法接手模块标识，以此将一个模块引入到当前运行环境中。
+ 模块引用的示例代码：
    + var math = require('math');

### 模块定义
+ 在运行环境中，提供了 exports 对象用于导出当前模块的方法或者变量，并且它是唯一的导出的出口。
+ 在模块中还存在一个 module 对象，它代表模块自身，而 exports 是 module 的属性。
+ 在 Node 中一个文件就是一个模块。

```
exports.xxx  = function (){};
module.exports = {};
```

### 模块标识
+ 模块 标识 其实就是模块的名字，也就是传递给 require() 方法的参数，它必须是符合驼峰命名法的字符串，或者是以 、 开头的相对路径、或者绝对路径。
+ 模块的定义十分简单，接口也十分简洁。每个模块具有独立的空间，它们互不干扰，在引用时也显得干净利落。

### Node的模块实现
+ Node 中虽然使用的是 CommonJS 规范，但是其自身也对规范做了一些取舍。
+ 在 Node 中引入模块，需要经历如下 3 个步骤：
    + 路径分析
    + 文件定位
    + 编译执行
+ 在 Node 中，模块分为 三 类：一类是底层由C++ 编写的 内建模块 ，一类是 Node 提供的 核心模块 ；还有一类是用户编写的模块，称为 文件模块 。

### 包 package

+ CommonJS 的包规范允许我们将一组相关的模块组合到一起，形成一组完整的工具。
+ CommonJS 的包规范由 包结构 和 包描述文件 两个部分组成。

+ 包结构
    + 用于组织包中的各种文件
+ 包描述文件
    + 描述包的相关信息，以供外部读取分析

### 包结构
+ 包实际上就是一个压缩文件，解压以后还原为目录。符合规范的目录，应该包含如下文件：
    + package.json 描述文件
    + bin 可执行二进制文件
    + lib js 代码
    + doc 文档
    + test 单元测试

### 包描述文件
+ 包描述文件用于表达非代码相关的信息，它是一个 JSON 格式的文件 package.json位于包的根目录下，是包的重要组成部分。
+ package.json 中的字段
    + name 、 description 、 version 、 keywords 、maintainers 、 contributors 、 bugs 、licenses 、 repositories 、 dependencies 、homepage 、 os 、 cpu 、 engine 、 builtin 、directories 、 implements 、 scripts 、 author 、bin 、 main 、 devDependencies 。

NPM(Node Package Manager)
+ CommonJS 包规范是理论， NPM 是其中一种实践。
+ 对于 Node 而言， NPM 帮助其完成了第三方模块的发布、安装和依赖等。借助 NPMNode 与第三方模块之间形成了很好的一个



## 环境配置

### Node的安装

- 安装包安装
    + 官网下载对应的安装包
    + 一路next

### 相关版本

- node版本常识  
  + 偶数版本为稳定版 
  + 奇数版本为非稳定版
  + LTS（Long Term Support）
  + [LTS和Current区别](https://blog.csdn.net/u012532033/article/details/73332099)
- 操作方式：
  + 重新下载最新的安装包；
  + 覆盖安装即可；
- 问题：
  + 以前版本安装的很多全局的工具包需要重新安装
  + 无法回滚到之前的版本
  + 无法在多个版本之间切换（很多时候我们要使用特定版本）

### 常见问题
- Python环境丢失
 + Node中有些第三方的包是以C/C++源码的方式发布的，需要安装后编译,确保全局环境中可以使用python命令,python 版本推荐2.7.0
- 环境变量丢失
 + 部分电脑安装完毕之后没有环境变量需要手动配置
 + Windows中环境变量分为系统变量和用户变量
 + 环境变量的变量名是不区分大小写的
 + PATH 变量：只要添加到 PATH 变量中的路径，都可以在任何目录下
 + 目的可以在任何地方调起node命令


### npm 使用入门

 官网:[https://www.npmjs.com/](https://www.npmjs.com/)

 安装：无需安装

 查看当前版本：

 ```
 $ npm -v
 ```

 更新：

 ```
 $ npm install npm@latest -g

 ```
 初始化工程

 ```
 $ npm init

 $ npm init --yes 默认配置
 ```

 安装包

 使用npm install会读取package.json文件来安装模块。安装的模块分为两类
 dependencies和devDependencies，分别对应生产环境需要的安装包和开发环境需要的安装包。

 ```
 $ npm install

 $ npm install <package_name> 

 $ npm install <package_name> --save

 $ npm install <package_name> --save-dev
 ```
 更新模块

 ```
 $ npm update
 ```
 卸载模块

 ```
 $ npm uninstall <package_name>

 $ npm uninstall --save lodash
 ```

配置npm源

* 临时使用, 安装包的时候通过--registry参数即可

  	$ npm install express --registry https://registry.npm.taobao.org

* 全局使用
	```
	  $ npm config set registry https://registry.npm.taobao.org
	  // 配置后可通过下面方式来验证是否成功
	  npm config get registry
	  // 或
	  npm info express
	```



### NVM  - Node Version Manager

#### Windows平台
+ 多版本的nodejs的管理工具
+ https://github.com/coreybutler/nvm-windows/releases

+ 下载node的压缩版
+ https://nodejs.org/download/release/

+ 解压到mvn的目录中，文件夹命名为vx.y.z (x,y,z为版本)

+ nvm list 
+ nvm use x.y.z

#### MAC平台
+ https://github.com/nvm-sh/nvm




### NPM

#### npm init 创建模块

+ npm init 

#### npm config 环境变量

```text
npm config set <key> <value> [-g|--global]
npm config get <key>
npm config delete <key>
npm config list [-l] [--json]
npm config edit
npm get <key>
npm set <key> <value> [-g|--global]


npm config get prefix      存储路径
npm config get registry    配置npm源


```


#### npm search 搜索模块

#### npm list 查看模块
+ 当前项目安装的所有模块
  + npm list
+ 列出全局安装的模块 带上[--depth 0] 不深入到包的支点 更简洁
  + npm list -g --depth 0

#### npm install 安装模块

```
# 读取package.json里面的配置单安装  
$ npm install 
//可简写成 npm i

# 默认安装指定模块的最新(@latest)版本
$ npm install [<@scope>/]<name> 
//eg:npm install gulp

# 安装指定模块的指定版本
$ npm install [<@scope>/]<name>@<version>
//eg: npm install gulp@3.9.1

# 安装指定指定版本范围内的模块
$ npm install [<@scope>/]<name>@<version range>
//eg: npm install vue@">=1.0.28 < 2.0.0"

# 安装指定模块的指定标签 默认值为(@latest)
$ npm install [<@scope>/]<name>@<tag>
//eg:npm install sax@0.1.1

# 通过Github代码库地址安装
$ npm install <tarball url>
//eg:npm install git://github.com/package/path.git
```

#### npm uninstall 卸载模块

#### npm update 更新模块

#### npm link 引用模块

#### npm run 执行脚本
+ package.json的scripts字段，可以用于指定脚本命令，供npm直接调用。npm run会创建一个Shell，执行指定的命令。

#### npm publish 发布模块




## 模块,包 commonjs

### commonjs规范

Node 应用由模块组成，采用 CommonJS 模块规范。

##### 定义module

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

##### 

 CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

 ```javascript
 	var x = 5;
	var addX = function (value) {
	  return value + x;
	};
	module.exports.x = x;
	module.exports.addX = addX;
 ```
##### 引用

 require方法用于加载模块。

 ```javascript
 	var example = require('./example.js');
	console.log(example.x); // 5
	console.log(example.addX(1)); // 6
 ```

### 模块的分类

* 内置模块
```
	const process = require('process')
	const path = require('path')
	console.log(process.version)
	console.log(path.resolve('../'))
```
* 第三方模块
```
  const request=require("request");
	console.log(request)
	request.get('http://api.douban.com/v2/movie/in_theaters', (err, response, body) => {
	  if (!err) {
	    // console.log(body);
	    console.log(JSON.parse(body))
	  } else {
	    console.log(err);
	  }
	})
```
* 自定义模块


### 常用的内置模块

node 常用内置api  

(1) URL 网址解析
    解析URL相关网址信息
    url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
    url.format(urlObject)
    url.resolve(from, to)
    
(2) QueryString 参数处理
    querystring.escape(str)
    querystring.unescape(str)
    querystring.parse(str[, sep[, eq[, options]]])
    querystring.stringify(obj[, sep[, eq[, options]]])
(3) HTTP 模块概要
	http.createServer([options][, requestListener])
	http.get(options[, callback])
	简易的爬虫
    代理跨域处理
(4) 事件 events 模块
(5) 文件fs模块
    打印目录树
(6) Stream 流模块 
    歌词播放
    音乐下载
(8) request 方法


2、Node.js 基础应用

1、应用 HTTP 模块编写一个小爬虫工具
(1) 利用爬虫获取“拉勾网”首页列表数据 
(2) 通过 npm 安装 cheerio 模块获得数据
2、后端表单的提交
要求:
(1) 应用 request post 模拟提交表单

### 文件读取

Node中文件读取的方式主要有：

> fs.readFile(file[, options], callback(error, data))

```javascript
fs.readFile('c:\\demo\1.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

> fs.readFileSync(file[, options])

```javascript
try {
  const data = fs.readFileSync('c:\\demo\1.txt', 'utf8');
  console.log(data);
} catch(e) {
  // 文件不存在，或者权限错误
  throw e;
}
```

> fs.createReadStream(path[, options])

```javascript
const stream = fs.createReadStream('c:\\demo\1.txt');
let data = ''
stream.on('data', (trunk) => {
  data += trunk;
});
stream.on('end', () => {
  console.log(data);
});
```

> *由于Windows平台下默认文件编码是GBK，在Node中不支持，可以通过[iconv-lite](https://github.com/ashtuchkin/iconv-lite)解决*


### Readline模块逐行读取文本内容

```javascript
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('sample.txt')
});

rl.on('line', (line) => {
  console.log('Line from file:', line);
});
```


### 文件写入

Node中文件写入的方式主要有：

> fs.writeFile(file, data[, options], callback(error))

```javascript
fs.writeFile('c:\\demo\a.txt', new Date(), (error) => {
  console.log(error);
});
```

> fs.writeFileSync(file, data[, options])

```javascript
try {
  fs.writeFileSync('c:\\demo\a.txt', new Date());
} catch (error) {
  // 文件夹不存在，或者权限错误
  console.log(error);
}
```

> fs.createWriteStream(path[,option])

```javascript
var streamWriter = fs.createWriteStream('c:\\demo\a.txt');
setInterval(() => {
  streamWriter.write(`${new Date}\n`, (error) => {
    console.log(error);
  });
}, 1000);
```

### node中的异步操作

- fs模块对文件的几乎所有操作都有同步和异步两种形式
- 例如：readFile() 和 readFileSync()
- 区别：
  + 同步调用会阻塞代码的执行，异步则不会
  + 异步调用会将读取任务下达到任务队列，直到任务执行完成才会回调
  + 异常处理方面，同步必须使用 try catch 方式，异步可以通过回调函数的第一个参数

```javascript
console.time('sync');
try {
  var data = fs.readFileSync(path.join('C:\\Users\\iceStone\\Downloads', 'H.mp4'));
  // console.log(data);
} catch (error) {
  throw error;
}
console.timeEnd('sync');

console.time('async');
fs.readFile(path.join('C:\\Users\\iceStone\\Downloads', 'H.mp4'), (error, data) => {
  if (error) throw error;
  // console.log(data);
});
console.timeEnd('async');
```
#####  promise 对象的使用

参考资料：[JavaScript  Promise迷你书](http://liubin.org/promises-book/#what-is-promise)

* what is Promise *
Promise是抽象异步处理对象以及对其进行各种操作的组件。Promise并不是从JavaScript中发祥的概念。
Promise最初被提出是在 E语言中， 它是基于并列/并行处理设计的一种编程语言。
现在JavaScript也拥有了这种特性，这就是JavaScript Promise

使用了回调函数的异步处理

```javascript

----
getAsync("fileA.txt", function(error, result){
    if(error){// 取得失败时的处理
        throw error;
    }
    // 取得成功时的处理
});
----
<1> 传给回调函数的参数为(error对象， 执行结果)错误优先处理
```

使用了回调函数的异步处理

```javascript
----
var promise = getAsyncPromise("fileA.txt"); 
promise.then(function(result){
    // 获取文件内容成功时的处理
}).catch(function(error){
    // 获取文件内容失败时的处理
});
----
<1> 返回promise对象
```

* 创建Promise对象 *

```
var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后、调用resolve 或 reject
    resolve('成功处理')
    reject('错误处理')
});
```
* 使用实例 *

1. 创建一个priomise 对象并返回`new Promise(fn)`
2. 在fn 中指定异步等处理
	* 处理结果正常的话，调用`resolve(处理结果值)`
	* 处理结果错误的话，调用 `reject(Error对象)`

```javascript
function asyncFunction() {
    
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async Hello world');
        }, 16);
    });
}

asyncFunction().then(function (value) {
    console.log(value);    // => 'Async Hello world'
}).catch(function (error) {
    console.log(error);
});
```

* Promise的状态

用new Promise 实例化的promise对象有以下三个状态。

* **"has-resolution" - Fulfilled**   resolve(成功)时。

* **"has-rejection" - Rejected**     reject(失败)时

* **"unresolved" - Pending**   既不是resolve也不是reject的状态。也就是promise对象刚被创建后的初始化状态等

promise对象的状态，从Pending转换为Fulfilled或Rejected之后， 这个promise对象的状态就不会再发生任何变化。

也就是说，Promise与Event等不同，在.then 后执行的函数可以肯定地说只会被调用一次。

另外，Fulfilled和Rejected这两个中的任一状态都可以表示为Settled(不变的)。

Settled
resolve(成功) 或 reject(失败)。

从Pending和Settled的对称关系来看，Promise状态的种类/迁移是非常简单易懂的。

当promise的对象状态发生变化时，用.then 来定义只会被调用一次的函数。

### 路径模块

在文件操作的过程中，都必须使用物理路径（绝对路径），path模块提供了一系列与路径相关的 API

```javascript
console.log('join用于拼接多个路径部分，并转化为正常格式');
const temp = path.join(__dirname, '..', 'lyrics', './友谊之光.lrc');
console.log(temp);

console.log('获取路径中的文件名');
console.log(path.basename(temp));

console.log('获取路径中的文件名并排除扩展名');
console.log(path.basename(temp, '.lrc'));

console.log('====================================');

console.log('获取不同操作系统的路径分隔符');
console.log(process.platform + '的分隔符为 ' + path.delimiter);

console.log('一般用于分割环境变量');
console.log(process.env.PATH.split(path.delimiter));

console.log('====================================');

console.log('获取一个路径中的目录部分');
console.log(path.dirname(temp));

console.log('====================================');

console.log('获取一个路径中最后的扩展名');
console.log(path.extname(temp));

console.log('====================================');

console.log('将一个路径解析成一个对象的形式');
const pathObject = path.parse(temp);
console.log(pathObject);

console.log('====================================');

console.log('将一个路径对象再转换为一个字符串的形式');
// pathObject.name = '我终于失去了你';
pathObject.base = '我终于失去了你.lrc';
console.log(pathObject);

console.log(path.format(pathObject));

console.log('====================================');

console.log('获取一个路径是不是绝对路径');
console.log(path.isAbsolute(temp));
console.log(path.isAbsolute('../lyrics/爱的代价.lrc'));

console.log('====================================');

console.log('将一个路径转换为当前系统默认的标准格式，并解析其中的./和../');
console.log(path.normalize('c:/develop/demo\\hello/../world/./a.txt'));

console.log('====================================');

console.log('获取第二个路径相对第一个路径的相对路径');
console.log(path.relative(__dirname, temp));

console.log('====================================');

console.log('以类似命令行cd命令的方式拼接路径');
console.log(path.resolve(temp, 'c:/', './develop', '../application'));

console.log('====================================');

console.log('获取不同平台中路径的分隔符（默认）');
console.log(path.sep);

console.log('====================================');

console.log('允许在任意平台下以WIN32的方法调用PATH对象');
// console.log(path.win32);
console.log(path === path.win32);

console.log('====================================');

console.log('允许在任意平台下以POSIX的方法调用PATH对象');
console.log(path === path.posix);
```

### express 

---

官网:[http://www.expressjs.com.cn/](http://www.expressjs.com.cn/)


#### express 环境搭建

安装

```bash
	$ npm install express --save
```

快速开始

```javascript
	const express = require('express')
    const app = express()
    app.get('/', (req, res) => res.send('Hello World!'))
    app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

#### express 路由配置


```javascript
let express=require('express')
let router=express.Router()
// 该路由使用的中间件
router.use((req,res,next)=>{
	 next()
});
// 定义网站主页的路由
router.post('/addFood', function(req, res) {
	console.log('hahaha')
  // res.send('这里是admin的登录');
});
// 定义 about 页面的路由
router.post('/regist', function(req, res) {
  res.send('这里是admin的注册侧');
});

module.exports = router;

app.use('/admin',admin)
```

#### 传递数据的获取

	get
	req.query
	post
	req.body
	body-parser
	
	设置中文格式
	res.set('Content-Type','text/plain,charset=utf8')

#### 请求模拟工具 postman

#### 静态资源配置

```javascript

app.use(express.static('public'))

app.use('/static', express.static('public'))

app.use('/static', express.static(path.join(__dirname, 'public')))

```

## mongod

### 安装配置
> 在`Mongodb`官网下载最新版本的[Mongodb下载地址](https://cloud.mongodb.com/)
> 
> 下载`msi`的`window`安装包，可以装到C盘或者D盘目录下
> 
> # 配置
> 由于我是安装在D盘的环境下
> 
> ```shell
> D:\Program Files (x86)\MongoDB\Server\3.2\bin
> ```
> 
> 所以在bin文件夹下找到mongod.exe命令，然后通过管理员执行`mongod --dbpath x路径x`，路径可以是任何地方，我这里选择在D盘的MongoDB目录下，当然路径不要包含特殊的字符串，比如`Program Files (x86)`也不行
> 
> ```shell
> mongod --dbpath D:\mongodb\data\db
> ```
> 
> ![image](https://user-images.githubusercontent.com/17243165/31977540-fc0a5a6e-b96f-11e7-9a2b-34d66d7241c4.png)
> 
> # 命令行
> 经过上面的配置之后，就可以返回bin目录下找到`mongo.exe`命令，并管理员下执行，就可以出现mongodb的命令行模式
> 
> ```shell
> D:\Program Files (x86)\MongoDB\Server\3.2\bin
> ```
> 
> ![image](https://user-images.githubusercontent.com/17243165/31978099-57bce3ca-b972-11e7-88bd-30f5d68036ed.png)
> 
> 然后就可以使用下面的命令来测试了
>
### mongod
> ```js
> db.help()//帮助
> db.stats()//统计
> ```
> 
> # 显示数据库
> ```js
> show dbs
> ```
> 
> 检查当前选择的数据库
> 
> ```js
> db
> ```
> 
> # 添加数据库
> **数据库名**为数据库创建的名字，使用该命令后会默认切换到对应的数据库，并且在数据库中添加选项，数据库信息才显示，如果默认就有该数据库，那就是切换到对应的数据库里面
> 
> ```js
> use 数据库名
> ```
> 
> # 删除数据库
> 先切换到对应的数据库，然后再执行`db.dropDatabase()`删除该数据库
> 
> ```js
> use 数据库名
> //switched to db 数据库名
> db.dropDatabase()
> ```
> 
> # 显示集合
> 用一下命令可以检查创建的集合
> 
> ```js
> show collections
> ```
> 
> # 添加集合
> 在创建完数据库之后，我们就可以创建集合
> 
> ```js
> db.createCollection(集合名字name，设置参数options[对象类型])
> ```
> 
> **name**是要创建的集合的名称。 **options**是一个文档，用于指定集合的配置
> 
> 参数	类型	描述
> name	String	要创建的集合的名称
> options	Document	(可选)指定有关内存大小和索引的选项
> **options**参数是可选的，因此只需要指定集合的名称。 以下是可以使用的选项列表：
> 
> 字段	类型	描述
> capped	Boolean	(可选)如果为true，则启用封闭的集合。上限集合是固定大小的集合，它在达到其最大大小时自动覆盖其最旧的条目。 如果指定true，则还需要指定size参数。
> autoIndexId	Boolean	(可选)如果为true，则在_id字段上自动创建索引。默认值为false。
> size	数字	(可选)指定上限集合的最大大小(以字节为单位)。 如果capped为true，那么还需要指定此字段的值。
> max	数字	(可选)指定上限集合中允许的最大文档数。
> 由于**option**是可选，我们也可以不带配置项创建集合
> 
> ```js
> db.createCollection("mycollection")
> ```
> 
> # 删除集合
> `db.collection.drop()`用于从数据库中删除集合
> 
> ```js
> db.集合名.drop()
> ```
> 
> 比如我们可以测试以下操作
> 
> ```js
> db.createCollection("wscats")//创建名为wscats的集合
> show collections//显示该数据库所有集合   wscats
> db.wscats.drop()//删除名为wscats的集合
> ```
> 
> # 查看文档
> 最简单查看文档的方法就是`find()`，会检索集合中所有的文档结果
> 
> ```js
> db.集合名.find()
> ```
> 
> 要以格式化的方式显示结果，可以使用`pretty()`方法。
> 
> ```js
> db.集合名.find().pretty()
> ```
> 
> ## 1.固值寻找
> 寻找age集合里面所有含有属性值为wscats的文档结果，相当于`where name = 'wscats'`
> 
> ```js
> db.age.find({name:"wscats"})
> ```
> 
> ## 2.范值寻找
> 操作	语法	示例	等效语句
> 相等	{:}	`db.age.find({"name":"wscats"}).pretty()`	where name = 'wscats'
> 小于	{:{$lt:}}	`db.age.find({"likes":{$lt:50}}).pretty()`	where likes < 50
> 小于等于	{:{$lte:}}	`db.age.find({"likes":{$lte:50}}).pretty()`	where likes <= 50
> 大于	{:{$gt:}}	`db.age.find({"likes":{$gt:50}}).pretty()`	where likes > 50
> 大于等于	{:{$gte:}}	`db.age.find({"likes":{$gte:50}}).pretty()`	where likes >= 50
> 不等于	{:{$ne:}}	`db.age.find({"likes":{$ne:50}}).pretty()`	where likes != 50
> ## 3.AND和OR寻找
> ### AND
> 在find()方法中，如果通过使用`，`将它们分开传递多个键，则mongodb将其视为**AND**条件。 以下是AND的基本语法
> 
> 寻找`_id`为1并且`name`为wscats的所有结果集
> 
> ```js
> db.age.find(
>    {
>       $and: [
>          {"_id": 1}, {"name": "wscats"}
>       ]
>    }
> )
> ```
> 
> ### OR
> 在要根据OR条件查询文档，需要使用`$or`关键字。以下是OR条件的基本语法
> 
> 寻找`name`为corrine或者`name`为wscats的所有结果集
> 
> ```js
> db.age.find(
>    {
>       $or: [
>          {"name": "corrine"}, {“name“: "wscats"}
>       ]
>    }
> )
> ```
> 
> ### AND和OR等结合
> 相当于语句`where title = "wscats" OR ( title = "corrine" AND _id < 5)`
> 
> ```js
> db.age.find({
>   $or: [{
>     "title": "wscats"
>   }, {
>     $and: [{
>       "title": "corrine"
>     }, {
>       "_id": {
>         $lte: 5
>       }
>     }]
>   }]
> })
> ```
> 
> # 插入文档
> 文档的数据结构和JSON基本一样。
> 所有存储在集合中的数据都是BSON格式。
> BSON是一种类json的一种二进制形式的存储格式,简称**Binary JSON**。
> 
> 要将数据插入到mongodb集合中，需要使用mongodb的`insert()`或`save()`方法。
> 
> ```js
> db.集合名.insert(document)
> ```
> 
> 比如我们可以插入以下数据
> 
> ```js
> db.wscats.insert({
>    _id: 100,
>    title: 'MongoDB Tutorials', 
>    description: 'node_tutorials',
>    by: 'Oaoafly',
>    url: 'https://github.com/Wscats/node-tutorial',
>    tags: ['wscat','MongoDB', 'database', 'NoSQL','node'],
>    num: 100,
> })
> ```
> 
> 也可以支持插入多个，注意传入的是数组形式
> 
> ```js
> db.wscats.insert([{
>    _id: 100,
>    title: ‘Hello’
> },{
>    _id: 101,
>    title: ‘World’
> }])
> ```
> 
> 在插入的文档中，如果不指定_id参数，那么mongodb会为此文档分配一个唯一的ObjectId
> 要插入文档，也可以使用`db.post.save(document)`。如果不在文档中指定_id，那么`save()`方法将与`insert()`方法一样自动分配ID的值。如果指定_id，则将以save()方法的形式替换包含**_id**的文档的全部数据。
> 
> ```js
> db.wscats.save({
>    _id: 111,
>    title: 'Oaoafly Wscats', 
> })
> ```
> 
> # 更新文档
> ## 1.update()方法
> 寻找第一条title为wscats的值，并且更新值title为corrine和age为12
> 
> ```js
> db.age.update({
>   'title': 'wscats'
> }, {
>   $set: {
>     'title': 'corrine',
>     'age': 12
>   }
> })
> ```
> 
> 默认情况下，mongodb只会更新一个文档。要更新多个文档，需要将参数`multi`设置为true，还可以配合find方法里面的各种复杂条件判断来筛选结果，然后更新多个文档
> 
> 寻找所有title为wscats的值，并且更新值title为corrine和age为12
> 
> ```js
> db.age.update({
>   'title': 'wscats'
> }, {
>   $set: {
>     'title': 'corrine',
>     'age': 12
>   }
> }, {
>   multi: true
> })
> ```
> 
> ## 2.save()方法
> 将`_id`主键为3的文档，覆盖新的值，注意`_id`为必传
> 
> ```
> db.age.save({
>   '_id':3,
>   'title': 'wscats'
> })
> ```
> # 删除文档
> 删除主键`_id`为3的文档，默认是删除多条
> 
> ```js
> db.age.remove({
>   '_id':3
> })
> ```
> 
> 建议在执行`remove()`函数前先执行`find()`命令来判断执行的条件是否正确
> 
> 如果你只想删除第一条找到的记录可以设置**justOne**为1，如下所示
> 
> ```js
> db.age.remove({...},1)
> ```
> 
> 全部删除
> 
> ```js
> db.age.remove({})
> ```
> 
> # Limit与Skip方法
> ## Limit
> 如果你需要在mongodb中读取指定数量的数据记录，可以使用mongodb的Limit方法，`limit()`方法接受一个数字参数，该参数指定从mongodb中读取的记录条数。
> 
> ```js
> db.age.find().limit(数量)
> ```
> 
> ## Skip
> 我们除了可以使用`limit()`方法来读取指定数量的数据外，还可以使用`skip()`方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数。
> 
> ```js
> db.age.find().limit(数量).skip(数量)
> //skip()方法默认值为0
> ```
> 
> 所以我们在实现分页的时候就可以用limit来限制每页多少条数据(一般固定一个值)，用skip来决定显示第几页(一个有规律变动的值)
> 
> # 排序
> 在mongodb中使用使用`sort()`方法对数据进行排序，`sort()`方法可以通过参数指定排序的字段，并使用1和-1来指定排序的方式，其中1为升序排列，而-1是用于降序排列。
> 
> 1	升序排列
> -1	降序排列
> ```js
> db.集合名.find().sort({键值(属性值):1})
> ```
> 
> 把`age`集合表重新根据`_id`主键进行降序排列
> 
> ```js
> db.age.find().sort({
>   "_id": -1
> })
> ```
> 
> # Node.js连接
> 安装mongodb的模块
> 
> ```js
> npm install mongodb
> ```
> 
> ## 1.连接数据库
> ```js
> var MongoClient = require('mongodb').MongoClient;
> //结尾是选择数据库名
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
> });
> ```
> 
> ## 2.查询数据
> 注意查询回来的结果需要toArray来遍历处理
> 
> ```js
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>   //选中age集合，并用find方法把结果集拿回来进行处理
>   db.collection("age").find({title: "cba"}).toArray(function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     console.log(result);
>   });
> });
> ```
> 
> 经过测试，读取大于100条的时候会出现报错[官网解释](https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/#cursor-batches)，可以尝试用`forEach`代替
> 
> ```js
> db.collection('pokemon').find({})
>   .forEach(function(item){
>       console.log(item)
>   })
> ```
> 
> ### 查询ID
> 查询自动生成的`ObjectId`
> 
> ```js
> var ObjectId = require('mongodb').ObjectId;
> let _id = ObjectId("5bcae50ed1f2c2f5e4e1a76a");
> db.collection('xxx').find({
>     "_id": _id
> }).forEach(function (item) {
>     console.log(item)
> })
> ```
> 
> ## 3.插入数据
> insert函数第一个参数是需要插入的值(可以一个也可以多个)，第二个参数是接受一个回调函数，当值插入成功后回返回插入值得一些关键信息，比如`_id`
> 
> ```js
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>	const db = client.db("demo");
>   db.collection("age").insert([
>     { 
>       title: "插入的值A"
>     }, {
>       title: "插入的值B"
>     }
>   ], function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     console.log(result)
>   })
> });
> ```
> 
> ## 4.更新数据
> 注意如果不加$set就是完全替换原来的那份(没有设置的属性值将会丢失)，加上$set则只是更新对应的属性值，其余不做改变
> 
> ```js
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>   db.collection("age").update({
>     "_id": 1
>   }, {
>     $set: {
>       title: "你好，世界",
>       skill: "js"
>     }
>   }, function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     //console.log(result);
>   });
> });
> ```
> 
> ## 5.删除数据
> ```js
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>   db.collection("age").remove({
>     "_id": 1
>   }, function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     //console.log(result);
>     //关闭数据库
>     db.close();
>   });
> });
> ```
> 
> ## 6.关闭数据库
> ```js
> db.close();
> ```
> 
> # 封装自定义模块
> 新建`mongo.js`写入以下代码，封装自定义模块，方便其他路由复用，注意`assert`是node自带的断言模块，用于测试代码
> 
> 参考
> 
> * [官网API文档](http://nodejs.cn/api/assert.html)
> * [Node.js的断言模块assert进行单元测试](https://www.cnblogs.com/hong7zai/p/5909914.html)
> 
> ```js
> const MongoClient = require('mongodb').MongoClient;
> const assert = require('assert');
> const url = 'mongodb://localhost:27017';
> const dbName = 'shop';
> function query(callback) {
> 	MongoClient.connect(url, function(err, client) {
> 		assert.equal(null, err);
> 		console.log("Connected successfully to server");
> 		const db = client.db(dbName);
> 		callback(db);
> 		client.close();
> 	});
> }
> module.exports = {
> 	query
> }
> ```
> 
> 在路由文件中引入和使用
> 
> ```js
> var mongo = require('./mongo.js')
> router.post('/addproduct', function(req, res, next) {
> 	mongo.query(function(db) {
> 		db.collection("product").insertMany([req.body], function(err, result) {
> 			console.log("Inserted 1 document into the collection");
> 			res.send('respond with a resource');
> 		});
> 	})
> });
> ```
>
### mongoose 
> 
### 可视化
> * [Robo 3T](https://robomongo.org/)
> * [Studio3t](https://studio3t.com/download-thank-you/?OS=win64)




## Socket

### socket.io

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>socket.io</title>
  <script src="socket.io.js" charset="utf-8"></script>
</head>
<body>
  <h1>gp6 交流区</h1>
  <div id="content" name="name" style="overflow-y: scroll; width: 400px; height: 300px; border: solid 1px #000"></div>
  <br />
  <div>
    <input type="text" id="msg" style="width: 200px;">
  </div>
  <button id="submit">提交</button>
  <script>
    var socket = io.connect('http://10.9.164.98:8081');
    const content = document.getElementById('content')
    document.querySelector('#submit')
      .addEventListener('click', function () {
        var msg2 = msg.value
        socket.emit('receive', msg2)
        msg.value = ''
        content.innerHTML += msg2 + '<br/>'
      }, false)

      socket.on('message', function(msg){
        content.innerHTML += msg + '<br/>'
      })
  </script>
</body>
</html>

```
server.js

```js
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/client'))

io.on('connection', function (socket) {
  setInterval(function () {
    socket.emit('list', 'abc')
  }, 1000)
  socket.broadcast.emit('list', 'test');
  socket.on('backend', (msg) => {
    console.log(msg);
  })

  socket.on('receive', (msg) => {
    socket.broadcast.emit('message', msg);
  })
});

server.listen(8081, '10.9.164.98');

```
### net模块

serverCode
```js
const net = require('net')

const server = new net.createServer()

let clients = {}
let clientName = 0

server.on('connection', (client) => {
  client.name = ++clientName
  clients[client.name] = client

  client.on('data', (msg) => {
    // console.log('客户端传来：' + msg);
    broadcast(client, msg.toString())
  })

  client.on('error', (e) => {
    console.log('client error' + e);
    client.end()
  })

  client.on('close', (data) => {
    delete clients[client.name]
    console.log(client.name + ' 下线了');
  })
})

function broadcast(client, msg) {
  for (var key in clients) {
    clients[key].write(client.name + ' 说：' + msg)
  }
}

server.listen(9000)
```
clientCode

```js
var net = require('net')
const readline = require('readline')

var port = 9000
var host = '127.0.0.1'

var socket = new net.Socket()

socket.setEncoding = 'UTF-8'

socket.connect(port, host, () => {
  socket.write('hello.')
})

socket.on('data', (msg) => {
  console.log(msg.toString())
  say()
})

socket.on('error', function (err) {
  console.log('error' + err);
})

socket.on('close', function () {
  console.log('connection closeed');
})

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function say() {
  r1.question('请输入：', (inputMsg) => {
    if (inputMsg != 'bye') {
      socket.write(inputMsg + '\n')
    } else {
      socket.destroy()
      r1.close()
    }
  })
}

```
### websocket


```js
const ws = new WebSocket('ws://localhost:8080/')

ws.onopen = () => {
  ws.send('大家好')
}

ws.onmessage = (msg) => {
  const content = document.getElementById('content')
  content.innerHTML += msg.data + '<br/>'
}

ws.onerror = (err) => {
  console.log(err);
}

ws.onclose = () => {
  console.log('closed~');
}
ws.send(msg2)
```

server.js

```js
const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8080 })

let clients = {}
let clientName = 0

ws.on('connection', (client) => {
  client.name = ++clientName
  clients[client.name] = client

  client.on('message', (msg) => {
    broadcast(client, msg)
  })

  client.on('close', () => {
    delete clients[client.name]
    console.log(client.name + ' 离开了~')
  })
})

function broadcast(client, msg) {
  for (var key in clients) {
    clients[key].send(client.name + ' 说：' + msg)
  }
}

```

## SSR 与 SEO

vue 和 react 介绍 


## 项目实战

### api接口

* RestfulApi 规范
* 接口文档的生成(apidoc)
* 接口请求方式区别

### 跨域解决

* cors
* jsonp
* proxy

### 身份验证

#### JWT

#### Cookia+Session

### 图片上传
1. 安装multer模块
```javascript
npm install multer
```

2. 引用模块
它是依赖于express的一个模块
```javascript
//引用express并配置
var express = require("express");
var app = express();
app.listen(3000);
```
```javascript
var multer = require('multer');
/*var upload = multer({
	//如果用这种方法上传，要手动添加文明名后缀
        //如果用下面配置的代码，则可以省略这一句
	dest: 'uploads/'
})*/
```

3. 配置
设置保存文件的地方，并根据上传的文件名对应文件添加后缀
可以通过`filename`属性定制文件保存的格式

|属性值|用途|
|-|-|
|`destination`|设置资源的保存路径。注意，如果没有这个配置项，默认会保存在`/tmp/uploads`下。此外，路径需要自己创建|
|`filename`|设置资源保存在本地的文件名|

```javascript
var storage = multer.diskStorage({
	//设置上传后文件路径，uploads文件夹会自动创建。
	destination: function(req, file, cb) {
		cb(null, './uploads')
	},
	//给上传文件重命名，获取添加后缀名
	filename: function(req, file, cb) {
		var fileFormat = (file.originalname).split(".");
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
});
var upload = multer({
	storage: storage
});
```

4. 接受文件
`upload.single('xxx')`，xxx与表单中的name属性的值对应
这里虽然用到post请求，但实际上不需要`bodyParser`模块处理
```javascript
app.post('/upload-single', upload.single('logo'), function(req, res, next) {
	console.log(req.file)
	console.log('文件类型：%s', req.file.mimetype);
	console.log('原始文件名：%s', req.file.originalname);
	console.log((req.file.originalname).split("."))
	console.log('文件大小：%s', req.file.size);
	console.log('文件保存路径：%s', req.file.path);
	res.send({
		ret_code: '0'
	});
});
```

5. 多图上传
多图上传只要更改一下地方，前端往file输入框加多一个`multiple="multiple"`属性值，此时就可以在选图的时候多选了，当然也可以并列多个file输入框(不推荐多个上传图片输入框)，这样体验会不好
```html
<input type="file" name="logo" multiple="multiple" />
```
后端也需要相应的改变
```javascript
app.post('/upload-single', upload.single('logo'), function(req, res, next) {
//upload.single('logo')变为upload.array('logo', 2)，数字代表可以接受多少张图片
app.post('/upload-single', upload.array('logo', 2), function(req, res, next) {
```
如果不想有图片数量上传限制，我们可以用`upload.any()`方法
```javascript
app.post('/upload-single', upload.any(), function(req, res, next) {	
	res.append("Access-Control-Allow-Origin","*");
	res.send({
		wscats_code: '0'
	});
});
```

6. 前端部分
- formData表单提交
```html
<form action="http://localhost:3000/upload-single" method="post" enctype="multipart/form-data">
	<h2>单图上传</h2>
	<input type="file" name="logo">
	<input type="submit" value="提交">
</form>
```

- formData表单+ajax提交
```javascript
<form id="uploadForm">
	<p>指定文件名： <input type="text" name="filename" value="" /></p>
	<p>上传文件： <input type="file" name="logo" /></ p>
	<input type="button" value="上传" onclick="doUpload()" />
</form>
```
`FormData`对象，是可以使用一系列的键值对来模拟一个完整的表单，然后使用`XMLHttpRequest`发送这个"表单"

**注意点**

- processData设置为false。因为data值是FormData对象，不需要对数据做处理。
- `<form>`标签添加`enctype="multipart/form-data"`属性。
- cache设置为false，上传文件不需要缓存。
- contentType设置为false。因为是由`<form>`表单构造的FormData对象，且已经声明了属性`enctype="multipart/form-data"`，所以这里设置为false

上传后，服务器端代码需要使用从查询参数名为logo获取文件输入流对象，因为`<input>`中声明的是`name="logo"`

```javascript
function doUpload() {
	$.ajax({
		url: 'http://localhost:3000/upload-single',
		type: 'POST',
		cache: false, //不必须
		data: new FormData($('#uploadForm')[0]),
		processData: false,//必须
		contentType: false,//必须
		success: function(data) {
			console.log(data)
		}
	})
}
```

> 参考文档
[Github MyDemo](https://github.com/Wscats/node-tutorial/tree/master/uploadFiles)
[Github Multer](https://github.com/expressjs/multer)
[MDN FormData对象的使用](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects)

## 自动化测试 mocha
Mocha('摩卡')，诞生于2011年，现在比较流行的JavaSscript测试框架之一,可以运行于Node环境和浏览器环境

测试框架:可以运行测试的工具。通过他，可以为JavaScript应用 添加测试,从而保证代码质量
> 参考文档
[mochajs](https://mochajs.org/)
[mocha中文文档](https://segmentfault.com/a/1190000011362879)
### 安装配置

使用npm 全局安装

``` 
$ npm install --global mocha
```

项目依赖 局部安装 

```
$ npm isntall mocha
```
### 基本语法

### assert 断言

+ 断言库：chai
+ should 风格断言
+ expect 风格断言

全局安装chai

```js
npm install chai -g 
```

### 案例使用 

递归执行

```
$ mocha test --recursive 
```