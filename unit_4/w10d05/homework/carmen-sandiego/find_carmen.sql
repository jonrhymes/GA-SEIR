-- TEST COMMAND AND SAMPLE OUTPUT
-- Record your query (or queries, some clues require more than one) below the clue, then comment out the output below it
-- use two `-` to comment at the start of a line, or highlight the text and press `⌘/` to toggle comments
-- EXAMPLE: SELECT ALL FROM THE TABLE COUNTRY AND LIMIT IT TO ONE ENTRY

SELECT * FROM COUNTRY LIMIT 1;

--  -[ RECORD 1 ]--+--------------------------
-- code           | AFG
-- name           | Afghanistan
-- continent      | Asia
-- region         | Southern and Central Asia
-- surfacearea    | 652090
-- indepyear      | 1919
-- population     | 22720000
-- lifeexpectancy | 45.9
-- gnp            | 5976.00
-- gnpold         |
-- localname      | Afganistan/Afqanestan
-- governmentform | Islamic Emirate
-- headofstate    | Mohammad Omar
-- capital        | 1
-- code2          | AF


-- Clue #1: We recently got word that someone fitting Carmen Sandiego's description has been traveling through Southern Europe. She's most likely traveling someplace where she won't be noticed, so find the least populated country in Southern Europe, and we'll start looking for her there.

SELECT population, name, continent, region  FROM country WHERE region = 'Southern Europe' ORDER BY population ASC LIMIT 5;
--  population |             name              | continent |     region      
-- ------------+-------------------------------+-----------+-----------------
--        1000 | Holy See (Vatican City State) | Europe    | Southern Europe
--       25000 | Gibraltar                     | Europe    | Southern Europe
--       27000 | San Marino                    | Europe    | Southern Europe
--       78000 | Andorra                       | Europe    | Southern Europe
--      380200 | Malta                         | Europe    | Southern Europe
-- (5 rows)




-- Clue #2: Now that we're here, we have insight that Carmen was seen attending language classes in this country's officially recognized language. Check our databases and find out what language is spoken in this country, so we can call in a translator to work with you.

SELECT * FROM countrylanguage WHERE countrycode = 'VAT';
--  countrycode | language | isofficial | percentage 
-- -------------+----------+------------+------------
--  VAT         | Italian  | t          |          0
-- (1 row)


-- Clue #3: We have new news on the classes Carmen attended – our gumshoes tell us she's moved on to a different country, a country where people speak only the language she was learning. Find out which nearby country speaks nothing but that language.

SELECT * FROM countrylanguage WHERE language = 'Italian' ORDER BY isofficial;
--  countrycode | language | isofficial | percentage 
-- -------------+----------+------------+------------
--  USA         | Italian  | f          |        0.6
--  MCO         | Italian  | f          |       16.1
--  CAN         | Italian  | f          |        1.7
--  FRA         | Italian  | f          |        0.4
--  DEU         | Italian  | f          |        0.7
--  ARG         | Italian  | f          |        1.7
--  AUS         | Italian  | f          |        2.2
--  LIE         | Italian  | f          |        2.5
--  BEL         | Italian  | f          |        2.4
--  BRA         | Italian  | f          |        0.4
--  LUX         | Italian  | f          |        4.6
--  SMR         | Italian  | t          |        100
--  VAT         | Italian  | t          |          0
--  ITA         | Italian  | t          |       94.1
--  CHE         | Italian  | t          |        7.7
-- (15 rows)



-- Clue #4: We're booking the first flight out – maybe we've actually got a chance to catch her this time. There are only two cities she could be flying to in the country. One is named the same as the country – that would be too obvious. We're following our gut on this one; find out what other city in that country she might be flying to.

SELECT * FROM city WHERE countrycode = 'SMR';
--   id  |    name    | countrycode |     district      | population 
-- ------+------------+-------------+-------------------+------------
--  3170 | Serravalle | SMR         | Serravalle/Dogano |       4802
--  3171 | San Marino | SMR         | San Marino        |       2294
-- (2 rows)



