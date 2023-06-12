--
-- The Sweet Spot, Joyce Au, Samantha Perona
-- Team 25
-- SQL file for CS340 Portfolio Project
--
-- Disable foreign key check and autocommit
--
SET
  FOREIGN_KEY_CHECKS = 0;


SET
  AUTOCOMMIT = 0;


--
-- Table structure for Customers
--
DROP TABLE
  IF EXISTS Customers;


CREATE TABLE
  Customers(
    customer_id int NOT NULL AUTO_INCREMENT,
    name varchar(50),
    phone bigint NOT NULL,
    PRIMARY KEY (customer_id)
  );


DROP TABLE
  IF EXISTS Orders;


--
-- Table structure for Orders
--
CREATE TABLE
  Orders(
    order_id int NOT NULL AUTO_INCREMENT,
    customer_id int,
    order_date datetime NOT NULL,
    order_total decimal(10, 2) NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id) ON DELETE
    SET
      NULL
  );


DROP TABLE
  IF EXISTS Drinks;


--
-- Table structure for Drinks
--
CREATE TABLE
  Drinks(
    drink_id int NOT NULL AUTO_INCREMENT,
    drink_name varchar(250) NOT NULL,
    drink_description varchar(250) NOT NULL,
    drink_price decimal(10, 2) NOT NULL,
    PRIMARY KEY (drink_id)
  );


--
-- Table structure for OrderItems
--
DROP TABLE
  IF EXISTS OrderItems;


CREATE TABLE
  OrderItems(
    order_items_id int NOT NULL AUTO_INCREMENT,
    order_id int NOT NULL,
    drink_id int NOT NULL,
    drink_quantity int NOT NULL,
    ice_level decimal(3, 2) not NULL,
    sugar_level decimal (3, 2) not NULL,
    dairy_option boolean not NULL,
    boba_option boolean not NULL,
    PRIMARY KEY (order_items_id),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (drink_id) REFERENCES Drinks(drink_id) ON DELETE CASCADE
  );


--
-- Dumping data for Customers
-- All phone numbers taken from https://www.fakepersongenerator.com/fake-phone-number
--
LOCK TABLES
  Customers WRITE;


INSERT INTO
  Customers (name, phone)
VALUES
  ('John Doe', 4058931481),
  ('Jane Doe', 7162077697),
  ('John Smith', 5613267407);


UNLOCK TABLES
;


--
-- Dumping data for Orders
--
LOCK TABLES
  Orders WRITE;


INSERT INTO
  Orders (customer_id, order_date, order_total)
VALUES
  (1, '2023-04-27 12:00:00', 7.00),
  (2, '2023-02-12 17:00:00', 14.05),
  (3, '2023-02-12 19:00:00', 21.00);


UNLOCK TABLES
;


--
-- Dumping data for OrderItems
--
LOCK TABLES
  Drinks WRITE;


INSERT INTO
  Drinks (drink_name, drink_description, drink_price)
VALUES
  (
    'Brown Sugar Lover',
    'Brown sugar, Black tapioca pearls, Fresh milk',
    7.00
  ),
  (
    'Earl Gray Milk Tea',
    'A blend of milk & citrusy taste from Earl Gray Tea',
    7.50
  ),
  (
    'Classic Milk Tea With Golden Pearls',
    'All time favorite with golden pearls',
    7.00
  );


UNLOCK TABLES
;


--
-- Dumping data for OrderItems
-- drink ideas taken from https://www.singmenu.com/liho-tea-menu/
--
LOCK TABLES
  OrderItems WRITE;


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
  (1, 1, 1, 1.0, 0.5, 1, 1),
  (2, 2, 1, 0.5, 0.5, 1, 1),
  (2, 3, 1, 1.0, 1.0, 1, 1),
  (3, 3, 3, 1.0, 0.5, 1, 1);


UNLOCK TABLES
;


--
-- Re-enable foreign key check and commit
--
SET
  FOREIGN_KEY_CHECKS = 1;


COMMIT
;