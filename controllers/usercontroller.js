const User = require('../models/user').User;
var crypto = require('crypto');




module.exports.create_user = function(req, res) {

    req.body.password =
    User.forge(req.body).save()
        .then((user) => {
           return res.status(200).send(user);
        })
        .catch((error) =>{
            return res.send(400).send(error);
        });
};



