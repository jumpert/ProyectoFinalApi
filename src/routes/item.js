const express = require('express');
const itemSchema = require('../models/item');

const itemRouter = express.Router();

//get all items
itemRouter.get('/items', (req, res) => {
    itemSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

module.exports = itemRouter;