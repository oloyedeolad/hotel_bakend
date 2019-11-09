const bookshelf = require('../db/bookshelf');

const AirportPartner = bookshelf.model('AirportPartner', {
    tableName: 'airport_partner'
});

module.exports.AirportPartner = AirportPartner;
