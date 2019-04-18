const requireOption = require('../requireOption').requireOption;
/**
 * Get the magician for the magicianid param
 *  - if there is no such magician, redirect to /magicians
 *  - if there is one, put it on res.locals.magician
 */
module.exports = function (objectrepository) {
    let magicianModel = requireOption(objectrepository, 'magicianModel');
    return function (req, res, next) {
        //not enought parameter
        if ((typeof req.params.magicianid === 'undefined') || (req.params.magicianid === 'null')) {
            return next();
        }

        //lets find the magician
        magicianModel.findOne({_id: req.params.magicianid}, function (err, result) {
            if (!result){
                return res.redirect("/magicians");
            }
            if (err) {
                return next(err);
            }

            res.locals.magician = result;
            return next();
        });
    };
};