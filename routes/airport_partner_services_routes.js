const  express = require('express');
const router = express.Router();
const AirportPartnerService = require('../controllers/airport_partner_service');

router.post('/', AirportPartnerService.createAirportPartnerService);
router.get('/', AirportPartnerService.getAllAirportPartnerServices);
router.get('/:id', AirportPartnerService.getOneAirportPartnerService);
router.patch('/:id', AirportPartnerService.updateAirportPartnerService);
module.exports = router;
