// mongod  mongo  show dbs

//  连接数据库

const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });
//连接数据库
var db = mongoose.connection;//数据库的连接对象
db.on('error', console.error.bind(console, 'connection error:'));
//监听open方法
db.once('open', function() {
  console.log('db ok')
});


// scheme 对象

// 创建一个和集合相关的schema 对象  类似表头

// 获取schema对象
var userSchema = new mongoose.Schema({
   us  : {type:String,required:true},
   ps  : {type:String,required:true},
   age : Number,
   sex : {type:Number,default: 0}
});

// 将schema 对象转化为数据模型
var User = mongoose.model('user', userSchema);//该数据对象和集合关联('集合名',schema对象)
// // 操作数据库
// User.insertMany({us:'wangyi',ps:'123',age:16})
// .then((data)=>{
//   console.log(data)
//   console.log('插入成功')
// })
// .catch((err)=>{
//   console.log('插入失败')
// })
//查询
// User.find({age:17})
// .then((data)=>{
//   console.log(data)
//   console.log('查询成功')
// })
// .catch((err)=>{
//   console.log('查询失败')
// })
User.remove()
.then((data)=>{
  console.log(data)
  console.log('del 成功')
})
.catch((err)=>{
  console.log('查询失败')
})