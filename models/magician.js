const db = require('../config/db');

const Magician = db.model('Magician', {
    name : String,
    favouriteColour : String
});

module.exports = Magician;