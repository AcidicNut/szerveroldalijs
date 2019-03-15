var requireOption = require('../common').requireOption;
/**
 * delete spell from database
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');
    return function (req, res, next) {
        return next();
    };
};