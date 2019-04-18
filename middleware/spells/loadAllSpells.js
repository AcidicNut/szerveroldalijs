const requireOption = require('../requireOption').requireOption;
/**
 * Get the spell list and put the spells on res.locals.spells
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');

    return function (req, res, next) {
        spellModel.find({}, function (err, results) {
            if (err) {
                return next(err);
            }
            res.locals.spells = results;
            return next();
        });
    };
};