const express = require('express');
require("dotenv").config();
const cors = require('cors');
const morgan = require('morgan');
const shoppingCartRoutes = require('./routes/shoppingCart');
const itemRoutes = require('./routes/item');
const userRoutes = require('./routes/user');

// Connections
const app = express();
require('./dataBase');
const port = process.env.PORT || 3000;
const version = 'v1';

// Middleware
app.use(morgan('dev'))
app.use(express.json());
app.use(cors());
app.use('/api/' + version, shoppingCartRoutes);
app.use('/api/' + version, itemRoutes);
app.use('/api/' + version, userRoutes);

// Routes
app.get('/', (req, res, next) => {
    res.send('Welcome to the Shopping Cart API');
});


app.listen(port, () => console.log('MongoDB listening on port', port));