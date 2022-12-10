const _opts = {
    notLogged: {
        text: 'Zaloguj się aby mieć dostęp do tych zasobów',
        redirectPath: '/account/login',
        flash: 'error_msg'
    },
    notAdmin:{
        text: 'Dostęp do tych zasobów posiada tylko Administrator',
        redirectPath: '/account/login',
        flash: 'error_msg'
    },
    notKR: {
        text: 'Dostęp do tych zasobów posiada tylko Kierownik Restauracji',
        redirectPath: '/account/login',
        flash: 'error_msg'
    },
}

module.exports = {
    ensureAuthenticated: (req, res, next) => {
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash(_opts.notLogged.flash, _opts.notLogged.text);
      res.redirect(_opts.notLogged.redirectPath);
    },
    ensureIsAdmin:  (req, res, next) => {
        if (!req.isAuthenticated()) {
            req.flash(_opts.notLogged.flash, _opts.notLogged.text);
            return res.redirect(_opts.notLogged.redirectPath);
        }

        if (req.user.role == 'Admin') { //IF ROLE == Admin
            req.flash(_opts.notAdmin.flash, _opts.notAdmin.text);
            return res.redirect(_opts.notAdmin.redirectPath);
        }
        
        return next();
    },
    ensureIsKR:  (req, res, next) => {
        if (!req.isAuthenticated()) {
            req.flash(_opts.notLogged.flash, _opts.notLogged);
            return res.redirect(_opts.notLogged.redirectPath);
        }

        if (false) { //IF ROLE == Admin || ROLE == Kierownik Restauracji
            req.flash(_opts.notKR.flash, _opts.notKR.text);
            return res.redirect(_opts.notKR.redirectPath);

        }
        
        return next();
    },
  };