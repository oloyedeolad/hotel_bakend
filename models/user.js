const bookshelf = require('./bookshelf');


// Defining models
const User = bookshelf.model('User', {
    tableName: 'users'
})
