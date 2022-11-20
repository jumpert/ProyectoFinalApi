const express = require('express');
require("dotenv").config();
const shoppingCartRoutes = require('./routes/shoppingCart');
const itemRoutes = require('./routes/item');

// Connections
const app = express();
require('./dataBase');
const port = process.env.PORT || 3000;
const version = "v1"; // API version

// Middleware
app.use(express.json());
app.use('/api/'+version, shoppingCartRoutes);
app.use('/api/'+version, itemRoutes);




// Routes
app.get('/', (req, res, next) => {
    res.send('Welcome to the Shopping Cart APP');
});



app.listen(port, () => {
    console.log(`Server running on port`, port);
});