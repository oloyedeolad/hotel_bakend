const bookshelf = require('../db/bookshelf');
const AirportPartner= require('airport_partner');

const Airport = bookshelf.model('Airport', {
    tableName: 'airports',
    airportPartner() {
        return this.belongsTo(AirportPartner);
    }
});

module.exports.Airport = Airport;
