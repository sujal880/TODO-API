const express=require('express');
const registeruser = require('../controllers/registercontroller');
const addtodo = require('../controllers/todocontroller');
const getusers = require('../controllers/getuserdatacontroller');
const updateTask = require('../controllers/updatedatacontroller');
const deletetask = require('../controllers/deletetaskcontroller');
const signIn = require('../controllers/signincontroller');
const approutes=express.Router();

approutes.post('/signup',registeruser);
approutes.post('/addtodo',addtodo);
approutes.get('/gettask/:user',getusers);
approutes.put('/updatetask/',updateTask);
approutes.delete('/deletetask',deletetask);
approutes.post('/signin',signIn);

module.exports=approutes;
