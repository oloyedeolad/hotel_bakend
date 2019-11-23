const { TransportPartner } = require('../models/transport_partner');

exports.createTransportPartner = function (req, res) {
    TransportPartner.forge(req.body).save()
        .then((transportPartner) => res.status(201).send(transportPartner))
        .catch((error) => res.status(400).send(error));
};

exports.getAllTransportPartners = function (req, res) {
    TransportPartner.fetchAll()
        .then((transportPartner) => res.status(200).send(transportPartner))
        .catch((error) => res.status(400).send(error));
};

exports.getOneTransportPartner = function (req, res) {
    new TransportPartner({ id: req.params.id }).fetch()
        .then((transportPartner) => res.status(200).send(transportPartner))
        .catch((error) => res.status(400).send(error));
};

exports.updateTransportPartner = function (req, res) {
    TransportPartner({ id: req.params.id }).fetch()
        .then((transportPartner) => transportPartner.save(req.body).then((newTransportPartner) => res.status(200).send(newTransportPartner))
            .catch((error) => res.status(400).send('Update failed')))
        .catch((error) => res.status(400).send(200));
};
