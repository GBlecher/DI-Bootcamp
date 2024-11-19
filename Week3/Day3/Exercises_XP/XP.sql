/* 🌟 Exercise 1: DVD Rental*/

-- 1.
SELECT language_id, name FROM language

-- 2.
-- SELECT film.title, film.description,  language.name 
-- FROM film
-- LEFT JOIN language
-- ON film.language_id = language.language_id
-- GROUP BY film.title,language.name,film.description;

-- 3.
-- SELECT  film.title, film.description, language.name 
-- FROM film
-- RIGHT  JOIN language
-- ON film.language_id = language.language_id
-- GROUP BY film.title,language.name,film.description

-- 4.
-- CREATE TABLE new_film
-- (
-- film_id SERIAL PRIMARY KEY, 
-- film_name VARCHAR (100) NOT NULL
-- )

-- INSERT INTO new_film(film_name) VALUES
-- ('Forrest Gump'),
-- ('Saving Private Ryan'),
-- ('Cast Away'),
-- ('Toy Story'),
-- ('Catch Me If You Can'),
-- ('The Terminal'),
-- ('Sully'),
-- ('The Davinci Code'),
-- ('The Green Mile'),
-- ('Captain Phillips');

-- 5.
-- CREATE TABLE customer_review
-- (
-- review_id SERIAL PRIMARY KEY,
-- film_id INT,
-- language_id INT,
-- rev_title VARCHAR (100),
-- score INT CHECK (score BETWEEN 1 AND 10),
-- review_text TEXT,
-- last_update DATE,
-- FOREIGN KEY (film_id) REFERENCES new_film(film_id) ON DELETE CASCADE,
-- FOREIGN KEY (language_id) REFERENCES language(language_id)
-- )

-- 6.
-- INSERT INTO customer_review(film_id, language_id, rev_title, score, review_text,last_update) VALUES
-- (
-- 	(SELECT film_id FROM new_film WHERE film_name= 'Forrest Gump'),
-- 	(SELECT language_id FROM language WHERE name = 'English'), 
-- 	'An Emotional Journey', 
-- 	10, 
-- 	'Forrest Gump is a poignant tale about life and love. A must-watch!',
-- CURRENT_DATE
-- ),
-- (
-- 	(SELECT film_id FROM new_film WHERE film_name= 'Captain Phillips'),
-- 	(SELECT language_id FROM language WHERE name = 'English'),
-- 	'A Gripping Tale of Survival',
-- 	9,
-- 	'Captain Phillips is a nail-biting thriller that showcases both human resilience and the harsh realities of piracy',
-- CURRENT_DATE
-- );


-- 7.
-- DELETE FROM new_film where film_name = 'Captain Phillips'
-- SELECT * FROM customer_review
-- >> deletes the review in customer_review that had the same name
-- ___________________________________________________________________________________________________________________________________


-- 🌟 Exercise 2 : DVD Rental
-- 1.
-- UPDATE film
-- SET language_id = 2
-- WHERE film_Id < 10

-- 2. 
-- from customer to address using address_id, before you just add an address id you need to verify that it already exists in address table
-- 3.
-- DROP TABLE customer_review
-- select * from customer_review
-- >>> it is infact easy as customer_review is the  child table so no other  table is reliant on it
-- 4.
-- SELECT count(*)
-- FROM rental 
-- WHERE return_date IS NULL;
-- >>>> output 183
-- 5.

-- SELECT film.title, film.rental_rate ,rental.return_date 
-- FROM film
-- INNER JOIN inventory ON film.film_id = inventory.film_id
-- INNER JOIN rental ON inventory.inventory_id =  rental.inventory_id
-- GROUP BY inventory.inventory_id,film.title, film.rental_rate, rental.return_date
-- HAVING rental.return_date IS NULL
-- ORDER BY film.rental_rate DESC 
-- LIMIT 30;

-- 6.1
-- SELECT film.title, actor.first_name, actor.last_name, film.description   
-- FROM film
-- INNER JOIN film_actor ON film.film_id = film_actor.film_id
-- INNER JOIN actor ON actor.actor_id = film_actor.actor_id
-- GROUP BY film.title, actor.first_name, actor.last_name, film.description
-- HAVING (actor.first_name = 'Penelope' and actor.last_name = 'Monroe') and  film.description ILIKE '%sumo wrestler%';

-- 6.2
-- SELECT film.title, film.rating, film.length, category.name   
-- FROM film
-- INNER JOIN film_category ON film.film_id = film_category.film_id
-- INNER JOIN category ON category.category_id = film_category.category_id
-- GROUP BY film.title, film.rating, film.length, category.name
-- HAVING film.rating = 'R' and film.length < 60 and category.name = 'Documentary';

-- 6.3
-- SELECT film.title, customer.first_name,customer.last_name, film.rental_rate,rental.return_date  
-- FROM film
-- INNER JOIN inventory ON film.film_id = inventory.film_id
-- INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN customer ON rental.customer_id = customer.customer_id
-- GROUP BY film.title, customer.first_name, customer.last_name, film.rental_rate,rental.return_date
-- HAVING (customer.first_name ='Matthew' AND customer.last_name ='Mahan') 
-- 	AND (film.rental_rate > 4.00) 
-- 	AND (rental.return_date BETWEEN '2005-07-28' AND '2005-08-01');

-- 6.4
-- SELECT film.title, film.description, customer.first_name,customer.last_name, film.replacement_cost
-- FROM film
-- INNER JOIN inventory ON film.film_id = inventory.film_id
-- INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN customer ON rental.customer_id = customer.customer_id
-- GROUP BY film.title, film.description, customer.first_name,customer.last_name, film.replacement_cost
-- HAVING (customer.first_name ='Matthew' AND customer.last_name ='Mahan')
-- 	AND( film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
	-- AND (film.replacement_cost>18.99);

/* >>>>TO CHECKER: QUESTION DOESNT SPECIFY HOW MUCH EXPENSIVE IS SO I CHEKED
		THE LIST WITHOUT THE PRICE AND CHOSE A PRICE BETWEEN THE 2 MOST EXPENSIVE SO AS TO
    	ONLY RETURN ONE MOVIE TITLE*/
