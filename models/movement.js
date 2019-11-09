const bookshelf = require('../db/bookshelf');
const Transport_Partner = require('transport_partner');
const Location = require('location');
const User = require('user');
const TransportType = require('transport_type');

const Movement = bookshelf.model('Movement', {
    tableName: 'movement',

    transportPartner () {
        return this.belongsTo(Transport_Partner);
    },

    location () {
        return this.belongsTo(Location);
    },

    user() {
        return this.belongsTo(User);
    },

    transportType() {
        return this.belongsTo(TransportType);
    }
});

module.exports.Movement = Movement;
