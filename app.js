const express = require('express');
const firebase = require('firebase');
const config = require('config');
const bodyParser = require('body-parser');
require('./config/dbconnect');
const cors = require('cors');
require('firebase/auth');
require('firebase/database');

const morgan = require('morgan');


const firebaseAuth = require('./FirebaseAuth');


firebase.initializeApp(config);

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));


require('./routes/routes')(app);


app.use('/api/auth', firebaseAuth);


const server = app.listen(port, () => {
    console.log('listening on ' + port);
});

module.exports = server;
