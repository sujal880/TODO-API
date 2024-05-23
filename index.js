const express=require('express');
require('./config/db');
const router=require('./app');
const app=express();

app.use(express.json());
app.use(router);

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server is Running properly"
    })
})


app.listen(4000,()=>{
    console.log('Server is Running on PORT 4000');
})