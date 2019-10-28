const mongoose = require('mongoose');

const SimSchema = new mongoose.Schema({
    carrier: String,
    price_date: String,
    price_call: String,
    percentage_data_increase: Number,
    percentage_call_increase: Number,
    delivery_fee: Number
})

module.exports = mongoose.model('Sim', SimSchema);
