/*---------------------------------------------------------------------

DRINKS

*-------------------------------------------------------------------*/

-- get list of all drinks
SELECT * FROM Drinks;

-- get a singular drink info for populating EDITING page
SELECT * FROM Drinks WHERE drink_id = :selected_ID;

-- add a new drink
INSERT INTO Drinks (drink_name, drink_description, dink_price) 
VALUES (:drinkName, :drinkDescr, :drinkPrice);

-- update a drink
UPDATE Drinks 
SET drink_name = :editDrinkName, 
	drink_description = :editDrinkDescr,
	dink_price = :editDrinkPrice
WHERE drink_id = :selected_ID;

-- delete a drink entry
DELETE FROM Drinks WHERE drink_id = :selected_ID;


/*---------------------------------------------------------------------

ORDERS

*-------------------------------------------------------------------*/

-- get list of all Orders
SELECT * FROM Orders;

-- get a singular order info for populating EDITING page
SELECT * FROM Orders WHERE rder_id = :selected_ID;

-- add a new order
INSERT INTO Orders (customer_id, order_date, order_total) 
VALUES (:customerID, :orderDate, :orderTotal);

-- update an order
UPDATE Orders 
SET customer_id= :editOrderCustID, 
	order_date = :editOrderDate,
	order_total = :editOrderTotal
WHERE order_id = :selected_ID;

-- delete an Order
DELETE FROM Orders WHERE order_id = :selected_ID;




/*---------------------------------------------------------------------

ORDERITEMS

*-------------------------------------------------------------------*/

-- get list of all OrderItems
SELECT * FROM OrderItems;

-- get a singular OrderItems info for populating EDITING page
SELECT * FROM OrderItems WHERE order_items_id = :selected_ID;

-- add a new OrderItems
INSERT INTO OrderItems (order_id, drink_id, drink_quantity, ice_level, sugar_level, dairy_option, boba_option) 
VALUES (:orderID, :drinkID, :drinkQTY, :iceLvl, :sugarLvl, :dairyOption, :bobaOption);

-- update an OrderItems
UPDATE OrderItems 
SET order_id = :editOrder_ID, 
	drink_id = :editDrinkID, 
	drink_quantity = :editDrinkID, 
	ice_level = :editIceLevel, 
	sugar_level = :editSugarLvl, 
	dairy_option = :editDairyOption, 
	boba_option = editBobaOption
	
WHERE order_items_id = :selected_ID;

-- delete an OrderItems
DELETE FROM OrderItems WHERE order_id = :selected_ID;



/*---------------------------------------------------------------------

CUSTOMERS

*-------------------------------------------------------------------*/

-- get list of all Customers
SELECT * FROM Customers;

-- get a singular Customers info for populating EDITING page
SELECT * FROM Customers WHERE customer_id = :selected_ID;

-- add a new Customer
INSERT INTO Customers (name, phone) 
VALUES (:custName, :custPhone);

-- update a Customer entry
UPDATE Customers 
SET name = :editCustomerName, 
	phone = :editCustomerPhone,
WHERE customer_id = :selected_ID;

-- delete a Customers entry
DELETE FROM Customers WHERE customer_id = :selected_ID;