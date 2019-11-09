const bookshelf = require('../db/bookshelf');

const Sim = bookshelf.model('Sim', {
    tableName: 'sims'
});

module.exports.Sim = Sim;
