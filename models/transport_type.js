const bookshelf = require('../db/bookshelf');

const Transport_Type = bookshelf.model('Transport_Type', {
    tableName: 'transport_type'
});

module.exports.Transport_Type = Transport_Type;
