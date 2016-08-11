var components = require.context(".", true, /init\.js/),
    result = {};

components.keys().map(function(item){
    var name = (item).match(/[a-zA-Z]+/i);

    result[name] = components(item);
});

module.exports = result;