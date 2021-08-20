var util = require('util'); 

function Person() { 
	this.name = 'byvoid'; 
	this.toString = function() { 
	return this.name; 
	}; 
}

var obj = new Person(); 

//util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换为字符串的方法
/*
showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
depth 表示最大递归的层数，如果对象很复杂，可以指定层数以控制输出信息的多少；如果不指定depth，默认会递归2层，指定为null表示将不限递归层数完整遍历对象。
如果color值为true，输出格式将会以ANSI颜色编码，通常用于在终端显示更漂亮的效果。
*/
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true)); 