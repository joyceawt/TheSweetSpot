//setup
const express = require("express");
const app = express();
const PORT = 9124;
const db = require("./database/db-connector");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//Customers
app.get("/api/customers", (req, res) => {
  db.pool.query("SELECT * FROM Customers", (err, results) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });
});

app.put("/api/customers/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const phone = req.body.phone;

  db.pool.query(
    "UPDATE Customers SET name = ?, phone = ? WHERE customer_id = ?",
    [name, phone, id],
    (err, result) => {
      if (err) {
        res.status(500).send("Error updating customer");
        return;
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

app.delete("/api/customers/:customer_id", (req, res) => {
  console.log(req.params);
  const id = req.params.customer_id;

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
  db.pool.query("SELECT * FROM Drinks", (err, results, fields) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });
});

// Get all Orders
app.get("/api/drinks", (req, res) => {
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
