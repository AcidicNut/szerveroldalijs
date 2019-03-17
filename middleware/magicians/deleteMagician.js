var requireOption = require('../requireOption').requireOption;
/**
 * Removes a magician from the database, the entity used here is: res.tpl.magician
 * Redirects to /magician after delete
 */
module.exports = function (objectrepository) {
    var magicianModel = requireOption(objectrepository, 'magicianModel');
    return function (req, res, next) {
        console.log("deleteMAgician");
        return next();
    };
};