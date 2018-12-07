var express = require('express'),
    config = require('./config'),
    bodyParser = require('body-parser'),
    sqlite3 = require('sqlite3').verbose()
    flowerRouter = require('../routes/flowers.server.routes.js');

module.exports.init = function() {

    var db = sqlite3.Database(config.db.path);

    var app = express();

    app.use(bodyParser.json());

    app.use(express.static('client'));
    app.use('/api/flowers', flowerRouter);
}

