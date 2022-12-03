const express = require('express');
const {getItems, getItem, getItemsByCategory} = require('../controllers/items.controller');

const itemRouter = express.Router();

//get all items
itemRouter.get('/items',  getItems);
    

// get a item from the database
itemRouter.get('/items/:id', getItem);

// get items by type
itemRouter.get('/items/type/:type', getItemsByCategory);

module.exports = itemRouter;