const _ = require('lodash');
const User = require('../models/user').User;
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');





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


module.exports.signInUser = async function(req, res) {
    const {error} = validateLogin(req.body);
    if (error) { return  res.status(400).send(error.details[0].message)}

    const user = await new User({'email': req.body.email}).fetch({require:true});
    if (!user) { return  res.status(400).send("wrong user name or password");}
    const validPassword = await bcrypt.compare(req.body.password, user.attributes.password);
    if(!validPassword) { return  res.status(400).send("Wrong Username or passwor");}

    const token = jwt.sign({_id: user.id}, config.get('jwtPrivateKey'));
    res.send({"token": token});
};

function validateLogin(req) {
    const schema = {
        email: Joi.string().min(5).max(255).email().required(),
        password: Joi.string().min(5).max(255).required(),
    };

    return Joi.validate(req, schema);
}


