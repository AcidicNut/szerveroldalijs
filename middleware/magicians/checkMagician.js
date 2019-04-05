var requireOption = require('../requireOption').requireOption;
/**
 * check/validate magician attributes
 */
module.exports = function (objectrepository) {
    var magicianModel = requireOption(objectrepository, 'magicianModel');
    return function (req, res, next) {
        return next();
    };
};