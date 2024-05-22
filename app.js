const express=require('express');
const approutes=require('./src/routes/userroutes');
const allroutes=express.Router();

allroutes.use('/todo',approutes);


module.exports=allroutes;