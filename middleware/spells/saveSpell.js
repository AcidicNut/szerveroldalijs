var requireOption = require('../common').requireOption;
/**
 * save spell
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');
    return function (req, res, next) {
        console.log("saveSpellMW");
        return next();
    };
};