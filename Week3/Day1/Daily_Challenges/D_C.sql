-- CREATE TABLE actors
-- (
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (50) NOT NULL,
-- last_name VARCHAR (100) NOT NULL,
-- age DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL
-- )

-- SELECT * FROM actors

-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES ('Matt','Damon', '1970/10/08', 5)
-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES ('George','Clooney', '1961/05/06', 5)

-- SELECT * FROM actors
-- SET datestyle to 'ISO, DMY'
-- SHOW datestyle

-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES ('Charlize','Theron', '1975/08/06', 7)
-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES ('Angelina','Jolie', '1961/06/04', 3)
-- SELECT * FROM actors

--  INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES
-- ('Jonny','Depp', '1963/06/09', 4),
-- ('Jeniffer','Lawrence', '1990/08/15', 3),
-- ('Tom','Cruise', '1963/10/13', 4);
-- SELECT * FROM actors

-- SELECT * FROM actors WHERE first_name = 'Matt'


-- //////DAILY CHALLENG//////
-- 1.
-- SELECT COUNT(actor_id) FROM actors
-- 2.
-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES ('','', '', )

-- >>output>>> ERROR:  syntax error at or near ")"
-- 		LINE 2: VALUES ('','', '', )
                           ^ 


