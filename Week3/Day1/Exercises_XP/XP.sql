-- 1.
-- CREATE TABLE items
-- (
-- item_id SERIAL PRIMARY KEY,
-- item_name VARCHAR (25) NOT NULL,
-- item_price SMALLINT NOT NULL
-- )

-- CREATE TABLE customers
-- (
-- customer_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (50) NOT NULL,
-- last_name VARCHAR (100) NOT NULL
-- )


-- 2.
-- INSERT INTO items (item_name,item_price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('fan',80);

-- INSERT INTO customers (first_name,last_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');


-- 3.1
-- SELECT * FROM items
-- 3.2
-- SELECT * FROM items WHERE item_price > 80
-- 3.3
-- SELECT * FROM items WHERE item_price <= 300
-- 3.4 
-- SELECT * FROM customers WHERE last_name = 'Smith'
-- no output no one named 'smith' in table
-- 3.5 
-- SELECT * FROM customers WHERE last_name = 'Jones'
-- 3.6 
-- SELECT * FROM customers WHERE first_name != 'Scott'
