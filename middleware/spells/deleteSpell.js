var requireOption = require('../requireOption').requireOption;
/**
 * Removes a spell from the database, the entity used here is: res.locals.spell
 * Redirects to /spell after delete
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');
    return function (req, res, next) {
        console.log("deleteSpellMW");
        return next();
    };
};