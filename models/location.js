const bookshelf = require('../db/bookshelf');

const Location = bookshelf.model('Location', {
    tableName: 'locations'
});

module.exports.Location = Location;
