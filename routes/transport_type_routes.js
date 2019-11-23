const  express = require('express');
const router = express.Router();
const TransportType = require('../controllers/transport_type_controller');

router.post('/', TransportType.createTransportType);
router.get('/', TransportType.getAllTransportTypes);
router.get('/:id', TransportType.getOneTransportType);
router.patch('/:id', TransportType.updateTransportType);
module.exports = router;
