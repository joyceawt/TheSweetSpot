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

//for statistics page, counts total customers
app.get("/api/totalCustomers", (req, res) => {
  db.pool.query(
    "SELECT COUNT(customer_id) AS NumberOfCustomers FROM Customers",
    (err, results) => {
      if (err) {
        res.status(500).send("Error counting customers");
        return;
      }
      res.json(results[0]["NumberOfCustomers"]);
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

// create a customer
app.post("/api/customers", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;

  const insertAndSelect =
    "INSERT INTO Customers (name, phone) VALUES (?, ?) ; SELECT * FROM Customers WHERE customer_id = LAST_INSERT_ID()";

  db.pool.query(insertAndSelect, [name, phone], (err, results) => {
    if (err) {
      res.status(500).send("Error creating a customer");
      return;
    }
    res.json(results[1][0]);
  });
});

//delete customer by ID
app.delete("/api/customers/:id", (req, res) => {
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
      res.status(500).send("Error fetching drinks");
      return;
    }
    res.json(results);
  });
});

//for statistics page, counts total drinks
app.get("/api/totalDrinks", (req, res) => {
  db.pool.query(
    "SELECT SUM(drink_quantity) As DrinksSold From OrderItems",
    (err, results) => {
      if (err) {
        res.status(500).send("Error counting total drinks sold");
        return;
      }
      res.json(results[0]["DrinksSold"]);
    }
  );
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

  const insertAndSelect =
    "INSERT INTO Drinks (drink_name, drink_description, drink_price) VALUES (?, ?, ?); SELECT * FROM Drinks WHERE drink_id = LAST_INSERT_ID()";

  db.pool.query(
    insertAndSelect,
    [drink_name, drink_description, drink_price],
    (err, results) => {
      if (err) {
        res.status(500).send("Error creating a drink");
        return;
      }
      res.json(results[1][0]);
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

//for statistics page, counts total customers
app.get("/api/orderStatistics", (req, res) => {
  db.pool.query(
    "SELECT COUNT(order_id) AS TotalOrders FROM Orders; SELECT COUNT(*) AS OrdersToday from Orders where date(order_date)=date(now());",
    (err, results) => {
      if (err) {
        res.status(500).send("Error counting orders");
        return;
      }
      const orderStatistics = {
        total: results[0][0]["TotalOrders"],
        today: results[1][0]["OrdersToday"],
      };
      res.json(orderStatistics);
    }
  );
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
  const customer_id =
    req.body.customer_id == "None" ? null : req.body.customer_id;
  const order_total = req.body.order_total;
  const order_date = req.body.order_date;

  const no_customer_id_query =
    "INSERT INTO Orders (order_total, order_date) VALUES (?, ?); SELECT * FROM Orders WHERE order_id = LAST_INSERT_ID()";

  const default_query =
    "INSERT INTO Orders (customer_id, order_total, order_date) VALUES (?, ?, ?); SELECT * FROM Orders WHERE order_id = LAST_INSERT_ID()";

  const query = customer_id == null ? no_customer_id_query : default_query;

  const query_array =
    customer_id == null
      ? [order_total, order_date]
      : [customer_id, order_total, order_date];

  db.pool.query(query, query_array, (err, result) => {
    if (err) {
      res.status(500).send("Error creating an order");
      return;
    }
    res.json(result[1][0]);
  });
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

// Get all OrderItems
app.get("/api/order_items", (req, res) => {
  db.pool.query("SELECT * FROM OrderItems", (err, results) => {
    if (err) {
      res.status(500).send("Error fetching order items");
      return;
    }
    res.json(results);
  });
});

// update orderItem by ID
app.put("/api/order_items/:id", (req, res) => {
  const id = req.params.id;
  const order_id = req.body.order_id;
  const drink_id = req.body.drink_id;
  const ice_level = req.body.ice_level;
  const sugar_level = req.body.sugar_level;
  const dairy_option = req.body.dairy_option;
  const boba_option = req.body.boba_option;
  const drink_quantity = req.body.drink_quantity;

  db.pool.query(
    "UPDATE OrderItems SET order_id = ?, drink_id = ?, ice_level = ?, sugar_level = ?, dairy_option = ?, boba_option = ?, drink_quantity = ? WHERE order_items_id = ?",
    [
      order_id,
      drink_id,
      ice_level,
      sugar_level,
      dairy_option,
      boba_option,
      drink_quantity,
      id,
    ],
    (err, result) => {
      if (err) {
        res.status(500).send("Error updating drink");
        return;
      }
      res.json(result);
    }
  );
});

//create an orderItem
app.post("/api/order_items", (req, res) => {
  const order_id = req.body.order_id;
  const drink_id = req.body.drink_id;
  const ice_level = req.body.ice_level;
  const sugar_level = req.body.sugar_level;
  const dairy_option = req.body.dairy_option;
  const boba_option = req.body.boba_option;
  const drink_quantity = req.body.drink_quantity;

  db.pool.query(
    "INSERT INTO OrderItems (order_id, drink_id, ice_level, sugar_level, dairy_option, boba_option, drink_quantity) VALUES (?, ?, ?, ?, ?, ?, ?); SELECT * FROM OrderItems WHERE order_items_id = LAST_INSERT_ID()",
    [
      order_id,
      drink_id,
      ice_level,
      sugar_level,
      dairy_option,
      boba_option,
      drink_quantity,
    ],
    (err, result) => {
      if (err) {
        res.status(500).send("Error updating order items");
        return;
      }
      res.json(result[1][0]);
    }
  );
});

//delete an orderItem
app.delete("/api/order_items/:id", (req, res) => {
  const id = req.params.id;

  db.pool.query(
    "DELETE FROM OrderItems WHERE order_items_id= ?",
    id,
    (err, result) => {
      if (err) {
        res.status(500).send("Error deleting order");
        return;
      }

      res.json(result);
    }
  );
});

//listener
app.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT} ; press Ctrl-C to terminate.`
  );
});
