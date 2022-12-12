const router = require('express').Router();
const authMiddleware = require('../config/passport/auth.js');
const productsController = require('../controllers/products.controller.js');

/**
 * PRODUCTS LIST PAGE
 */
router.get('/', authMiddleware.ensureAuthenticated, productsController.getProductsPage);

/**
 * ADD PRODUCT PAGE
 */
router.get('/add', authMiddleware.ensureIsKR, productsController.getAddProductPage);
router.post('/add', authMiddleware.ensureIsKR, productsController.postAddProduct);

/**
 * ADD PRODUCT WASTAGES PAGE
 */
router.get('/add/wastages', authMiddleware.ensureAuthenticated, productsController.getAddProductWastagesPage);
router.post('/add/wastages', authMiddleware.ensureAuthenticated, productsController.postAddProductWastages);

module.exports = router;