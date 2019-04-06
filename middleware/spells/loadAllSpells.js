const spells = require("../../index").spells;
var requireOption = require('../requireOption').requireOption;
/**
 * Get the spell list and put the spells on res.locals.spells
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');

    return function (req, res, next) {
        res.locals.spells = spells;
        return next();
    };
};