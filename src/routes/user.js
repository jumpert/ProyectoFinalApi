const express = require('express');
const userRouter = express.Router();
const {getUser, getUsers} = require('../controllers/user.controller');

// get all user from the database
userRouter.get('/users', getUsers); 

// get a user
userRouter.get('/users/:id', getUser);

module.exports = userRouter;