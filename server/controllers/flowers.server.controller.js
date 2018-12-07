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
    let sql = `SELECT * FROM FLOWERS`;

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

// http://www.sqlitetutorial.net/sqlite-nodejs/insert/
exports.create = function(req, res) {
    // You're gonna wanna use 'req' to get the data that we plan to insert
    let db = new sqlite3.Database(config.db.path);

    // Allow a user to insert a new sighting of a flower.
    let sql = ``;

    db.run(sql, [], function(err, rows){
        if (err) {
            throw err;
        }
        rows.forEach(function(row) {
            console.log(row.name);
        });
    });

    // always close the database
    db.close()
}

// exports.recents lets us use this function whenever we: var flowers = require('*this file's path*')
exports.recents = function(req, res) {
    let db = new sqlite3.Database(config.db.path);

    // Allow the user to select from a list of flowers. Using the selected
    // flower, display the 10 most recent sightings of the selected flower.
    // Information should include the date, location, and who sighted the flower
    let sql = ``;

    db.all(sql, [], function(err, rows){
        if (err) {
            throw err;
        }
        rows.forEach(function(row) {
            console.log(row.name);
        });
    });

    // always close the database
    db.close();
}

// http://www.sqlitetutorial.net/sqlite-nodejs/update/
exports.update = function(req, res) {
    let db = sqlite3.Database(config.db.path);

    // Allow a user to select and update flower information.
    let sql = ``;

    db.run(sql, [], function(err, rows){
        if (err)
            throw err;
        
        rows.forEach(function(row){

        });
    });

    // always close the database
    db.close();

}