const bcrypt = require('bcrypt')

const none = () =>{}

    const handledata = (data,res,template,callbacks = {})=>{
        let { success, fail} ={
            success:callback.success ||none,
            fail:callbacks.fail||none
        }
        if(!data) {
            fail()
            response.call(res,{ template , code: 500, data:"发生了不可预知的错误"})
            
        }else {
            success()
            response.call(res,{ template , code: 500, data: JSON.stringify(data)})
        }
    }


//响应

const response = function({template,code,data}){
    this.render(template,{
        code: code,
        data:data
    })
}

// const  hash = (text) => {
//     const saltRounds =10;
//     return new Promise((resolve) => {
//         bcrypt.genSalt(saltRounds,function(err,salt){
//             bcrypt.hash(text,salt,function(err,hash){
//                 resolve(hash)
//             })
//         })
//     })
// }

module.exports ={
    handledata
    // hash
}