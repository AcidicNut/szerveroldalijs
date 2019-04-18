const renderMW = require('../middleware/generic/render');
const loadMagician = require('../middleware/magicians/loadMagician');
const deleteMagician = require('../middleware/magicians/deleteMagician');
const checkMagician = require('../middleware/magicians/checkMagician');
const saveMagician = require('../middleware/magicians/saveMagician');
const loadAllMagicians = require('../middleware/magicians/loadAllMagicians');

var magicianModel = require("../models/magician");

module.exports = function (app) {
    var objrep =  {
        magicianModel: magicianModel
    };

    app.get("/magicians/magician/:magicianid",
        loadMagician(objrep),
        renderMW(objrep, "magician_edit")
    );

    app.post("/magicians/magician/:magicianid",
        loadMagician(objrep),
        checkMagician(objrep),
        saveMagician(objrep),
        renderMW(objrep, "magician_edit")
    );

    app.get("/magicians/del/:magicianid",
        loadMagician(objrep),
        deleteMagician(objrep),
        renderMW(objrep, "magicians")
    );

    app.get("/magicians/add",
        renderMW(objrep, "magician_edit")
    );

    app.post("/magicians/add",
        checkMagician(objrep),
        saveMagician(objrep),
        renderMW(objrep, "magician_edit")
    );

    app.get("/magicians",
        loadAllMagicians(objrep),
        renderMW(objrep, "magicians")
    );
};