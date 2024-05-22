const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    title:String,
    createdAt:{
        type:Date,
        default:Date.now
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },

    status:{
        type:Boolean,
        default:false
    }
})

const Task=mongoose.model('tasks',taskSchema);

module.exports=Task;