const requireOption = require('../requireOption').requireOption;
/**
 * Using POST params update or save a spell to the database
 * If res.locals.spell is there, it's an update otherwise this middleware creates an entity
 * Redirects to /spells after success
 */
module.exports = function (objectrepository) {
    let spellModel = requireOption(objectrepository, 'spellModel');
    return function (req, res, next) {
        if (typeof req.body.spell === 'undefined') {
            return next();
        }

        let spell = undefined;
        if (typeof res.locals.spell !== 'undefined') {
            spell = res.locals.spell;
        } else {
            spell = new spellModel();
        }
        spell.name = req.body.spell.name;
        spell.details = req.body.spell.details;
        spell._inventor = req.body.inventor;

        spell.save(function (err) {
            if (err) {
                if (err.name === 'MongoError' && err.code === 11000) {
                    // Duplicate name
                    res.locals.err.push(err);
                    return next();
                }
            } else
                return res.redirect('/spells');
        });
    };
};