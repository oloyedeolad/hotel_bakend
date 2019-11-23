const  express = require('express');
const userRoutes = require('./userroutes');
const airportRoutes = require('./airport_routes');
const locationRoutes = require('./location_routes');



module.exports = function (app) {
    app.use(express.json());
    app.use('/api/user', userRoutes);
    app.use('/api/airport', airportRoutes);
    app.use('/api/airport', locationRoutes);
};

