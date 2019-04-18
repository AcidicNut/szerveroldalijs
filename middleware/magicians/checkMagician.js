const requireOption = require('../requireOption').requireOption;
/**
 * check/validate magician attributes
 */
module.exports = function (objectrepository) {
    let magicianModel = requireOption(objectrepository, 'magicianModel');
    return function (req, res, next) {
        return next();
    };
};