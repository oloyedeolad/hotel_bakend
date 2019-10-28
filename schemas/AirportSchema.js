const mongoose = require('mongoose');


const AirportSchema = new mongoose.Schema({
    airport_code: String,
    airport_name: String,
});

module.exports = mongoose.model('Airport', AirportSchema);

