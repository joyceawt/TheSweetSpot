//setup
const express = require("express");
const app = express();
const PORT = 9124;
const db = require("./database/db-connector");
const cors = require("cors");

app.use(cors());


// filter functions

function filterSearchCustomer(req){

  // ensures that the parameter names matches our columns in the db.
  // filter out any un-needed parameters.
  let params = {}

  if (req.query.customer_id !== undefined) {
      params.customer_id = req.query.customer_id;
  } if (req.query.name !== undefined) {
      params.name = req.query.name;
  } if (req.query.phone !== undefined) {
      params.phone = req.query.phone;
  }

  return params;
}


// Customers: original.
/*
app.get("/api/customers", (req, res) => {
  db.pool.query("SELECT * FROM Customers", (err, results, fields) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });
});
*/

// Customers: with filters based on parameters.
app.get("/api/customers", (req, res) => {
  let params = filterSearchCustomer(req);
  console.log(params);

  // create a QUERY based on params.
  let reqQuery=``;

  if (params.customer_id !== undefined){
    reqQuery = `SELECT * FROM Customers WHERE customer_id = ${params.customer_id}`;
  }if(params.name !== undefined){
    reqQuery = `SELECT * FROM Customers WHERE name = ${params.name}`;
  }if(params.phone !== undefined){
    reqQuery = `SELECT * FROM Customers WHERE phone = ${params.phone}`;
  }else{
    reqQuery = "SELECT * FROM Customers";
  }


  db.pool.query(`${reqQuery}`, (err, results, fields) => {
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

  db.pool.query(`SELECT * FROM Customers WHERE customer_id = ${req.params.id}`, (err, results, fields) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });


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
  db.pool.query("SELECT * FROM Drinks", (err, results, fields) => {
    if (err) {
      res.status(500).send("Error fetching customers");
      return;
    }
    res.json(results);
  });
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
