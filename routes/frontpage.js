const renderMW = require('../middleware/generic/render');

module.exports = function (app) {
    let objrep = {
        magicianModel: 'magicianModell'
    };

    app.get("/",
        renderMW(objrep, "frontpage")
    );
};