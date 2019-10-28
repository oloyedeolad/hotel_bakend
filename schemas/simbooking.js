const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SimBookingSchema = new mongoose.Schema({
    sim_id: {type: Schema.Types.ObjectId, ref: 'Sim'},
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    total_price: {}
});

module.exports = mongoose.model('SimBooking', SimBookingSchema);

