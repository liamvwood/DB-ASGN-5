var express = require('express'),
    config = require('./config'),
    bodyParser = require('body-parser'),
    sqlite3 = require('sqlite3').verbose()
    flowersRouter = require('../routes/flowers.server.routes.js')
    sightingsRouter = require('../routes/sightings.server.routes.js')
    featuresRouter = require('../routes/features.server.routes.js');

module.exports.init = function() {

    var db = new sqlite3.Database(config.db.path);

    var app = express();

    app.use(bodyParser.json());

    app.use(express.static('client'));
    app.use('/api/flowers', flowersRouter);
    app.use('/api/sightings', sightingsRouter);
    app.use('/api/features', featuresRouter);

    return app;
}

