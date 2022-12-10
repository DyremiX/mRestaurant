const router = require('express').Router();


/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('users', { title: 'Login panel' });
});

/* GET user profile page. */
router.get('/profile', function(req, res, next) {
    res.render('users', { title: 'user profile page' });
});

/* GET password reset page. */
router.get('/settings/passwd/reset', function(req, res, next) {
    res.render('users', { title: 'password reset page' });
});

/* GET password change page. */
router.get('/settings/passwd/change', function(req, res, next) {
    res.render('users', { title: 'password change page' });
});

/* GET logout page. */
router.get('/logout', function(req, res, next) {
    res.render('users', { title: 'logout page' });
});

module.exports = router;