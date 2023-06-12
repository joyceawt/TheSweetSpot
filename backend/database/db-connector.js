// Citation for code below:
// Date: April 27, 2023
// Adapted from OSU CS340 Starter guide
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app/tree/main/Step%201%20-%20Connecting%20to%20a%20MySQL%20Database 

// Get an instance of mysql we can use in the app
const mysql = require("mysql");

// Create a 'connection pool' using the provided credentials
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "classmysql.engr.oregonstate.edu",
  user: "cs340_aujoy",
  password: "",
  database: "cs340_aujoy",
  multipleStatements: true,
});

// Export it for use in our applicaiton
module.exports.pool = pool;
