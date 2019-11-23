const  express = require('express');
const router = express.Router();
const SimBooking = require('../controllers/sim_booking_controller');

router.post('/', SimBooking.createSimBooking);
router.get('/', SimBooking.getAllSimBookings);
router.get('/:id', SimBooking.getOneSimBooking);
router.patch('/:id',SimBooking.updateSimBooking);
module.exports = router;
