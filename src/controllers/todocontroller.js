const Task = require("../models/taskmodel");

const addtodo=async(req,res)=>{
    try{
        const data=req.body;
        const mdata=new Task(data);
        const response=await mdata.save();
        res.status(200).json({
            message:"task added successfully",
            data:response
        })
    }
    catch(ex){
        console.log(ex);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports=addtodo;