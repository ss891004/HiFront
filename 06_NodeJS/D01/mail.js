"use strict";
const nodemailer = require("nodemailer");

// 创建发送邮件的对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",//发送方邮箱 qq 通过lib/well-know/service.json
    port: 465, //端口号
    secure: true, // true for 465, false for other ports
    auth: {
      user: '352186537@qq.com', // 发送方的邮箱地址
      pass: 'kxlfqavqcooabgfd' //  smtp 验证码
    }
  });
 // 邮件信息
 let  mailobj={
  from: '"Fred Foo 👻" <352186537@qq.com>', // sender address
  to: "352186537@qq.com", // list of receivers
  subject: "1902", // Subject line
  text: "您的验证码是12345678，有效期五分钟", // plain text body
  //html: "<b>Hello world?</b>" // html body
}
//发送邮件

//判断邮件是否发送成功  
  transporter.sendMail(mailobj,(err,data)=>{
    console.log(err)
    console.log(data)
  });


  // 封装一个自定义模块，向固定的邮箱发送固定的信息




