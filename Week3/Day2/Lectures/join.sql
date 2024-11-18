-- CREATE TABLE movies(
-- movie_id SERIAL,
-- movie_title VARCHAR (50) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- );


-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
--     ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
--     ( 'Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id;

-- CREATE TABLE producers(
-- producer_id SERIAL,
-- producer_name VARCHAR(100) NOT NULL,
-- producer_lastname VARCHAR(100) NOT NULL,
-- movie_producer_id INTEGER,
-- PRIMARY KEY (producer_id),
-- FOREIGN KEY (movie_producer_id) REFERENCES movies(movie_id))
-- select * from producers


-- INSERT INTO producers (producer_name, producer_lastname, movie_producer_id)
-- VALUES ('Lawrence', 'Bender', (SELECT movie_id from movies WHERE movie_title = 'Good Will Hunting')),
-- ('Wolfgang', 'Petersen', (SELECT movie_id from movies WHERE movie_title= 'Troya'))

-- SELECT * FROM producers

SELECT producers.producer_name, producers.producer_lastname, movies.movie_title
FROM producers
INNER JOIN movies
ON producers.movie_producer_id = movies.movie_id