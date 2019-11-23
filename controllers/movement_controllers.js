const { Movement } = require('../models/movement');

exports.createMovement = function (req, res) {
    Movement.forge(req.body).save()
        .then((movement) => res.status(201).send(movement))
        .catch((error) => res.status(400).send(error));
};

exports.getAllMovements = function (req, res) {
    Movement.fetchAll()
        .then((movement) => res.status(200).send(movement))
        .catch((error) => res.status(400).send(error));
};

exports.getOneMovement = function (req, res) {
    new Movement({ id: req.params.id }).fetch()
        .then((movement) => res.status(200).send(movement))
        .catch((error) => res.status(400).send(error));
};

exports.updateMovement = function (req, res) {
    Movement({ id: req.params.id }).fetch()
        .then((movement) => movement.save(req.body).then((newMovement) => res.status(200).send(newMovement))
            .catch((error) => res.status(400).send('Update failed')))
        .catch((error) => res.status(400).send(200));
};
