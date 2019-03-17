var requireOption = require('../requireOption').requireOption;
/**
 * Get the spell list and put the spells on res.tpl.spells
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');

    return function (req, res, next) {
        console.log("loadAllSpells");
        return next();
    };
};