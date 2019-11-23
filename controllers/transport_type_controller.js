const { TransportType } = require('../models/transport_type');

exports.createTransportType = function (req, res) {
    TransportType.forge(req.body).save()
        .then((transportType) => res.status(201).send(transportType))
        .catch((error) => res.status(400).send(error));
};

exports.getAllTransportTypes = function (req, res) {
    TransportType.fetchAll()
        .then((transportType) => res.status(200).send(transportType))
        .catch((error) => res.status(400).send(error));
};

exports.getOneTransportType = function (req, res) {
    new TransportType({ id: req.params.id }).fetch()
        .then((transportType) => res.status(200).send(transportType))
        .catch((error) => res.status(400).send(error));
};

exports.updateTransportType = function (req, res) {
    TransportType({ id: req.params.id }).fetch()
        .then((transportType) => transportType.save(req.body).then((newtransportType) => res.status(200).send(newtransportType))
            .catch((error) => res.status(400).send('Update failed')))
        .catch((error) => res.status(400).send(200));
};
