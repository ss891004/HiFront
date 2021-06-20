const express = require('express')
const router = express.Router()
const foodModel = require('../db/model/foodModel')

/**
 * @api {post} /food/add  添加菜品
 * @apiName addfood
 * @apiGroup Food
 *
 * @apiParam {String} name  用户名.
 * @apiParam {String} price 用户密码.
 * @apiParam {String} desc 验证码.
 * @apiParam {String} typename  用户名.
 * @apiParam {String} typeid  用户名.
 * @apiParam {String} img  用户名.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/add', (req, res) => {
  // let data={
  //   name  : '火山飘雪',
  //   price : '9999',
  //   desc : '超好吃',
  //   typename:'凉菜',
  //   typeid:1,
  //   img:'/public/image/img3.jpg'
  // }
  //请求的body中设置参数， 可以是如上的json字符串
  let { name, price, desc, typename, typeid, img } = req.body
  // 判断参数是否正确
  foodModel.insertMany({ name, price, desc, typename, typeid, img })
    .then((data) => {
      res.send({ err: 0, msg: '添加成功' })
    })
    .catch(() => {
      res.send({ err: -1, msg: '添加失败' })
    })
})


/**
 * @api {post} /food/getInfoByType 分类查询
 * @apiName getInfoByType
 * @apiGroup Food
 *
 * @apiParam {Number} typeid  用户名.

 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/getInfoByType', (req, res) => {
  let { typeid } = req.body
  foodModel.find({ typeid })
    .then((data) => {
      res.send({ err: 0, msg: '查询ok', list: data })
    })
    .catch(() => {
      res.send({ err: -1, msg: '查询失败' })
    })
})

/**
 * @api {post} /food/getInfoByKw 关键字查询
  * @apiName getInfoByKw
 * @apiGroup Food
 *
 * @apiParam {Number} kw  关键字.

 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.post('/getInfoByKw', (req, res) => {
  //  $set  $gte   $or $and  $regex   regexp
  let { kw } = req.body
  let reg = new RegExp(kw) // 创建一个正则表达式 匹配关键字
  // foodModel.find({age:{$gte:16}})
  // foodModel.find({name:{$regex:reg}}) 名字模糊
  console.log(kw)
  foodModel.find({ $or: [{ name: { $regex: reg } }, { desc: { $regex: reg } }] }) // 名字 以及描述
    .then((data) => {
      res.send({ err: 0, msg: '查询ok', list: data })
    })
    .catch(() => {
      res.send({ err: -1, msg: '查询失败' })
    })
})


router.post('/del', (req, res) => {
  let { _id } = req.body
  //单个删除  多个删除
  foodModel.remove({ _id: id })
  //  foodModel.remove({ _id: [id1,id2,id3]] })  多个删除
    .then((data) => {
      res.send({ err: 0, msg: 'del ok' })
    })
    .catch(() => {
      res.send({ err: -1, msg: '删除失败' })
    })
})


router.post('/update', (req, res) => {
  let { name, price, desc, typename, typeid, img, _id } = req.body
  console.log(req.body)
  console.log({ name, price, desc, typename, typeid, img, _id })
  foodModel.updateOne({ _id }, { name, price, desc, typename, typeid, img })

    .then((data) => {
      res.send({ err: 0, msg: '修改 ok' })
    })
    .catch(() => {
      res.send({ err: -1, msg: '修改失败' })
    })

})

/**
 * @api {post} /food/getInfoByPage 分页查询
  * @apiName getInfoByPage
 * @apiGroup Food
 *
 * @apiParam {Number} pageSize  每页数据条数.
* @apiParam {Number}  page  那一页.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.post('/getInfoByPage', (req, res) => {
  let pageSize = req.body.pageSize || 2 //设置默认值
  let page = req.body.page || 1
  foodModel.find().limit(Number(pageSize)).skip(Number((page - 1) * pageSize))
    .then((data) => {
      res.send({ err: 0, msg: '查询ok', list: data })
    })
    .catch(() => {
      res.send({ err: -1, msg: '查询失败' })
    })

})



module.exports = router
