var requireOption = require('../common').requireOption;
/**
 * check/validate spell attributes
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');
    return function (req, res, next) {
        return next();
    };
};