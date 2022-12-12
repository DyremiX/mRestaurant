const passport = require('passport');

module.exports = {
    /**
     * GET Wastages page
     * @description Wyświetla stronę z ogólną listą strat
     */
    getWastagesPage: (req, res, next) => {
        res.render('wastages/index', { user: req.user, title: 'This should be wastages page' });
    },


    
    /**
     * GET Products Wastages page
     * @description Wyświetla stronę z listą strat produktów
     */
    getProductsWastagesPage: (req, res, next) => {
        res.render('wastages/products', { user: req.user, title: 'This should be products wastages page' });
    },


    /**
     * GET SPProducts Wastages page
     * @description Wyświetla stronę z listą strat półproduktów
     */
    getSPProductsWastagesPage: (req, res, next) => {
        res.render('wastages/spproducts', { user: req.user, title: 'This should be spproducts wastages page' });
    },

}