var requireOption = require('../requireOption').requireOption;
const magicians = require("../../index").magicians;
/**
 * Removes a magician from the database, the entity used here is: res.locals.magician
 * Redirects to /magicians after delete
 */
module.exports = function (objectrepository) {
    var magicianModel = requireOption(objectrepository, 'magicianModel');
    return function (req, res, next) {
        return next();
    };
};