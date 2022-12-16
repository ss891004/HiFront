function execute(someFunction, value) {
  someFunction(value);
}

//在execute接受第一个参数的地方直接定义了我们准备传递给execute的函数。
//用这种方式甚至不用给这个函数起名字，这也是为什么它被叫做匿名函数
execute(function(word){ console.log(word) }, "Hello");