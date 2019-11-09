const bookshelf = require('../db/bookshelf');
const Airport_Partner = require('airport_partner');
const Airport  = require('airport');

const AirportPartnerAirport = bookshelf.model('Transport_partner', {
    tableName: 'airport_partner_airport',

    airportPartner() {
        return this.belongsTo(Airport_Partner);
    },

    airport() {
        return this.belongsTo(Airport);
    }
});

module.exports.AirportPartnerAirport = AirportPartnerAirport;
