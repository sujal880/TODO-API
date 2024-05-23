const User = require("../models/usermodel");
const bcrypt=require('bcrypt');
const registeruser=async(req,res)=>{
    try{
        const {email,password,username}=req.body;
        if(!email || !password || !username){
            res.status(400).json({
                message:"Enter Required Field's"
            })
        }

        const existinguser=await User.findOne({email});
        if(existinguser){
            res.status(400).json({
                message:"user already exists"
            })
        }

        const hashedpassword=await bcrypt.hash(password,10);
        const newuser=new User({email:email,password:hashedpassword,username:username});
        await newuser.save();
        res.status(200).json({
            message:"register successfully",
            data:newuser
        })
    

    }

    catch(ex){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports=registeruser;