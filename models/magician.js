const db = require('../config/db');
const Schema = require("mongoose/lib/browser").Schema;

const Magician = db.model('Magician', new Schema({
    name : {
        type : String,
        unique : true,
        index : true
    },
    favouriteColour : String
}));

module.exports = Magician;