const express = require('express');
const sCSchema = require('../models/users');

const sCRouter = express.Router();

const userId = 0;

//get all items
sCRouter.get('/shoppingCart', (req, res) => {
    sCSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// get a item from the database
sCRouter.get('/shoppingCart/:id', (req, res) => {
    sCSchema
        .findById(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// add cartItems to the database
sCRouter.put('/shoppingCart/:id', (req, res) => {
    const {id} = req.params;
    const {cart} = req.body;  
    sCSchema
        .updateOne( {_id: 1}, {$addToSet: {cart: id}})
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// delete cartItem to the database
sCRouter.delete('/shoppingCart/:id', (req, res) => {
    const {id} = req.params;
    sCSchema
        .findOneAndUpdate( {_id: userId}, {$pull: {cart: 'id'}})
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});



module.exports = sCRouter;