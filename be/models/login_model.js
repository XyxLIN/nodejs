
const mongoose=require('../util/mongoose')
const bcrypt= require('bcrypt')
const {hash} = require('../util')
var UserModel = mongoose.model('users',new mongoose.Schema({
    username:String,
    password:String,
    tel:Number,
    loginTime:String
}));

const register = async ({username,password,tel}) => {
    let _password =await hash (password)

    return new UserModel({
        username,
        tel,
        password:_password,
        registerTime:Date.now()
    })
    .save()
    .then((results) => {
        let { _id,username,tel}=results
        return {_id,username,tel}
    })
    .cath(()=>{
        return false
    })
}

// const login= (pwd,{password}) =>{
//     return  bcrypt.compareSync(pwd,password)
// }

// const judegeUsername= async (username) =>{
//     return await UserModel
//     .find({ username })
//     .then((results) => {
//         return results
//     })
//     .catch(() => {
//         return false
//     })
// }

module.exports={
    register,
    // login,
    // judegeUsername
}