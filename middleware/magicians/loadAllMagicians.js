const requireOption = require('../requireOption').requireOption;
/**
 * Get the magician list and put the magicians on res.locals.magicians
 */
module.exports = function (objectrepository) {
    let magicianModel = requireOption(objectrepository, 'magicianModel');

    return function (req, res, next) {
        magicianModel.find({}, function (err, results) {
            if (err) {
                return next(err);
            }
            res.locals.magicians = results;
            return next();
        });
    };
};