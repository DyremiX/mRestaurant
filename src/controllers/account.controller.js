const passport = require('passport');

module.exports = {
    /**
     * GET login page
     * @description Wyświetla stronę z formularzem logowania
     */
    getLoginPage: (req, res, next) => {
        res.render('account/login', { title: 'This should be login page' });
    },

    /**
     * POST login page
     * @description Przetwarza dane logowania z formularza 
     */
    postLoginPage: (req, res, next) => {
        console.log(req.body);
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/account/login',
            badRequestMessage: 'Wprowadź wszystkie dane',
            failureFlash: true
          })(req, res, next);
    },

    
    /**
     * GET logout page
     * @description Wylogowuje użytkownika jeśli ten był zalogowany
     */
    getLogout: (req, res, next) => {
        req.logout(err => {
            if(err)
                req.flash('error', 'Błąd podczas wylogowywania');
            req.flash('success_msg', 'Wylogowano');
            res.redirect('/account/login');
        });
    },

    
    /**
     * GET password reset page
     * @description Strona na której użytkownik resetuje swoje hasło
     */
    getPasswdResetPage: (req, res, next) => {
        if(req.user.passwordToReset == true)
            res.render('account/passReset', { user:req.user, title: 'This should be password reset page' });
        else
            res.redirect('/');
    },

    /**
     * POST password reset page
     * @description Przetwarza dane z formularza resetowania hasła
     */
    postPasswdResetPage: (req, res, next) => {
        //Password reset logic goes here
        req.flash('success_msg', 'Prawidłowo zresetowano hasło');
        res.redirect('/');
    },

    /**
     * GET password change page
     * @description Strona na której użytkownik zmienia swoje hasło
     */
    getPasswdChangePage: (req, res, next) => {
        res.render('account/passChange', { user:req.user, title: 'This should be password change' });
    },

    /**
     * POST password change page
     * @description Przetwarza dane z formularza zmieniania hasła
     */
    postPasswdChangePage: (req, res, next) => {
        //Password change logic goes here
        req.flash('success_msg', 'Prawidłowo zmieniono hasło');
        res.redirect('/');
    },

    
    /**
     * GET user profile page
     * @description Strona na której użytkownik może wyświetlić swoje dane
     */
    getProfilePage: (req, res, next) => {
        res.render('account/profile', { user:req.user, title: 'This should be profile page' });
    },
}