const  express = require('express');
const router = express.Router();
const airport_controller = require('../controllers/airport_controller');

router.post('/', airport_controller.create_airport);
router.get('/', airport_controller.get_all_airports);
router.get('/:id', airport_controller.get_one_airport);
router.patch('/:id', airport_controller.update_airport);
module.exports = router;
