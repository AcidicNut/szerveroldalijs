var requireOption = require('../requireOption').requireOption;
/**
 * Using POST params update or save a magician to the database
 * If res.locals.magician is there, it's an update otherwise this middleware creates an entity
 * Redirects to /magicians after success
 */
module.exports = function (objectrepository) {
    var magicianModel = requireOption(objectrepository, 'magicianModel');
    return function (req, res, next) {
        return next();
    };
};