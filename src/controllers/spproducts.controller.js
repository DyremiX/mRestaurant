const passport = require('passport');

module.exports = {
    /**
     * GET SPProducts page
     * @description Wyświetla stronę z listą półproduktów 
     */
    getProductsPage: (req, res, next) => {
        res.render('spproducts/index', { user: req.user, title: 'This should be spproducts page' });
    },

    
    /**
     * GET Add SPProduct page
     * @description Wyświetla stronę z formularzem dodawania półproduktów
     */
    getAddProductPage: (req, res, next) => {
        res.render('spproducts/add', { user: req.user, title: 'This should be add spproduct page' });
    },

    /**
     * POST Add SPProduct page
     * @description Przetwarza dane z formularza dodawania półproduktów
     */
    postAddProduct: (req, res, next) => {
        res.redirect('/spproducts');
    },

    
    /**
     * GET Add SPProduct Wastages page
     * @description Wyświetla stronę z formularzem dodawania strat półproduktów
     */
    getAddProductWastagePage: (req, res, next) => {
        res.render('spproducts/wastages', { user: req.user, title: 'This should be add spproduct wastages page' });
    },

    /**
     * POST Add SPProduct Wastages page
     * @description Przetwarza dane z formularza dodawania strat półproduktów
     */
    postAddProductWastage: (req, res, next) => {
        res.redirect('/spproducts');
    },
}