var components = require.context("bundle!.", true, /init\.js/),
    result = [];

components.keys().map(function (item) {
    var name = ((item).match(/[a-zA-Z]+/i)).toString();

    result.push({
        path: name.toLowerCase(),
        getComponent(nextState, callback) {
            callback(null, components(item))
        }
    })

    });

    module.exports = result;