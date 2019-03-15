var renderMW = require('../middleware/generic/render');

module.exports = function (app) {
    var objrep =  {
        magicianModel: 'magicianModell'
    };

    app.get("/",
        renderMW(objrep, "mmod")
    );
};