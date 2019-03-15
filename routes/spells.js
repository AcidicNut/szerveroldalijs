var renderMW = require('../middleware/generic/render');
var loadSpell = require('../middleware/spells/loadSpell');
var deleteSpell = require('../middleware/spells/deleteSpell');
var checkSpell = require('../middleware/spells/checkSpell');
var saveSpell = require('../middleware/spells/saveSpell');
var loadAllspells = require('../middleware/spells/loadAllSpells');

module.exports = function (app) {
    var objrep =  {
        spellModel: 'spellModell'
    };

    app.get("/spells/spell/:id",
        loadSpell(objrep),
        renderMW(objrep, "smod")
    );

    app.post("/spells/spell/:id",
        loadSpell(objrep),
        checkSpell(objrep),
        saveSpell(objrep),
        renderMW(objrep, "smod")
    );

    app.get("/spells/del/:id",
        loadSpell(objrep),
        deleteSpell(objrep),
        renderMW(objrep, "del")
    );

    app.get("/spells/add",
        renderMW(objrep, "sadd")
    );

    app.post("/spells/add",
        checkSpell(objrep),
        saveSpell(objrep),
        renderMW(objrep, "sadd")
    );

    app.get("/spells",
        loadAllspells(objrep),
        renderMW(objrep, "slist")
    );
};