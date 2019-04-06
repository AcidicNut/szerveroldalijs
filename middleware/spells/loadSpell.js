var requireOption = require('../requireOption').requireOption;
const spells = require("../../index").spells;
/**
 * Get the spell for the spellid param
 *  - if there is no such spell, redirect to /spells
 *  - if there is one, put it on res.locals.spell
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');
    return function (req, res, next) {
        if (typeof req.params.spellid === 'undefined' || typeof spells[req.params.spellid] === 'undefined')
            return res.redirect("/spells");
        res.locals.spell = spells[req.params.spellid];
        return next();
    };
};