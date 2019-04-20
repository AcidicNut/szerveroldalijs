let express = require('express');
let app = express();

//multiple start throws error, because of unique restrictions. code from line 10 to 25 serves as a dev tool
//const Spell = require('./models/spell');
//const Magician = require('./models/magician');
//var abraca = new Spell();
//var voldi = new Magician();

/*voldi.name = "Voldemort2";
voldi.favouriteColour = "Black";

voldi.save(function (err, magician) {
    if (err){
       return next(err);
    }
    abraca.name = "Abraca Dab2";
    abraca._inventor = magician._id;
    abraca.details = "Dabraca";
    abraca.save(function (err) {
        if (err){
            return next(err);
        }
    })
});*/

app.use(express.static('views'));
app.set('view engine', 'ejs');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

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
