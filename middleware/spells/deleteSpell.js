/**
 * Removes a spell from the database, the entity used here is: res.locals.spell
 * Redirects to /spell after delete
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.spell === 'undefined') {
            return next();
        }

        res.locals.spell.remove(function (err) {
            if (err) {
                return next(err);
            }
            //redirect to all tasks
            res.redirect('/spells');
        });
    };
};
