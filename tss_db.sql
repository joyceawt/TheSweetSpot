CREATE TABLE Customers(
    customer_id int NOT NULL AUTO_INCREMENT,
    name varchar(50),
    phone bigint, NOT NULL,
    PRIMARY KEY (customer_id)
);

CREATE TABLE Orders(
    order_id int NOT NULL AUTO_INCREMENT,
    customer_id int,
    order_date datetime NOT NULL,
    order_total decimal(10,2) NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE OrderItems(
    order_items_id int NOT NULL AUTO_INCREMENT,
    order_id int NOT NULL,
    drink_id int NOT NULL,
    drink_quantity int NOT NULL,
    ice_level int not NULL,
    sugar_level int not NULL,
    dairy_option boolean not NULL,
    boba_option boolean, not NULL,
    PRIMARY KEY (order_items_id),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (drink_id) REFERENCES Drinks(drink_id)
);

CREATE TABLE Drinks(
    drink_id int NOT NULL AUTO_INCREMENT,
    drink_name varchar(250) NOT NULL,
    drink_description varchar(250) NOT NULL,
    drink_price decimal(10,2) NOT NULL,
    PRIMARY KEY (drink_id)
);

--
-- Dumping data for Customers
-- All phone numbers taken from https://www.fakepersongenerator.com/fake-phone-number 
--

INSERT INTO Customers (name, phone) VALUES ('John Doe', 4058931481);
INSERT INTO Customers (name, phone) VALUES ('Jane Doe', 7162077697);
INSERT INTO Customers (name, phone) VALUES ('John Smith', 5613267407);

--
-- Dumping data for Orders
--

INSERT INTO Orders (customer_id, order_date, order_total) VALUES (1, '2023-04-27 12:00:00', 7.00);
INSERT INTO Orders (customer_id, order_date, order_total) VALUES (2, '2023-04-28 12:00:00', 7.00);