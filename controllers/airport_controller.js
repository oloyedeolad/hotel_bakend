const _ = require('lodash');
const Airport = require('../models/airport').Airport;
const Joi = require('joi');
const config = require('config');




//create Hotel
exports.create_airport =  function (req, res) {
    Airport.forge(req.body).save()
        .then((user) => {
            return res.status(200).send(user)
        })
        .catch((error) =>{
            return res.status(400).send(error);
        });
};

exports.get_all_airports = function (req, res) {
    Airport.fetchAll()
        .then((airports) => {
            return res.status(200).send(airports)
        }).catch((error) => {
        return res.status(400).send(error);
    })
};


