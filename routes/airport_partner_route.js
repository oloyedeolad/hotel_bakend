const  express = require('express');
const router = express.Router();
const airportPartner = require('../controllers/airport_partner_controller');

router.post('/', airportPartner.createAirportPartner);
router.get('/', airportPartner.getAllAirportPartners);
router.get('/:id', airportPartner.getOneAirportPartner);
router.patch('/:id', airportPartner.updateAirportPartner);
module.exports = router;
