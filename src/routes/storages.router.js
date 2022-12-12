const router = require('express').Router();
const authMiddleware = require('../config/passport/auth.js');
const storagesController = require('../controllers/storages.controller.js');

/**
 * STORAGES LIST PAGE
 */
router.get('/', authMiddleware.ensureAuthenticated, storagesController.getStoragesPage);

/**
 * ADD STORAGE PAGE
 */
router.get('/add', authMiddleware.ensureIsKR, storagesController.getAddStoragePage);
router.post('/add', authMiddleware.ensureIsKR, storagesController.postAddStorage);

module.exports = router;