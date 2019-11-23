const  express = require('express');
const router = express.Router();
const Sim = require('../controllers/sim_controller');

router.post('/', Sim.createSim);
router.get('/', Sim.getAllSims);
router.get('/:id', Sim.getOneSim);
router.patch('/:id', Sim.updateSim);
module.exports = router;
