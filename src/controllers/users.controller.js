const passport = require('passport');
const Pracownik = require('../models/Pracownik.js');
const bcrypt = require('bcryptjs');

module.exports = {
    /**
     * GET Users list page
     * @description Wyświetla stronę z listą użytkowników
     */
    getUsersPage: (req, res, next) => {
        res.render('users/index', { user:req.user,  title: 'This should be users list page' });
    },

    getUsersApi: (req, res, next) => {
        Pracownik.find({}, (err, data) => {
            console.log(data);
            i = 0;
            for(let d of data){
                data[i++]['password'] = '???';
            }
            console.log(data);
            res.json(JSON.stringify(data));

        })
        //res.render('users/index', { title: 'This should be users list page' });
    },

 
    /**
     * GET Add user page
     * @description Strona na której dodaje się użytkowników
     */
    getAddUser: (req, res, next) => {
        const randomPassword = Math.random().toString(36).substr(2, 10).toUpperCase();
        res.render('users/addUser', { user: req.user, randomPassword});
    },

    /**
     * POST Add user page
     * @description Przetwarza dane z formularza dodawania użytkownika
     */
    postAddUser: (req, res, next) => {
        console.log(req.body);
        const { fName, lName, role, login, email, password, address} = req.body;
        let errors = [];

        if (!fName || !lName || !role || !login || !email || !password) {
            errors.push({ msg: 'Uzupełnij wszystkie pola!' });
        }

        //if (password.length < 8) {
        //    errors.push({ msg: 'Hasło musi składać się z przynajmniej 8 znaków' });
        //}

        if(role != 'Admin' && role != 'Kierownik Restauracji' && role != 'Manager'){
            console.log(role != 'Admin' || role != 'Kierownik Restauracji' || role != 'Manager')
            errors.push({ msg: 'Wybierz prawidłową rolę!' });
        }

        if(req.user.role != 'Admin' && role == 'Admin'){
            errors.push({ msg: 'Nie masz uprawnień aby stworzyć użytkownika z tą rolą!' });
            role = 'Manager';
        }

        if(errors.length > 0)
            return res.render('users/addUser', { user: req.user, errors, newUser: req.body});

        Pracownik.findOne({ login: login }).then(user => {
            if (user) {
                errors.push({ msg: 'Użytkownik o takim loginie już istnieje' });
                return res.render('users/addUser', { user: req.user, errors, newUser: req.body});
            }
            const newUser = new Pracownik({fName, lName, address, role, login, password, email});
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;

                    newUser.password = hash;

                    newUser.save().then(user => {
                        req.flash('success_msg', `Prawidłowo dodano użytkownika ${login}`);
                        return res.redirect('/users');
                    }).catch(err => {
                        console.log(err);
                        req.flash('error', 'Wystąpił wewnętrzny błąd serwera!');
                        return res.render('users/addUser', { user: req.user, errors, newUser: req.body});
                    });
                });
            });
        });
    }
}