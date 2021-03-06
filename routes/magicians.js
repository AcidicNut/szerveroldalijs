const renderMW = require('../middleware/generic/render');
const loadMagician = require('../middleware/magicians/loadMagician');
const deleteMagician = require('../middleware/magicians/deleteMagician');
const saveMagician = require('../middleware/magicians/saveMagician');
const loadAllMagicians = require('../middleware/magicians/loadAllMagicians');

const magicianModel = require("../models/magician");

module.exports = function (app) {
    let objrep =  {
        magicianModel: magicianModel
    };

    app.get("/magicians/magician/:magicianid",
        loadMagician(objrep),
        renderMW(objrep, "magician_edit")
    );

    app.post("/magicians/magician/:magicianid",
        loadMagician(objrep),
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
        saveMagician(objrep),
        renderMW(objrep, "magician_edit")
    );

    app.get("/magicians",
        loadAllMagicians(objrep),
        renderMW(objrep, "magicians")
    );
};