//setup
const express = require('express');
const app = express();
const PORT = 9124;
const db = require('./database/db-connector')

//routes

//GET routes

// Get all customers
app.get('/api/customers', (req, res) => {
  db.pool.query("SELECT * FROM Customers", (err, results, fields) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });
});
  
// Get all drinks
app.get('/api/drinks', (req, res) => {
  db.pool.query("SELECT * FROM Drinks", (err, results, fields) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });
});

// Get all Orders
app.get('/api/drinks', (req, res) => {
  db.pool.query("SELECT * FROM Orders", (err, results, fields) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });
});

app.get('/api/OrderItems', (req, res) => {
  db.pool.query("SELECT * FROM OrderItems", (err, results, fields) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });
});

//listener
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT} ; press Ctrl-C to terminate.`)
});