const { AirportPartner } = require('../models/airport_partner');

exports.createAirportPartner = function (req, res) {
    AirportPartner.forge(req.body).save()
        .then((airportPartner) => res.status(201).send(airportPartner))
        .catch((error) => res.status(400).send(error));
};

exports.getAllAirportPartners = function (req, res) {
    AirportPartner.fetchAll()
        .then((airportPartner) => res.status(200).send(airportPartner))
        .catch((error) => res.status(400).send(error));
};

exports.getOneAirportPartner = function (req, res) {
    new AirportPartner({ id: req.params.id }).fetch()
        .then((airportPartner) => res.status(200).send(airportPartner))
        .catch((error) => res.status(400).send(error));
};

exports.updateAirportPartner = function (req, res) {
   AirportPartner({ id: req.params.id }).fetch()
        .then((airportPartner) => airportPartner.save(req.body).then((newairportPartner) => res.status(200).send(newairportPartner))
            .catch((error) => res.status(400).send('Update failed')))
        .catch((error) => res.status(400).send(200));
};
