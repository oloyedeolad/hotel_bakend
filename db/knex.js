var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')('production');

module.exports = require('knex')(config);
