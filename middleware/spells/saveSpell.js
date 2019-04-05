var requireOption = require('../requireOption').requireOption;
/**
 * Using POST params update or save a spell to the database
 * If res.locals.spell is there, it's an update otherwise this middleware creates an entity
 * Redirects to /spells after success
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');
    return function (req, res, next) {
        console.log("saveSpellMW");
        return next();
    };
};