const Task = require("../models/taskmodel");

const deletetask=async(req,res)=>{
    try{
        const id=req.query;
    const deletedtask=await Task.findByIdAndDelete(id);
    if(!deletedtask){
        res.status(400).json({
            message:"task not found" 
        })
    }

    res.status(200).json({
        message:"data deleted successfully",
        data:deletedtask
    })
    }

    catch(ex){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports=deletetask;