const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  TransportBookingSchema = new mongoose.Schema({
    transport_id: {type: Schema.Types.ObjectId, ref: 'Transport'},
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    transport_type_id: { type: Schema.Types.ObjectId, ref: 'TransportType' }

});

module.exports = mongoose.model('TransportBooking', TransportBookingSchema);
