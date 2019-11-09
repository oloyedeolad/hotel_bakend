const bookshelf = require('../db/bookshelf');
const User = require('user');
const Sim = require('sim');

const SimBooking = bookshelf.model('SimBooking', {
    tableName: 'sim_bookings',

    user() {
        return this.belongsTo(User);
    },

    sim() {
        return this.belongsTo(Sim);
    }
});

module.exports.SimBooking = SimBooking;
