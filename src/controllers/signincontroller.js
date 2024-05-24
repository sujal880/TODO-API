const bcrypt=require('bcrypt');
const User = require('../models/usermodel');
const jwt=require('jsonwebtoken');
const secretkey="*****";

const signIn=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const check=await User.findOne({email});
        if(!check){
            res.status(400).json({
                message:"No User Found"
            })
        }

        const data=jwt.sign({
            userId:User._id,
            email:User._email,
            username:User._username
        },secretkey,{expiresIn:'1h'})
        res.status(200).json({
            message:"login successfully",
            data:data,
            response:{
                email:check.email
            }
        })
    }

    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=signIn;