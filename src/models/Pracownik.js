const mongoose = require('mongoose');

const PracownikSchema = new mongoose.Schema({
    imie: {
        type: String,
        required: true
    },
    nazwisko: {
        type: String,
        required: true
    },
    adres: {
        type: String,
        required: false
    },
    rola: {
        type: String,
        enum: ['Manager', 'Kierownik restauracji', 'Admin'],
        default: 'Manager',
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
}, {
    virtuals: {
        fullName: {
            get() {
                return this.imie + ' ' + this, nazwisko;
            }
        }
    }
});

const Pracownik = mongoose.model('User', Pracownik);

module.exports = Pracownik;