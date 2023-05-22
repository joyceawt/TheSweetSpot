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

// Log if unsuccessful
// pool.connect((err) => {
//   if (!err) {
//     console.log("Successfully connect to mysql");
//   } else {
//     console.log("Failed to connect to mysql");
//   }
// });

// Export it for use in our applicaiton
module.exports.pool = pool;
