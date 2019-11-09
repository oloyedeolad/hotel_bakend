var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[environment];
const knex = require('knex')(config);

module.exports = require('bookshelf')(knex);
