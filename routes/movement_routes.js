const  express = require('express');
const router = express.Router();
const Movement = require('../controllers/movement_controllers');

router.post('/', Movement.createMovement);
router.get('/', Movement.getAllMovements);
router.get('/:id', Movement.getOneMovement);
router.patch('/:id', Movement.updateMovement);
module.exports = router;
