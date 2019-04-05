var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static('views'));
app.set('view engine', 'ejs');

/**
 * Parse parameters in POST
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

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


var server = app.listen(3000, function () {
    console.log('Hello :3000');
});