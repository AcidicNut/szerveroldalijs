const renderMW = require('../middleware/generic/render');
const loadSpell = require('../middleware/spells/loadSpell');
const deleteSpell = require('../middleware/spells/deleteSpell');
const saveSpell = require('../middleware/spells/saveSpell');
const loadAllspells = require('../middleware/spells/loadAllSpells');
const loadAllMagicians = require('../middleware/magicians/loadAllMagicians');

const spellModel = require('../models/spell');
const magicianModel = require("../models/magician");

module.exports = function (app) {
    let objrep =  {
        spellModel: spellModel,
        magicianModel: magicianModel
    };

    app.get("/spells/spell/:spellid",
        loadSpell(objrep),
        loadAllMagicians(objrep),
        renderMW(objrep, "spell_edit")
    );

    app.post("/spells/spell/:spellid",
        loadSpell(objrep),
        loadAllMagicians(objrep),
        saveSpell(objrep),
        renderMW(objrep, "spell_edit")
    );

    app.get("/spells/del/:spellid",
        loadSpell(objrep),
        deleteSpell(objrep),
        renderMW(objrep, "spells")
    );

    app.get("/spells/add",
        loadAllMagicians(objrep),
        renderMW(objrep, "spell_edit")
    );

    app.post("/spells/add",
        loadAllMagicians(objrep),
        saveSpell(objrep),
        renderMW(objrep, "spell_edit")
    );

    app.get("/spells",
        loadAllspells(objrep),
        renderMW(objrep, "spells")
    );
};