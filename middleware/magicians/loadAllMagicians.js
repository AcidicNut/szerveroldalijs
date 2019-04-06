const magicians = require("../../index").magicians;
var requireOption = require('../requireOption').requireOption;
/**
 * Get the magician list and put the magicians on res.locals.magicians
 */
module.exports = function (objectrepository) {
    var magicianModel = requireOption(objectrepository, 'magicianModel');

    return function (req, res, next) {
        res.locals.magicians = magicians;
        return next();
    };
};