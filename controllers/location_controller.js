const { Location } = require('../models/location');

exports.createLocation = function (req, res) {
  Location.forge(req.body).save()
    .then((location) => res.status(201).send(location))
    .catch((error) => res.status(400).send(error));
};

exports.getAllLocations = function (req, res) {
  Location.fetchAll()
    .then((locations) => res.status(200).send(locations))
    .catch((error) => res.status(400).send(error));
};

exports.getOneLocation = function (req, res) {
  new Location({ id: req.params.id }).fetch()
    .then((location) => res.status(200).send(location))
    .catch((error) => res.status(400).send(error));
};

exports.updateLocation = function (req, res) {
  Location({ id: req.params.id }).fetch()
    .then((location) => location.save(req.body).then((newLocation) => res.status(200).send(newLocation))
      .catch((error) => res.status(400).send('Update failed')))
    .catch((error) => res.status(400).send(200));
};
