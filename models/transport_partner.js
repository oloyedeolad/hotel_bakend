const bookshelf = require('../db/bookshelf');

const Transport_Partner = bookshelf.model('Transport_partner', {
    tableName: 'transport_partner'
});

module.exports.Transport_Partner = Transport_Partner;
