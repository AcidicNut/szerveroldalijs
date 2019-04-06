let express = require('express');
let app = express();

/**
 * module.exports.magicians for mocking database
 */
module.exports.magicians = [
    {
        name : 'Medivh',
        favouriteColour : 'Red'
    },
    {
        name : 'Lil Pump',
        favouriteColour : 'Purple'
    },
    {
        name : 'Mentalist',
        favouriteColour : 'Blue'
    }
];

/**
 * module.exports.spells for mocking database
 */
module.exports.spells = [
    {
        name : 'Fire Ball',
        details : 'Flaming ball',
        inventor : 'Medivh'
    },
    {
        name : 'Gucci',
        details : 'Gang',
        inventor : 'Lil Pump'
    },
    {
        name : 'Lie Detect',
        details : 'Detects liars.',
        inventor : 'Mentalist'
    }
];

app.use(express.static('views'));
app.set('view engine', 'ejs');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

/**
 * Let's create the .error on the res object
 */
app.use(function (req, res, next) {
    res.error = [];
    return next();
});

/**
 * Include all the routes
 */
require('./routes/spells')(app);
require('./routes/magicians')(app);
require('./routes/frontpage')(app);
/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
    res.status(500).send('Houston, we have a problem!');

    //Flush out the stack to the console
    console.error(err.stack);
});

let server = app.listen(3000, function () {
    console.log('Hello :3000');
});