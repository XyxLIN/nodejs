const user_model = require('../models/login_model')

const {handleData} = require('../util')

const register = async (req,res,next) => {
    // let _judeg_result = await user_model.judegUsername(req.body.username)
    // console.log(req.body.username)
    // if(!_judeg_result.length){
    //     let _data = await user_model.register(req.body)
    //     handleData(_data,res,'user')
    // }else{
    //     res.render ('user',{
    //         code:201,
    //         data:JSON.stringify('用户名已存在')
    //     })
    // }
}

// const login= async (req,res,next)=>{
//     let _judeg_result = await user_model.judegeUsername(req.body.username)

//     if(!!_judeg_result.length){
//         let _data = await user_model.login(req.body.password,_judeg_result[0])
//         if (_data) {
//             res.render('user', { code: 200, data: JSON.stringify('success') })
//         } else {
//             res.render('user', { code: 203, data: JSON.stringify('密码错误') })
//         }
            
//     } else { // 如果没有这个用户
//         res.render('user', {
//             code: 202,
//             data: JSON.stringify('用户名不存在')
//         })
//     }

// } 

module.exports ={
    register,
    // login
}


