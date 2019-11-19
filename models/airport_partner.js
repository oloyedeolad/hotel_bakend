const bookshelf = require('../db/bookshelf');
const Airport = require('./airport');

const AirportPartner = bookshelf.model('AirportPartner', {
    tableName: 'airport_partner',
    airport() {
        return this.belongsTo(Airport);
    }
});

module.exports.AirportPartner = AirportPartner;
