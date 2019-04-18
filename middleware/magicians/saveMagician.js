const requireOption = require('../requireOption').requireOption;
/**
 * Using POST params update or save a magician to the database
 * If res.locals.magician is there, it's an update otherwise this middleware creates an entity
 * Redirects to /magicians after success
 */
module.exports = function (objectrepository) {
    let magicianModel = requireOption(objectrepository, 'magicianModel');
    return function (req, res, next) {
        if (typeof req.body.magician === 'undefined') {
            return next();
        }

        let mage = undefined;
        if (typeof res.locals.magician !== 'undefined') {
            mage = res.locals.magician;
        } else {
            mage = new magicianModel();
        }
        mage.name = req.body.magician.name;
        mage.favouriteColour = req.body.magician.favouriteColour;

        mage.save(function (err) {
            if (err) {
                return next(err);
            }

            return res.redirect('/magicians');
        });
    };
};