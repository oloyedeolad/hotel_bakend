const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovementSchema = new mongoose({
    userID: { type: Schema.Types.ObjectId, ref: 'User'},
    transport_partnerID: { type: Schema.Types.ObjectId, ref: 'TransportPartner'},
    date: { type: Date, default: Date.now },
    destinationID: { type: Schema.Types.ObjectId, ref: 'Location' },
    longitude: Number,
    latitude: Number
});

module.exports = mongoose.model('Movement', MovementSchema);
