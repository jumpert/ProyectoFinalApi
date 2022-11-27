const express = require('express');
const userSchema = require('../models/users');

const userRouter = express.Router();
/*
// get all users
userRouter.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});*/

// get a user from the database
userRouter.get('/users/:id', (req, res) => {
    userSchema
        .findById(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// create a new user
userRouter.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
    
});


module.exports = userRouter;