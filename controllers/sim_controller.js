const { Sim } = require('../models/sim');

exports.createSim = function (req, res) {
    Sim.forge(req.body).save()
        .then((sim) => res.status(201).send(sim))
        .catch((error) => res.status(400).send(error));
};

exports.getAllSims = function (req, res) {
    Sim.fetchAll()
        .then((sim) => res.status(200).send(sim))
        .catch((error) => res.status(400).send(error));
};

exports.getOneSim = function (req, res) {
    new Sim({ id: req.params.id }).fetch()
        .then((sim) => res.status(200).send(sim))
        .catch((error) => res.status(400).send(error));
};

exports.updateSim = function (req, res) {
    Sim({ id: req.params.id }).fetch()
        .then((sim) => sim.save(req.body).then((newSim) => res.status(200).send(newSim))
            .catch((error) => res.status(400).send('Update failed')))
        .catch((error) => res.status(400).send(200));
};
