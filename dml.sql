/*---------------------------------------------------------------------
 
 CUSTOMERS
 
 *-------------------------------------------------------------------*/
-- get list of all Customers
SELECT
  *
FROM
  Customers;


-- counts total number of customers to date for home page statistics
SELECT
  COUNT(customer_id) AS NumberOfCustomers
From
  Customers;


-- update a Customer entry by ID
UPDATE
  Customers
SET
  name =: editCustomerName,
  phone =: editCustomerPhone,
WHERE
  customer_id =: selected_ID;


-- add a new Customer and query the last customer info for Customers Table
INSERT INTO
  Customers (name, phone)
VALUES
  (: custName,: custPhone);


SELECT
  *
FROM
  CUSTOMERS
WHERE
  customer_id = LAST_INSERT_ID();


-- delete a Customers entry by ID
DELETE FROM
  Customers
WHERE
  customer_id =: selected_ID;


/*---------------------------------------------------------------------
 
 DRINKS
 
 *-------------------------------------------------------------------*/
-- get list of all drinks
SELECT
  *
FROM
  Drinks;


-- counts total drinks sold for homepage statistics
SELECT
  SUM(drink_quantity) AS DrinksSold
FROM
  OrderItems;


-- update a drink
UPDATE
  Drinks
SET
  drink_name =: editDrinkName,
  drink_description =: editDrinkDescr,
  dink_price =: editDrinkPrice
WHERE
  drink_id =: selected_ID;


-- add a new drink and query details for that drink
INSERT INTO
  Drinks (drink_name, drink_description, drink_price)
VALUES
  (: drinkName,: drinkDescr,: drinkPrice);


SELECT
  *
FROM
  Drinks
WHERE
  drink_id = LAST_INSERT_ID();


-- delete a drink entry
DELETE FROM
  Drinks
WHERE
  drink_id =: selected_ID;


/*---------------------------------------------------------------------
 
 ORDERS
 
 *-------------------------------------------------------------------*/
-- get list of all Orders
SELECT
  *
FROM
  Orders;


-- for homepage statistics, counts total orders and orders placed today
SELECT
  COUNT(order_id) AS TotalOrders
FROM
  Orders;


SELECT
  COUNT(*) AS OrdersToday
from
  Orders
where
  date(order_date) = date(now());


-- update an order by ID
UPDATE
  Orders
SET
  customer_id =: editOrderCustID,
  order_date =: editOrderDate,
  order_total =: editOrderTotal
WHERE
  order_id =: selected_ID;


-- add a new order and query order details
INSERT INTO
  Orders (customer_id, order_date, order_total)
VALUES
  (: customerID,: orderDate,: orderTotal);


SELECT
  *
FROM
  Orders
  LEFT JOIN Customers ON Orders.customer_id = Customers.customer_id
WHERE
  order_id = LAST_INSERT_ID();


-- delete an Order
DELETE FROM
  Orders
WHERE
  order_id =: selected_ID;


/*---------------------------------------------------------------------
 
 ORDERITEMS
 
 *-------------------------------------------------------------------*/
-- get list of all OrderItems
SELECT
  *
FROM
  OrderItems;


-- update an OrderItems
UPDATE
  OrderItems
SET
  order_id =: editOrder_ID,
  drink_id =: editDrinkID,
  drink_quantity =: editDrinkID,
  ice_level =: editIceLevel,
  sugar_level =: editSugarLvl,
  dairy_option =: editDairyOption,
  boba_option = editBobaOption
WHERE
  order_items_id =: selected_ID;


-- add a new OrderItems
INSERT INTO
  OrderItems (
    order_id,
    drink_id,
    drink_quantity,
    ice_level,
    sugar_level,
    dairy_option,
    boba_option
  )
VALUES
  (
: orderID,
: drinkID,
: drinkQTY,
: iceLvl,
: sugarLvl,
: dairyOption,
: bobaOption
  );


-- delete an OrderItems
DELETE FROM
  OrderItems
WHERE
  order_id =: selected_ID;