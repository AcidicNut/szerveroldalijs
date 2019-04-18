const requireOption = require('../requireOption').requireOption;
/**
 * Get the magician for the magicianid param
 *  - if there is no such magician, redirect to /magicians
 *  - if there is one, put it on res.locals.magician
 */
module.exports = function (objectrepository) {
    let magicianModel = requireOption(objectrepository, 'magicianModel');
    return function (req, res, next) {
        if (typeof req.params.magicianid === 'undefined' || typeof magicians[req.params.magicianid] === 'undefined')
            return res.redirect("/magicians");
        res.locals.magician = magicians[req.params.magicianid];
        return next();
    };
};