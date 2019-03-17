var requireOption = require('../requireOption').requireOption;
/**
 * Get the spell for the spellid param
 *  - if there is no such spell, redirect to /spells
 *  - if there is one, put it on res.tpl.spell
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');
    return function (req, res, next) {
        console.log("loadSpellsMW");
        return next();
    };
};