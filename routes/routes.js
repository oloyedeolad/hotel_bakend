const  express = require('express');
const userRoutes = require('./userroutes');
const airportRoutes = require('./airport_routes');
const locationRoutes = require('./location_routes');
const airportPartner = require('./airport_partner_route');
const transportType = require('./transport_type_routes');



module.exports = function (app) {
    app.use(express.json());
    app.use('/api/user', userRoutes);
    app.use('/api/airport', airportRoutes);
    app.use('/api/location', locationRoutes);
    app.use('/api/airport_partner', airportPartner);
    app.use('/api/transport_type', transportType);
};

