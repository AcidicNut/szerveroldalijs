/**
 * Using the template engine render the values into the template
 */
module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        console.log("renderMW");
        res.end('Render: ' + viewName);
        //res.render(viewName, res.tpl);
    };
};