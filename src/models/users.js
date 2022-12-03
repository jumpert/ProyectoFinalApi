const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: { 
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        minlenght: 3,
    },
    email: {
        type: String,
        required: true,
        minLenght: 8,
    },
    password: {
        type: String,
        required: true,
        minlenght: 6,
    },
    profileImg: {
        type: String,
        required: true,
        minlenght: 10,
    },
    cart: {
        type: [Number],  
        required: false
    }
})
/*
userSchema.methods.regrats = function() {
    console.log('Sorry, ' + this.firstName + ' ' + this.email + '!');
}

userSchema.query.byName = function(name) {
    return this.where({ firstName: new RegExp(name, 'e') });
}
*/
module.exports = mongoose.model('User', userSchema);