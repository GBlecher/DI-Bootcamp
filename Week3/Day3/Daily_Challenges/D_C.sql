-- PART 1
-- 1.
-- CREATE TABLE customer
-- (	
-- 	id SERIAL PRIMARY KEY, 
-- 	first_name VARCHAR(50) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL
-- )

-- CREATE TABLE customer_profile
-- (
-- 	id SERIAL PRIMARY KEY,  
-- 	isLoggedIn BOOLEAN NOT NULL DEFAULT FALSE,
-- 	customer_id INT,
-- 	FOREIGN KEY (customer_id) REFERENCES customer(id)
-- )


-- 2.
-- INSERT INTO customer(first_name,last_name) 
-- VALUES
-- 	('John', 'Doe'),
-- 	('Jerome', 'Lalu'),
-- 	('Lea', 'Rive');

-- 3.
-- INSERT INTO customer_profile(isLoggedIn,customer_id)
-- VALUES
-- (TRUE, (SELECT id FROM customer WHERE first_name = 'John' AND last_name = 'Doe')),
-- (FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));
-- 4.1
-- SELECT customer.first_name/*,customer_profile.isLoggedIn*/
-- FROM customer
-- FULL JOIN customer_profile
-- ON customer.id =customer_profile.customer_id
-- GROUP BY customer.first_name,customer_profile.isLoggedIn
-- HAVING  customer_profile.isLoggedIn IS TRUE
-- 4.2
-- SELECT customer.first_name,customer_profile.isLoggedIn
-- FROM customer
-- FULL JOIN customer_profile
-- ON customer.id =customer_profile.customer_id
-- GROUP BY customer.first_name,customer_profile.isLoggedIn;
-- 4.3
-- SELECT count(*)
-- FROM customer_profile WHERE isLoggedIn is NOT TRUE
-- _________________________________________________________________________________________________________
-- Part II:

-- 1.
-- CREATE TABLE book
-- (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR (100)NOT NULL,
-- 	author VARCHAR (50) NOT NULL
-- )
-- 2.
-- INSERT INTO book (title,author)
-- VALUES 
-- 	('Alice In Wonderland', 'Lewis Carroll'),
-- 	('Harry Potter', 'J.K Rowling'),
-- ('Cherub', 'Robert Muchamore');
-- 3.
-- CREATE TABLE student
-- (	
-- 	 student_id SERIAL PRIMARY KEY,
-- 	 name VARCHAR (100) NOT NULL UNIQUE, 
-- 	 age INT CHECK (age <= 15)
-- )
-- 4.
-- INSERT INTO student(name, age)
-- VALUES
-- 	('John', 12),
-- 	('Lera', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14);

-- 5.
-- CREATE TABLE  library 
-- (
-- 	book_fk_id INT,
-- 	student_fk_id INT,
-- 	borrowed_date DATE,
-- 	PRIMARY KEY(book_fk_id,student_fk_id),
-- 	FOREIGN KEY (book_fk_id ) REFERENCES book(book_id)
-- 		ON DELETE CASCADE ON UPDATE CASCADE,
-- 	FOREIGN KEY (student_fk_id) REFERENCES student(student_id) 
-- 		ON DELETE CASCADE ON UPDATE CASCADE
-- )
-- 6.
-- INSERT INTO library(book_fk_id, student_fk_id, borrowed_date)
-- VALUES
-- 	((SELECT book_id FROM book where title = 'Alice In Wonderland'),
-- 	(SELECT student_id FROM student WHERE name = 'John'),
-- 	'2022-02-15'),

-- ((SELECT book_id FROM book where title = 'Cherub'),
-- (SELECT student_id FROM student WHERE name = 'Bob'),
-- '2021-03-03'), 
-- TO CHECKER: I HAD AN ISSUE WITH TO KILL A MOCKING BIRD SO I CHANGED IT, I WAS NOT ALONE
	
	
-- ((SELECT book_id FROM book where title = 'Alice In Wonderland'),
-- (SELECT student_id FROM student WHERE name = 'Lera'),
-- '2021-05-23'),

-- 	((SELECT book_id FROM book where title = 'Harry Potter'),
-- 	(SELECT student_id FROM student WHERE name = 'Bob'),
-- 	'2021-08-12');
-- 7.1	
-- SELECT * FROM library

-- 7.2
-- SELECT student.name, book.title
-- FROM library
-- JOIN student 
-- ON library.student_fk_id =Student.student_id
-- Join book on library.book_fk_id = book.book_id;
-- 7.3
-- SELECT AVG(student.age)
-- FROM library
-- JOIN Student ON Library.student_fk_id = Student.student_id
-- JOIN book ON library.book_fk_id = Book.book_id
-- WHERE book.title = 'Alice In Wonderland';

-- 7.4
-- DELETE FROM student WHERE name = 'John'
-- >>>> All record that was associated with 'John' is deleted










