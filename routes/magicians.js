var renderMW = require('../middleware/generic/render');
var loadMagician = require('../middleware/magicians/loadMagician');
var deleteMagician = require('../middleware/magicians/deleteMagician');
var checkMagician = require('../middleware/magicians/checkMagician');
var saveMagician = require('../middleware/magicians/saveMagician');
var loadAllMagicians = require('../middleware/magicians/loadAllMagicians');

module.exports = function (app) {
    var objrep =  {
        magicianModel: 'magicianModell'
    };

    app.get("/magicians/magician/:id",
        loadMagician(objrep),
        renderMW(objrep, "mmod")
    );

    app.post("/magicians/magician/:id",
        loadMagician(objrep),
        checkMagician(objrep),
        saveMagician(objrep),
        renderMW(objrep, "mmod")
    );

    app.get("/magicians/del/:id",
        loadMagician(objrep),
        deleteMagician(objrep),
        renderMW(objrep, "mdel")
    );

    app.get("/magicians/add",
        renderMW(objrep, "madd")
    );

    app.post("/magicians/add",
        checkMagician(objrep),
        saveMagician(objrep),
        renderMW(objrep, "madd")
    );

    app.get("/magicians",
        loadAllMagicians(objrep),
        renderMW(objrep, "mlist")
    );
};