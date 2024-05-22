const Task = require("../models/taskmodel")

const getusers=async(req,res)=>{
    try{
        const data=await Task.find(req.query);
        res.status(200).json({
            message:"data fetched successfully",
            data:data
        })
    }

    catch(ex){
        console.log(ex);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports=getusers;