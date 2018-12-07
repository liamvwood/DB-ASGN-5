var sqlite3 = require('sqlite3').verbose(),
    config = require('../config/config');

// TODO: Write the sequel queries for update, insert and recents

// Create an index for each attribute in table SIGHTINGS
// http://www.sqlitetutorial.net/sqlite-index/
// Create a trigger to log insertions, updates, and deletions from all tables

// Have at least one user initiated input done as a transaction
// Find a way to analyze your database's performance; measure performance with and without triggers and indexes

// exports.all lets us use this function whenever we: var flowers = require('*this file's path*')
// http://www.sqlitetutorial.net/sqlite-nodejs/query/
exports.all = function(req, res) {
    let db = new sqlite3.Database(config.db.path);

    // SQLite query goes here!
    // This one should return all flowers in the FLOWERS table
    let sql = `SELECT * FROM FEATURES`;

    db.all(sql, [], function(err, rows){
        if (err) {
            throw err;
        }
        rows.forEach(function(row) {
            console.log(row);
        });
    });

    // always close the database
    db.close()
}