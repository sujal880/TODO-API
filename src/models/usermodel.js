const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:String,
    username:String
});

const User=mongoose.model('users',userSchema);
module.exports=User;