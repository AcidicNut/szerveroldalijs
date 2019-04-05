var requireOption = require('../requireOption').requireOption;
/**
 * Get the spell for the spellid param
 *  - if there is no such spell, redirect to /spells
 *  - if there is one, put it on res.locals.spell
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');
    return function (req, res, next) {
        res.locals.spell = {
            name : 'DefaultSpellName',
            details : 'DefaultSpellDetails',
            inventor : 'DefaultSpellInventor'
        };
        return next();
    };
};