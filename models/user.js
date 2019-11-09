const bookshelf = require('../db/bookshelf');
const Movement = require('movement');


// Defining models
const User = bookshelf.model('User', {
    tableName: 'users',

    movement(){
        return this.hasMany(Movement)
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


