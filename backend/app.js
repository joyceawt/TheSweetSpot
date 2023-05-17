//setup
const express = require("express");
const app = express();
const PORT = 9124;
const db = require("./database/db-connector");
const cors = require("cors");

app.use(cors());
app.use(express.json());

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

//update customer by ID
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

//add new customer
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

//delete customer by ID
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

// update drink by ID
app.put("/api/drinks/:id", (req, res) => {
  const id = req.params.id;
  const drink_name = req.body.drink_name;
  const drink_description = req.body.drink_description;
  const drink_price = req.body.drink_price;

  db.pool.query(
    "UPDATE Drinks SET drink_name = ?, drink_description = ?, drink_price = ? WHERE drink_id = ?",
    [drink_name, drink_description, drink_price, id],
    (err, result) => {
      if (err) {
        res.status(500).send("Error updating drink");
        return;
      }
      res.json(result);
    }
  );
});

//create a drink
app.post("/api/drinks", (req, res) => {
  const drink_name = req.body.drink_name;
  const drink_description = req.body.drink_description;
  const drink_price = req.body.drink_price;

  db.pool.query(
    "INSERT INTO Drinks (drink_name, drink_description, drink_price) VALUES (?, ?, ?)",
    [drink_name, drink_description, drink_price],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
});

//delete a drink
app.delete("/api/drinks/:id", (req, res) => {
  const id = req.params.id;

  db.pool.query("DELETE FROM Drinks WHERE drink_id= ?", id, (err, result) => {
    if (err) {
      res.status(500).send("Error deleting drink");
      return;
    }

    res.json(result);
  });
});

// Get all Orders
app.get("/api/orders", (req, res) => {
  db.pool.query("SELECT * FROM Orders", (err, results) => {
    if (err) {
      res.status(500).send("Error fetching orders");
      return;
    }
    res.json(results);
  });
});

// update order by ID
app.put("/api/orders/:id", (req, res) => {
  const id = req.params.id;
  const customer_id = req.body.customer_id;
  const order_total = req.body.order_total;
  const order_date = req.body.order_date;

  db.pool.query(
    "UPDATE Orders SET customer_id = ?, order_total = ?, order_date = ? WHERE order_id = ?",
    [customer_id, order_total, order_date, id],
    (err, result) => {
      if (err) {
        res.status(500).send("Error updating drink");
        return;
      }
      res.json(result);
    }
  );
});

//create a order
app.post("/api/orders", (req, res) => {
  const customer_id = req.body.customer_id;
  const order_total = req.body.order_total;
  const order_date = req.body.order_date;

  db.pool.query(
    "INSERT INTO Orders (customer_id, order_total, order_date) VALUES (?, ?, ?)",
    [customer_id, order_total, order_date],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
});

//delete an order
app.delete("/api/orders/:id", (req, res) => {
  const id = req.params.id;

  db.pool.query("DELETE FROM Orders WHERE order_id= ?", id, (err, result) => {
    if (err) {
      res.status(500).send("Error deleting order");
      return;
    }

    res.json(result);
  });
});

//listener
app.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT} ; press Ctrl-C to terminate.`
  );
});
