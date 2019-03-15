var requireOption = require('../common').requireOption;
/**
 * delete magician from database
 */
module.exports = function (objectrepository) {
    var magicianModel = requireOption(objectrepository, 'magicianModel');
    return function (req, res, next) {
        console.log("deleteMAgician");
        return next();
    };
};