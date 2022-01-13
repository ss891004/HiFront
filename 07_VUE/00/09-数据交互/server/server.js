const Koa = require("koa");
const parser = require("koa-parser"); //获取post请求数据
const router = require("koa-router")(); //设置路由
const cors = require('koa2-cors'); //允许跨域
const app = new Koa();

app.use(cors());
app.use(parser());
app.use(router.routes());

//模拟数据库
const fruitList = ["香蕉", "苹果", "鸭梨"];

//get方法：获取水果列表
router.get("/fruits", async ctx => {
    ctx.body = fruitList;
})
//post方法：添加水果
router.post("/fruits", async ctx => {
    let fruit = ctx.request.body.fruit;
    fruitList.push(fruit);
    ctx.body = true;
})
//delete方法：删除水果列表
router.delete("/fruits/:index", async ctx => {
    let index = ctx.params.index;
    fruitList.splice(index, 1);
    ctx.body = true;
})

app.listen(3000, () => {
    console.log("server is running")
})