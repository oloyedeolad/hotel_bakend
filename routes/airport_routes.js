const  express = require('express');
const router = express.Router();
const airport_controller = require('../controllers/airport_controller');

router.post('/', airport_controller.create_airport);
router.get('/', airport_controller.get_all_airports);

module.exports = router;
