const router = require('express').Router();
const indexController = require('../controllers/index.controller.js');
const auth = require('../config/auth.js');

/* GET home page. */

router.get('/', auth.ensureAuthenticated, indexController.mainIndex); 


module.exports = router;
