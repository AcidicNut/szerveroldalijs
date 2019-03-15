var requireOption = require('../common').requireOption;
/**
 * Get the magician list and put the magicians on res.tpl.magicians
 */
module.exports = function (objectrepository) {
    var magicianModel = requireOption(objectrepository, 'magicianModel');

    return function (req, res, next) {
        console.log("loadAllMagicianMW");
        return next();
    };
};