const  express = require('express');
const router = express.Router();
const user_controller = require('../controllers/usercontroller');


router.post('/',  user_controller.create_user);


module.exports = router;
