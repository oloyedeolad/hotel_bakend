const { Airport } = require('../models/airport');


exports.create_airport = function (req, res) {
  Airport.forge(req.body).save()
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(400).send(error));
};

exports.get_all_airports = function (req, res) {
  Airport.fetchAll()
    .then((airports) => res.status(200).send(airports)).catch((error) => res.status(400).send(error));
};


exports.get_one_airport = function (req, res) {
  new Airport({ id: req.params.id }).fetch()
    .then((airport) => res.status(200).send(airport))
    .catch((error) => res.status(400).send(error));
};
