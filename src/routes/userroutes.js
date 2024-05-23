const express=require('express');
const registeruser = require('../controllers/registercontroller');
const addtodo = require('../controllers/todocontroller');
const getusers = require('../controllers/getuserdatacontroller');
const updateTask = require('../controllers/updatedatacontroller');
const deletetask = require('../controllers/deletetaskcontroller');
const approutes=express.Router();

approutes.post('/signup',registeruser);
approutes.post('/addtodo',addtodo);
approutes.get('/gettask/:user',getusers);
approutes.put('/updatetask/:_id',updateTask);
approutes.delete('/deletetask',deletetask);


module.exports=approutes;