const router = require('express').Router();
const authMiddleware = require('../config/passport/auth.js');
const spproductsController = require('../controllers/spproducts.controller.js');

/**
 * SPPRODUCTS LIST PAGE
 */
router.get('/', authMiddleware.ensureAuthenticated, spproductsController.getProductsPage);

/**
 * ADD SPPRODUCT PAGE
 */
router.get('/add', authMiddleware.ensureIsKR, spproductsController.getAddProductPage);
router.post('/add', authMiddleware.ensureIsKR, spproductsController.postAddProduct);

/**
 * ADD SPPRODUCT WASTAGES PAGE
 */
router.get('/add/wastages', authMiddleware.ensureAuthenticated, spproductsController.getAddProductWastagePage);
router.post('/add/wastages', authMiddleware.ensureAuthenticated, spproductsController.postAddProductWastage);

module.exports = router;