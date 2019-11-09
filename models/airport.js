const bookshelf = require('../db/bookshelf');

const Airport = bookshelf.model('Airport', {
    tableName: 'airports'
});

module.exports.Airport = Airport;
