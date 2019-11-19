const  express = require('express');
const userRoutes = require('./userroutes');
const airportRoutes = require('./airport_routes');



module.exports = function (app) {
    app.use(express.json());
    app.use('/api/user', userRoutes);
    app.use('/api/airport', airportRoutes);
};

