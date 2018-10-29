// const handledata =require('../util')
// const car_model =require('../models/car_model')


// //list控制器

// const list=async (req,res)=>{
//     res.set('content-type','application/json; charset=utf8')
//     let _data=await car_model.list()
   
//     handledata(_data,res,'car')
//     return res.json({
//         msg:"list"
//     })
// }

// //保存
// const save = async (res,req) => {
//     res.set('content-type','application/json; charset=utf8')
//     let _data=await car_model.save()
    
//     handledata(_data,res,'car')
//     return res.json({
//         msg:"save"
//     })
// }
// var svgCaptcha = require('svg-captcha'); 
// exports.getCode = (req, res) => {
//     var codeConfig = { 
//          size: 5,// 验证码长度 
//          ignoreChars: '0o1i', // 验证码字符中排除 0o1i 
//          noise: 2, // 干扰线条的数量 
//          height: 44 
//         } 
//     var captcha = svgCaptcha.create(codeConfig); 
//     req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码 
//     var codeData = { img:captcha.data } 
//     res.send(codeData);
//  }
    
// module.exports ={
//     list,
//     save
// }