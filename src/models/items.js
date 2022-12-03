const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    _id: {
        type: Number,
        AutoIncrement: true,
        required: true,
    },
    type: {
        type: String,
        required: true,
        lowercase: true,
        minlenght: 4,
    },
    imageSrc: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        minlenght: 3,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    description: {
        type: String,
        required: true,
        minlenght: 10,
    }
});


module.exports = mongoose.model('Item', itemSchema);