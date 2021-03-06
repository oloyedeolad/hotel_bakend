const  express = require('express');
const userRoutes = require('./userroutes');
const airportRoutes = require('./airport_routes');
const locationRoutes = require('./location_routes');
const airportPartner = require('./airport_partner_route');
const transportType = require('./transport_type_routes');
const movement = require('./movement_routes');
const sim = require('./sim_routes');
const simBooking = require('./sim_routes');
const airportPartnerService = require('./airport_partner_services_routes');



module.exports = function (app) {
    app.use(express.json());
    app.use('/api/user', userRoutes);
    app.use('/api/airport', airportRoutes);
    app.use('/api/location', locationRoutes);
    app.use('/api/airport_partner', airportPartner);
    app.use('/api/transport_type', transportType);
    app.use('/api/movement', movement);
    app.use('/api/sim', sim);
    app.use('/api/simBooking', simBooking);
    app.use('/api/airport_partner_service', airportPartnerService);
};

