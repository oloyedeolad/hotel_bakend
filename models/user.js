const bookshelf = require('../db/bookshelf');
const Movement = require('movement');
const SimBooking = require('sim_booking');


// Defining models
const User = bookshelf.model('User', {
    tableName: 'users',

    movement(){
        return this.hasMany(Movement)
    },

    simBooking() {
        return this.hasMany(SimBooking);
    },

    initialize() {
        this.on('saving', (model) => {
            return User.forge({email: model.get('email')}).fetch().then((user) => {
                if (user) throw new Error('That email address already exists')
            })
        })
    }
});

module.exports.User = User;


