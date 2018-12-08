var config = require('./config.js'),
    express = require('./express.js');

module.exports.start = function() {
    var app = express.init();
    app.listen(process.env.PORT || config.port, function() {
        console.log('App listing on port ', config.port);
    });
};