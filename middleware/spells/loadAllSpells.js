var requireOption = require('../requireOption').requireOption;
/**
 * Get the spell list and put the spells on res.locals.spells
 */
module.exports = function (objectrepository) {
    var spellModel = requireOption(objectrepository, 'spellModel');

    return function (req, res, next) {
        res.locals.spells = [
            {
                name : 'Fire Ball',
                deatails : 'Flaming ball',
                inventor : 'Medivh'
            },
            {
                name : 'Gucci',
                deatails : 'Gang',
                inventor : 'Lil Pump'
            },
            {
                name : 'Lie Detect',
                deatails : 'Detects liars.',
                inventor : 'Mentalist'
            }
        ];
        return next();
    };
};