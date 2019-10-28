const mongoose = require('mongoose');

const TransportTypeSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('TransportType', TransportTypeSchema);
