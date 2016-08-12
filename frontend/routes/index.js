module.exports = function (React,actions,connect, components) {
    var context = require.context("bundle!.", true, /init\.js/),
        result = [];

    context.keys().map(function (item) {
        var name = ((item).match(/[a-zA-Z]+/i)).toString();

        result.push({
            path: name.toLowerCase(),
            getComponent(nextState, callback) {
                context(item)(function (file) {
                    callback(null, file(React,actions,connect, components))
                });
            }
        })
    });

    return result
};