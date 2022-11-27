const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: { 
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    cart: {
        type: [String],
        required: false
    }
})

module.exports = mongoose.model('User', userSchema);