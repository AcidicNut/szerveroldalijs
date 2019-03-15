var requireOption = require('../common').requireOption;
/**
 * Get the magician for the magicianid param
 *  - if there is no such magician, redirect to /magicians
 *  - if there is one, put it on res.tpl.magician
 */
module.exports = function (objectrepository) {
    var magicianModel = requireOption(objectrepository, 'magicianModel');
    return function (req, res, next) {
        return next();
    };
};