var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
	console.log('some_event 事件触发'); 
}); 

// 事件  事件驱动程序  

//1 秒后控制台输出了 'some_event 事件触发'
setTimeout(function() { 
	event.emit('some_event'); 
}, 1000); 