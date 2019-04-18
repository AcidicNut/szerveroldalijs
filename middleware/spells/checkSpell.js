var requireOption = require('../requireOption').requireOption;
/**
 * check/validate spell attributes
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');
    return function (req, res, next) {
        //TODO:: check if inventor is in db, if not redirect to /magicians/add
        return next();
    };
};