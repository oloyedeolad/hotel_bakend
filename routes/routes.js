const  express = require('express');
const userRoutes = require('./userroutes');
const app = express();


app.use('/user', userRoutes);

