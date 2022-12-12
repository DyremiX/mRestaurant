const passport = require('passport');

module.exports = {
    /**
     * GET Products page
     * @description Wyświetla stronę z listą produktów 
     */
    getProductsPage: (req, res, next) => {
        res.render('products/index', { user: req.user, title: 'This should be products page' });
    },

    
    /**
     * GET Add Product page
     * @description Wyświetla stronę z formularzem dodawania produktów
     */
    getAddProductPage: (req, res, next) => {
        res.render('products/add', { user: req.user, title: 'This should be add product page' });
    },

    /**
     * POST Add Product page
     * @description Przetwarza dane z formularza dodawania produktów
     */
    postAddProduct: (req, res, next) => {
        res.redirect('/products');
    },


    /**
     * GET Add Product Wastages page
     * @description Wyświetla stronę z formularzem dodawania strat produktów
     */
    getAddProductWastagesPage: (req, res, next) => {
        res.render('products/wastages', { user: req.user, title: 'This should be add product wastages page' });
    },

    /**
     * POST Add Product Wastage page
     * @description Przetwarza dane z formularza dodawania strat produktów
     */
    postAddProductWastages: (req, res, next) => {
        res.redirect('/products');
    },
}