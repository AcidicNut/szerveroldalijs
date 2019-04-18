const requireOption = require('../requireOption').requireOption;
/**
 * Get the spell for the spellid param
 *  - if there is no such spell, redirect to /spells
 *  - if there is one, put it on res.locals.spell
 */
module.exports = function (objectrepository) {
    let spellModel = requireOption(objectrepository, 'spellModel');
    return function (req, res, next) {
        //not enought parameter
        if ((typeof req.params.spellid === 'undefined') || (req.params.spellid === 'null')) {
            return next();
        }

        //lets find the spell
        spellModel.findOne({_id: req.params.spellid}, function (err, result) {
            if (!result){
                return res.redirect("/spells");
            }
            if (err) {
                return next(err);
            }

            res.locals.spell = result;
            return next();
        });
    };
};