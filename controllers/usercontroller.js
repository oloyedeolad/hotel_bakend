const _ = require('lodash');
const User = require('../models/user').User;
const bcrypt = require('bcrypt');





module.exports.create_user =  async function(req, res) {

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    User.forge(req.body).save()
        .then((user) => {
            user = _.pick(user, ['id', 'attributes.name', 'attributes.email']);
           return res.status(200).send(user);
        })
        .catch((error) =>{
            return res.status(400).send(error);
        });
};



