-- QUESTION 2 XP>>>>>>>
-- 1.
-- SELECT * FROM customer
-- 2. 
-- SELECT	CONCAT(first_name, ' ',last_name)  AS full_name FROM customer 
-- 3.
-- SELECT DISTINCT create_date FROM customer
-- 4.
-- SELECT * FROM customer ORDER BY first_name DESC
-- 5.
-- SELECT film_id, title, description,release_year, rental_rate FROM film
-- ORDER BY rental_rate ASC; 
-- 6.
-- select address, phone FROM address WHERE  district = 'Texas'
-- 7.
-- SELECT * FROM film WHERE film_id IN (15,150)
-- 8.SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title ILIKE 'Hacksaw Ridge';
-- 9. 
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title ILIKE 'ha%';
-- 10.
-- SELECT film_id, title, rental_rate
-- FROM film 
-- ORDER BY rental_rate 
-- LIMIT 10
-- 11.
-- SELECT film_id, title, rental_rate 
-- FROM film
-- ORDER BY rental_rate ASC 
-- OFFSET 10 ROWS 
-- FETCH NEXT 10 ROWS ONLY;
-- 12. 
-- SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date 
-- FROM customer
-- FULL JOIN payment
-- ON customer.customer_id = payment.customer_id
-- ORDER BY customer.customer_id ASC;
-- 13.
-- SELECT film.film_id, film.title  
-- FROM film
-- LEFT OUTER JOIN inventory
-- ON film.film_id = inventory.film_id
-- ORDER BY film.film_id ASC;
-- 14.
-- SELECT city.city, country.country  
-- FROM city
-- INNER JOIN country
-- ON city.country_id = country.country_id
-- ORDER BY country.country  ASC, city.city ASC ;
-- 15.
-- SELECT customer.customer_id,customer.first_name, customer.last_name,
-- payment.amount,payment.payment_date,
-- staff.staff_id 
-- FROM customer 
-- JOIN PAYMENT 
-- ON customer.customer_id = payment.customer_id
-- JOIN staff 
-- ON payment.staff_id = staff.staff_id
-- ORDER BY staff.staff_id ASC
