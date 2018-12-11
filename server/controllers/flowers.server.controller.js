var sqlite3 = require('sqlite3').verbose(),
    config = require('../config/config');

// TODO: Write the sequel queries for update, insert and recents

// Create an index for each attribute in table SIGHTINGS
// http://www.sqlitetutorial.net/sqlite-index/
// https://medium.com/@JasonWyatt/squeezing-performance-from-sqlite-indexes-indexes-c4e175f3c346

// Create a trigger to log insertions, updates, and deletions from all tables

// Have at least one user initiated input done as a transaction
// Find a way to analyze your database's performance; measure performance with and without triggers and indexes

// exports.all lets us use this function whenever we: var flowers = require('*this file's path*')
// http://www.sqlitetutorial.net/sqlite-nodejs/query/
exports.all = function(req, res) {
    let db = new sqlite3.Database(config.db.path);

    // SQLite query goes here!
    // This one should return all flowers in the FLOWERS table
    let sql = `SELECT * FROM FLOWERS`;

    db.all(sql, [], function(err, rows){
        if (err) {
            res.status(400).send(err);
            // throw err;
        }
        rows.forEach(function(row) {
            console.log(row);
        });
        res.json(rows);
    });

    // always close the database
    db.close()
}

exports.getFlower = function(req,res) {
    let db = new sqlite3.Database(config.db.path);
    let name = req.name;
    console.log(`Debug: ${name}`);
    // SQLite query goes here!
    // This one should return all flowers in the FLOWERS table
    let sql = `SELECT * FROM FLOWERS WHERE COMNAME = \"${name}\"`;

    db.all(sql, [], function(err, rows){
        if (err) {
            res.status(400).send(err);
            // throw err;
        }
        rows.forEach(function(row) {
            console.log(row);
        });
        res.json(rows);
    });

    // always close the database
    db.close()
}

// http://www.sqlitetutorial.net/sqlite-nodejs/update/
exports.update = function(req, res) {
    let db = sqlite3.Database(config.db.path);

    // Allow a user to select and update flower information.
    let sql = `UPDATE FLOWERS SET ${column} = \'${value}\' WHERE NAME = \'${name}\'`;

    db.run(sql, [], function(err, rows){
        if (err)
            throw err;
        
        rows.forEach(function(row){

        });
    });

    // always close the database
    db.close();

}

exports.attachName = function(req, res, next, name) {
    req.name = name;
    next();
}
