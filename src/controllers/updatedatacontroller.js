const Task = require("../models/taskmodel");

const updateTask=async(req,res)=>{
    

    try{

        const updatedtask=await Task.findByIdAndUpdate(req.params,{
            $set:req.body
        });
        console.log(`updated tasks ${updatedtask}`);
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
        console.log(ex);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports=updateTask;