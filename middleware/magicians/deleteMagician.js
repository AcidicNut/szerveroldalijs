/**
 * Removes a magician from the database, the entity used here is: res.locals.magician
 * Redirects to /magicians after delete
 */
module.exports = function () {
    return function (req, res, next) {
        if (typeof res.locals.magician === 'undefined') {
            return next();
        }

        res.locals.magician.remove(function (err) {
            if (err) {
                return next(err);
            }
            //redirect to all tasks
            res.redirect('/magicians');
        });
    };
};