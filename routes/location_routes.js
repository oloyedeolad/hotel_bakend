const  express = require('express');
const router = express.Router();
const location_controller = require('../controllers/location_controller');

router.post('/', location_controller.createLocation);
router.get('/', location_controller.getAllLocations);
router.get('/:id', location_controller.getOneLocation);
router.patch('/:id', location_controller.updateLocation);

module.exports = router;
