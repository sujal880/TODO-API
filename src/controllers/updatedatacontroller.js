const Task = require("../models/taskmodel");

const updateTask=async(req,res)=>{
    const {id}=req.query;
    const updates=req.body;

    try{
    
        const updatedtask=await Task.findByIdAndUpdate(id,updates,{new:true});
        if(!updatedtask){
            res.status(400).json({
                message:"Task Not Found"
            })
        }
        res.status(200).json({
            message:"task update successfully",
            data:updatedtask
        })
    }

    catch(ex){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports=updateTask;