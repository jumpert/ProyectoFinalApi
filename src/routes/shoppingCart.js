const express = require('express');
const sCSchema = require('../models/item');

const sCRouter = express.Router();

//get all items
sCRouter.get('/shoppingCart', (req, res) => {
    sCSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

module.exports = sCRouter;