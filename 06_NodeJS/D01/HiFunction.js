function say(word) {
    console.log(word);
  }
  
  function execute(someFunction, value) {
    someFunction(value);
  }

  //把say函数作为execute函数的第一个变量进行了传递，
  //这里返回的不是say的返回值，而是say本身。
  //这样say变成了execute中的本地变量someFunction，execute可以通过调用someFunction()来使用say函数
  execute(say, "Hello");