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
    },
    imageSrc: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('Item', itemSchema);