const express = require('express');
const userSchema = require('../models/user');

const userRouter = express.Router();

// get all users
userRouter.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
    
});



module.exports = userRouter;