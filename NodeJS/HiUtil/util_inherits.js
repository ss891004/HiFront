var util = require('util'); 

//定义了一个基础对象Base和一个继承自Base的Sub，Base有三个在构造函数内定义的属性和一个原型中定义的函数，通过util.inherits 实现继承。
function Base() { 
	this.name = 'base'; 
	this.base = 1991; 
	this.sayHello = function() { 
	console.log('Hello ' + this.name); 
	}; 
} 

Base.prototype.showName = function() { 
	console.log(this.name);
}; 
function Sub() { 
	this.name = 'sub'; 
} 

//util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数。
util.inherits(Sub, Base); 


var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 

//Sub仅仅继承了Base在原型中定义的函数，而构造函数内部创造的base属性和sayHello函数都没有被Sub继承
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 


//http://nodejs.cn/api/util.html#util_util