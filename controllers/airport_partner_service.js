const { AirportPartnerService } = require('../models/airport_partner_airport');

exports.createAirportPartnerService = function (req, res) {
    AirportPartnerService.forge(req.body).save()
        .then((airportPartnerService) => res.status(201).send(airportPartnerService))
        .catch((error) => res.status(400).send(error));
};

exports.getAllAirportPartnerServices = function (req, res) {
    AirportPartnerService.fetchAll()
        .then((airportPartnerService) => res.status(200).send(airportPartnerService))
        .catch((error) => res.status(400).send(error));
};

exports.getOneAirportPartnerService = function (req, res) {
    new AirportPartnerService({ id: req.params.id }).fetch()
        .then((airportPartnerService) => res.status(200).send(airportPartnerService))
        .catch((error) => res.status(400).send(error));
};

exports.updateAirportPartnerService = function (req, res) {
    AirportPartnerService({ id: req.params.id }).fetch()
        .then((airportPartnerService) => airportPartnerService.save(req.body).then((newAirportPartnerService) => res.status(200).send(newAirportPartnerService))
            .catch((error) => res.status(400).send('Update failed')))
        .catch((error) => res.status(400).send(200));
};
