const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransportPartnerSchema = new mongoose.Schema({
    name: String,
    contact_details: String,
    base_fee: String,
    km_fee: String
});

module.exports = mongoose.model('TransportPartner', TransportPartnerSchema);
