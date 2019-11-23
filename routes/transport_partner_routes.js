const  express = require('express');
const router = express.Router();
const TransportPartner = require('../controllers/transort_partner_controller');

router.post('/', TransportPartner.createTransportPartner);
router.get('/', TransportPartner.getAllTransportPartners);
router.get('/:id', TransportPartner.getOneTransportPartner);
router.patch('/:id', TransportPartner.updateTransportPartner);
module.exports = router;
