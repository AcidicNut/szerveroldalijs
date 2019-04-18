var renderMW = require('../middleware/generic/render');
var loadSpell = require('../middleware/spells/loadSpell');
var deleteSpell = require('../middleware/spells/deleteSpell');
var checkSpell = require('../middleware/spells/checkSpell');
var saveSpell = require('../middleware/spells/saveSpell');
var loadAllspells = require('../middleware/spells/loadAllSpells');

var spellModel = require('../models/spell');

module.exports = function (app) {
    var objrep =  {
        spellModel: spellModel
    };

    app.get("/spells/spell/:spellid",
        loadSpell(objrep),
        renderMW(objrep, "spell_edit")
    );

    app.post("/spells/spell/:spellid",
        loadSpell(objrep),
        checkSpell(objrep),
        saveSpell(objrep),
        renderMW(objrep, "spell_edit")
    );

    app.get("/spells/del/:spellid",
        loadSpell(objrep),
        deleteSpell(),
        renderMW(objrep, "spells")
    );

    app.get("/spells/add",
        renderMW(objrep, "spell_edit")
    );

    app.post("/spells/add",
        checkSpell(objrep),
        saveSpell(objrep),
        renderMW(objrep, "spell_edit")
    );

    app.get("/spells",
        loadAllspells(objrep),
        renderMW(objrep, "spells")
    );
};