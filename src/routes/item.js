const express = require('express');
const itemSchema = require('../models/items');

const itemRouter = express.Router();

//get all items
itemRouter.get('/items', (req, res) => {
    itemSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

// get a item from the database
itemRouter.get('/items/:id', (req, res) => {
    itemSchema
        .findById(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});



module.exports = itemRouter;