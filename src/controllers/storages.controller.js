const passport = require('passport');

module.exports = {
    /**
     * GET storages page
     * @description Wyświetla stronę z listą magazynów
     */
    getStoragesPage: (req, res, next) => {
        res.render('storages/index', { user: req.user, title: 'This should be storages page' });
    },

    
    /**
     * GET Add Storage page
     * @description Wyświetla stronę z formularzem dodawania magazynów
     */
    getAddStoragePage: (req, res, next) => {
        res.render('storages/add', { user: req.user, title: 'This should be add storage page' });
    },

    /**
     * POST Add Storage page
     * @description Przetwarza dane z formularza dodawania magazynów
     */
    postAddStorage: (req, res, next) => {
        res.redirect('/storages');
    },
}