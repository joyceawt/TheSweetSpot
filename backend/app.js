//setup
const express = require("express");
const app = express();
const PORT = 9124;
const db = require("./database/db-connector");
const cors = require("cors");

app.use(cors());

//get all customers
app.get("/api/customers", (req, res) => {
  db.pool.query("SELECT * FROM Customers", (err, results) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });
});

// get customers by ID
// Customers
app.get("/api/customers/:id", (req, res) => {
  db.pool.query(
    `SELECT * FROM Customers WHERE customer_id = ${req.params.id}`,
    (err, results, fields) => {
      if (err) {
        res.status(500).send("Error fetching customers");
        return;
      }
      res.json(results);
    }
  );
});

//

app.put("/api/customers/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const phone = req.body.phone;

  db.query(
    "UPDATE Customers SET ? WHERE customer_id = ?",
    [name, phone],
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
});

app.post("/api/customers", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;

  db.pool.query(
    "INSERT INTO Customers (name, phone) VALUES (?, ?)",
    [name, phone],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
});

app.delete("/api/customers/delete/:id", (req, res) => {
  const id = req.params.id;

  db.pool.query(
    "DELETE FROM Customers WHERE customer_id= ?",
    id,
    (err, result) => {
      if (err) {
        res.status(500).send("Error deleting customer");
        return;
      }

      res.json(result);
    }
  );
});

// Get all drinks
app.get("/api/drinks", (req, res) => {
  db.pool.query("SELECT * FROM Drinks", (err, results) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });
});

app.put("/api/drinks/:id", (req, res) => {
  const id = req.params.id;
  const drink_name = req.body.drink_name;
  const drink_description = req.body.drink_description;
  const drink_price = req.body.drink_price;

  db.query(
    "UPDATE Drinks SET ? WHERE drink_id = ?",
    [drink_name, drink_description, drink_price],
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
});

// Get all Orders
app.get("/api/orders", (req, res) => {
  db.pool.query("SELECT * FROM Orders", (err, results, fields) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });
});

app.get("/api/OrderItems", (req, res) => {
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
  console.log(
    `Server listening on http://localhost:${PORT} ; press Ctrl-C to terminate.`
  );
});
