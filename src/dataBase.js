const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


/*
// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB to Connected'))
    .catch(err => console.log(err));
    */
