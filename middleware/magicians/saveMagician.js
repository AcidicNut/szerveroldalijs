var requireOption = require('../common').requireOption;
/**
 * save magician
 */
module.exports = function (objectrepository) {
    var magicianModel = requireOption(objectrepository, 'magicianModel');
    return function (req, res, next) {
        console.log("saveMagicianMW");
        return next();
    };
};