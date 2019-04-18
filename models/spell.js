const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Spell = db.model('Spell', new Schema({
    name : {
        type: String,
        unique: true,
        index: true
    },
    details : String,
    _inventor : {
        type: Schema.Types.ObjectId,
        ref: 'Magician'
    }
}));

module.exports = Spell;