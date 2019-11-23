const { SimBooking } = require('../models/sim_booking');

exports.createSimBooking = function (req, res) {
    SimBooking.forge(req.body).save()
        .then((simBooking) => res.status(201).send(simBooking))
        .catch((error) => res.status(400).send(error));
};

exports.getAllSimBookings = function (req, res) {
    SimBooking.fetchAll()
        .then((simBooking) => res.status(200).send(simBooking))
        .catch((error) => res.status(400).send(error));
};

exports.getOneSimBooking = function (req, res) {
    new SimBooking({ id: req.params.id }).fetch()
        .then((movement) => res.status(200).send(movement))
        .catch((error) => res.status(400).send(error));
};

exports.updateSimBooking = function (req, res) {
    SimBooking({ id: req.params.id }).fetch()
        .then((simBooking) => simBooking.save(req.body).then((newSimBooking) => res.status(200).send(newSimBooking))
            .catch((error) => res.status(400).send('Update failed')))
        .catch((error) => res.status(400).send(200));
};
