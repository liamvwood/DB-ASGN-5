var sqlite3 = require('sqlite3').verbose(),
    config = require('../config/config');

exports.signin = function (req, res) {
    let db = new sqlite3.Database(config.db.path);

    // SQLite query goes here!
    // This one should return all flowers in the FLOWERS table
    let sql = ``;

    db.all(sql, [], function (err, rows) {
        if (err) {
            res.status(400).send(err);
            // throw err;
        }

        res.json(rows);
    });

    // always close the database
    db.close()
}

exports.signup = function(req, res) {
    let db = new sqlite3.Database(config.db.path);

    // SQLite query goes here!
    // This one should return all flowers in the FLOWERS table
    let sql = `INSERT INTO USERS(NAME, PASSWORD) VALUES(\"${req.body.NAME}\", \"${req.body.PASSWORD}\")`;

    db.run(sql, [], function(err, rows) {
        if (err) {
            res.status(400).send(err);
            // throw err;
        }
        res.json(rows);
    });

    // always close the database
    db.close()
}