-- Clue #5: Oh no, she pulled a switch – there are two cities with very similar names, but in totally different parts of the globe! She's headed to South America as we speak; go find a city whose name is like the one we were headed to, but doesn't end the same. Find out the city, and do another search for what country it's in. Hurry!

SELECT * FROM city WHERE name LIKE '%Serra%';
--   id  |         name         | countrycode |     district      | population 
-- ------+----------------------+-------------+-------------------+------------
--   265 | Serra                | BRA         | Espï¿½rito Santo  |     302666
--   310 | Taboï¿½o da Serra    | BRA         | Sï¿½o Paulo       |     197550
--   370 | Itapecerica da Serra | BRA         | Sï¿½o Paulo       |     126672
--  3170 | Serravalle           | SMR         | Serravalle/Dogano |       4802
-- (4 rows)





-- Clue #6: We're close! Our South American agent says she just got a taxi at the airport, and is headed towards the capital! Look up the country's capital, and get there pronto! Send us the name of where you're headed and we'll follow right behind you!
SELECT capital FROM country WHERE code = 'BRA';
--  capital 
-- ---------
--      211
-- (1 row)

SELECT * FROM city WHERE id = 211;
--  id  |    name    | countrycode |     district     | population 
-- -----+------------+-------------+------------------+------------
--  211 | Brasï¿½lia | BRA         | Distrito Federal |    1969868
-- (1 row)





-- Clue #7: She knows we're on to her – her taxi dropped her off at the international airport, and she beat us to the boarding gates. We have one chance to catch her, we just have to know where she's heading and beat her to the landing dock.

-- Lucky for us, she's getting cocky. She left us a note, and I'm sure she thinks she's very clever, but if we can crack it, we can finally put her where she belongs – behind bars.

-- Our playdate of late has been unusually fun –
-- As an agent, I'll say, you've been a joy to outrun.
-- And while the food here is great, and the people – so nice!
-- I need a little more sunshine with my slice of life.
-- So I'm off to add one to the population I find
-- In a city of ninety-one thousand and now, eighty five.


-- We're counting on you, gumshoe. Find out where she's headed, send us the info, and we'll be sure to meet her at the gates with bells on.

SELECT * FROM city WHERE population = 91084;
--   id  |     name     | countrycode |  district  | population 
-- ------+--------------+-------------+------------+------------
--  4060 | Santa Monica | USA         | California |      91084
-- (1 row)




-- She's in Santa Monica, California, USA!


-- HUNGRY FOR MORE:

SELECT * FROM city WHERE name = 'Brasï¿½lia';
--  id  |    name    | countrycode |     district     | population 
-- -----+------------+-------------+------------------+------------
--  211 | Brasï¿½lia | BRA         | Distrito Federal |    1969868
-- (1 row)

UPDATE city SET name = 'Brasília' WHERE id = 211;
-- UPDATE 1

SELECT * FROM city WHERE id = 211;
--  id  |   name   | countrycode |     district     | population 
-- -----+----------+-------------+------------------+------------
--  211 | Brasília | BRA         | Distrito Federal |    1969868
-- (1 row)


SELECT * FROM city WHERE name LIKE '%¿½%' LIMIT 2;
--  id |        name        | countrycode |   district    | population 
-- ----+--------------------+-------------+---------------+------------
--  20 | ï¿½s-Hertogenbosch | NLD         | Noord-Brabant |     129170
--  40 | Sï¿½tif            | DZA         | Sï¿½tif       |     179055
-- (2 rows)

UPDATE city SET name = '''s-Hertogenbosch' WHERE id = 20;
-- UPDATE 1

SELECT * FROM city WHERE id = 20;
--  id |       name       | countrycode |   district    | population 
-- ----+------------------+-------------+---------------+------------
--  20 | 's-Hertogenbosch | NLD         | Noord-Brabant |     129170
-- (1 row)

UPDATE city SET name = 'Sétif' WHERE id = 40;
-- UPDATE 1

SELECT * FROM city WHERE id = 20;
--  id | name  | countrycode | district | population 
-- ----+-------+-------------+----------+------------
--  40 | Sétif | DZA         | Sï¿½tif  |     179055
-- (1 row)