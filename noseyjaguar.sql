-- --CREATE TABLE IN DB
-- CREATE TABLE noseyjaguar.burgers (
--   id int NOT NULL AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL,
--   description VARCHAR(255),
--   price DOUBLE(40, 2) NOT NULL,
--   kcal int,
--   PRIMARY KEY (id)
-- );

-- -- ADD ITEM TO DB_TABLE
-- INSERT INTO noseyjaguar.burgers (
--   name,
--   description,
--   price,
--   kcal
-- ) VALUES (
--   "McNic",
--   "A beautiful burger full of love and happiness.",
--   99.99,
--   0
-- );

-- -- GET FROM DB_TABLE
-- SELECT * FROM noseyjaguar.burgers;
SELECT * FROM noseyjaguar.users

-- -- EDIT RECORD
-- UPDATE noseyjaguar.burgers SET
--   description = "Tasty meat with Pineapple!"
--   WHERE id = 1;

-- -- REMOVE RECORD
-- DELETE FROM noseyjaguar.burgers WHERE id = 1;

-- DROP TABLE noseyjaguar.burgers;

-- DROP TABLE noseyjaguar.users;

-- CREATE TABLE noseyjaguar.users (
--   id VARCHAR(255) NOT NULL,
--   name VARCHAR(255),
--   email VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   PRIMARY KEY (id),
--   UNIQUE KEY email (email)
-- )
