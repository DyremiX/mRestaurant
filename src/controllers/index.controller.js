module.exports = {
    /**
     * GET index page
     * @description Wyświetla stronę główną w zależności od rangi użytkownika
     */
    getIndex: (req, res, next) => {
        if(req.user.role == 'Admin')
            res.render('indexes/adminIndex', { user: req.user, title: 'This should Admin index page' });
        else if (req.user.role == 'Kierownik Restauracji')
            res.render('indexes/krIndex', { user: req.user, title: 'This should Kierownik restauracji index page' });
        else 
            res.render('indexes/managerIndex', { user: req.user, title: 'This should Manager index page' });

    },
}