const router = require('express').Router();
const authMiddleware = require('../config/passport/auth.js');
const wastagesController = require('../controllers/wastages.controller.js');

/**
 * WASTAGES LIST PAGE
 */
router.get('/', authMiddleware.ensureAuthenticated, wastagesController.getWastagesPage);

/**
 * PRODUCTS WASTAGES LIST PAGE
 */
router.get('/products', authMiddleware.ensureAuthenticated, wastagesController.getProductsWastagesPage);

/**
 * SPPRODUCTS WASTAGES LIST PAGE
 */
router.get('/spproducts', authMiddleware.ensureAuthenticated, wastagesController.getSPProductsWastagesPage);



module.exports = router;