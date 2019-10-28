const mongoose = require('mongoose')

function dbConnect() {
    mongoose.connect('mongodb://localhost/kumba_africa')
        .then(() => console.log('Connected tp MongoDB'))
        .catch((err => console.error('Could not connect to MongoDB', err)));
}


module.exports = dbConnect()
