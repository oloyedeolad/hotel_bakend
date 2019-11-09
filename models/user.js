const bookshelf = require('../db/bookshelf');
const Movement = require('./movement');
const SimBooking = require('./sim_booking');


// Defining models
module.exports.User = bookshelf.model('User', {
    tableName: 'users',

    movement(){
        return this.hasMany(Movement)
    },

    simBooking() {
        return this.hasMany(SimBooking);
    },

});




