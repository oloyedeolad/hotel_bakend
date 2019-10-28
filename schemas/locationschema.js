const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  LocationSchema = new mongoose.Schema({
    location_name: String
})

module.exports = mongoose.model('Location', LocationSchema);
