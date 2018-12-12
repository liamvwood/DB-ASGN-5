var sqlite3 = require('sqlite3').verbose(),
    config = require('../config/config');

exports.signin = function (req, res) {
    let db = new sqlite3.Database(config.db.path);
    console.log("signin");
    // SQLite query goes here!
    // This one should return all flowers in the FLOWERS table
    let sql = `SELECT NAME, PASSWORD FROM USERS WHERE NAME = \"${req.body.NAME}\"`;

    db.all(sql, [], function (err, rows) {
        if (err) {
            console.log("signin 1");
            res.status(400).send(err);
            // throw err;
        }
        else {
            console.log("signin 2");

            rows.forEach(row => {
                if (row.PASSWORD != req.body.PASSWORD) {
                    console.log("signin 3");
                    res.status(401).send(err);
                }
                else {
                    res.json(row);
                }
            })
        }
    });

    // always close the database
    db.close()
}

exports.signup = function (req, res) {
    let db = new sqlite3.Database(config.db.path);

    // SQLite query goes here!
    // This one should return all flowers in the FLOWERS table
    let sql = `INSERT INTO USERS(NAME, PASSWORD) VALUES(\"${req.body.NAME}\", \"${req.body.PASSWORD}\")`;

    db.run(sql, [], function (err, rows) {
        if (err) {
            res.status(400).send(err);
            // throw err;
        }
        res.json(rows);
    });

    // always close the database
    db.close()
}