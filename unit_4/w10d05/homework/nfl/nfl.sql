-- 1. List the names of all NFL teams'

SELECT name FROM teams;
--          name         
-- ----------------------
--  Buffalo Bills
--  Miami Dolphins
--  New England Patriots
--  New York Jets
--  Baltimore Ravens
--  Cincinnati Bengals
--  Cleveland Browns
--  Pittsburgh Steelers
--  Houston Texans
--  Indianapolis Colts
--  Jacksonville Jaguars
--  Tennessee Titans
--  Denver Broncos
--  Kansas City Chiefs
--  Oakland Raiders
--  San Diego Chargers
--  Dallas Cowboys
--  New York Giants
--  Philadelphia Eagles
--  Washington Redskins
--  Chicago Bears
--  Detroit Lions
--  Green Bay Packers
--  Minnesota Vikings
--  Atlanta Falcons
--  Carolina Panthers
--  New Orleans Saints
--  Tampa Bay Buccaneers
--  Arizona Cardinals
--  St. Louis Rams
--  San Francisco 49ers
--  Seattle Seahawks
-- (32 rows)


-- 2. List the stadium name and head coach of all NFC teams

-- SELECT stadium, head_coach FROM teams;
--             stadium            |   head_coach   
-- -------------------------------+----------------
--  Ralph Wilson Stadium          | Doug Marrone
--  Sun Life Stadium              | Joe Philbin
--  Gillette Stadium              | Bill Belichick
--  MetLife Stadium               | Rex Ryan
--  M&T Bank Stadium              | John Harbaugh
--  Paul Brown Stadium            | Marvin Lewis
--  FirstEnergy Stadium           | Mike Pettine
--  Heinz Field                   | Mike Tomlin
--  NRG Stadium                   | Bill OBrien
--  Lucas Oil Stadium             | Chuck Pagano
--  EverBank Field                | Gus Bradley
--  LP Field                      | Ken Whisenhunt
--  Sports Authority Field        | John Fox
--  Arrowhead Stadium             | Andy Reid
--  O.co Coliseum                 | Tony Sparano
--  Qualcomm Stadium              | Mike McCoy
--  AT&T Stadium                  | Jason Garrett
--  MetLife Stadium               | Tom Coughlin
--  Lincoln Financial Field       | Chip Kelly
--  FedExField                    | Jay Gruden
--  Soldier Field                 | Marc Trestman
--  Ford Field                    | Jim Caldwell
--  Lambeau Field                 | Mike McCarthy
--  TCF Bank Stadium              | Mike Zimmer
--  Georgia Dome                  | Mike Smith
--  Bank of America Stadium       | Ron Rivera
--  Mercedes-Benz Superdome       | Sean Payton
--  Raymond James Stadium         | Lovie Smith
--  University of Phoenix Stadium | Bruce Arians
--  Edward Jones Dome             | Jeff Fisher
--  Levis Stadium                 | Jim Harbaugh
--  CenturyLink Field             | Pete Carroll
-- (32 rows)


-- 3. List the head coaches of the AFC South

SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';
--    head_coach   
-- ----------------
--  Bill OBrien
--  Chuck Pagano
--  Gus Bradley
--  Ken Whisenhunt
-- (4 rows)

-- 4. The total number of players in the NFL

SELECT COUNT(*) FROM players;
--  count 
-- -------
--   1532
-- (1 row)


-- 5. The team names and head coaches of the NFC North and AFC East

SELECT name, head_coach FROM teams WHERE conference = 'AFC' AND division = 'East' OR conference = 'NFC' AND division = 'North';
--          name         |   head_coach   
-- ----------------------+----------------
--  Buffalo Bills        | Doug Marrone
--  Miami Dolphins       | Joe Philbin
--  New England Patriots | Bill Belichick
--  New York Jets        | Rex Ryan
--  Chicago Bears        | Marc Trestman
--  Detroit Lions        | Jim Caldwell
--  Green Bay Packers    | Mike McCarthy
--  Minnesota Vikings    | Mike Zimmer
-- (8 rows)


-- 6. The 50 players with the highest salaries

SELECT name, salary FROM players ORDER BY salary DESC LIMIT 50;
--           name           |  salary  
-- -------------------------+----------
--  Peyton Manning          | 18000000
--  Drew Brees              | 15760000
--  Dwight Freeney          | 14035000
--  Elvis Dumervil          | 14000000
--  Michael Vick            | 12500000
--  Sam Bradford            | 12000000
--  Jared Allen             | 11619850
--  Matt Ryan               | 11500000
--  Matthew Stafford        | 11500000
--  Tamba Hali              | 11250000
--  Jake Long               | 11200000
--  Nnamdi Asomugha         | 11000000
--  Trent Williams          | 11000000
--  Vincent Jackson         | 11000000
--  Cliff Avril             | 10600000
--  Calais Campbell         | 10600000
--  Joe Thomas              | 10500000
--  Brent Grimes            | 10431000
--  Peyton Manning (buyout) | 10400000
--  Chris Long              | 10310000
--  Philip Rivers           | 10200000
--  Jason Smith             | 10000000
--  David Harris            |  9900000
--  Wes Welker              |  9515000
--  Davin Joseph            |  9500000
--  Dwayne Bowe             |  9443000
--  Asante Samuel           |  9400000
--  Brandon Marshall        |  9300000
--  Ndamukong Suh           |  9250000
--  Tony Romo               |  9000000
--  Julius Peppers          |  8900000
--  Anthony Spencer         |  8800000
--  Karlos Dansby           |  8800000
--  Jordan Gross            |  8500000
--  Tyson Jackson           |  8005000
--  Adrian Peterson         |  8000000
--  Champ Bailey            |  8000000
--  Chris Johnson           |  8000000
--  Aaron Rodgers           |  8000000
--  Jason Peters            |  7900000
--  Eric Wright             |  7750000
--  Steve Smith             |  7750000
--  Santonio Holmes         |  7750000
--  Jay Cutler              |  7700000
--  Matt Forte              |  7700000
--  Ray Rice                |  7700000
--  Brian Urlacher          |  7500000
--  Johnathan Joseph        |  7250000
--  Gary Brackett           |  7200000
--  Ed Reed                 |  7200000
-- (50 rows)

-- 7. The average salary of all NFL players

SELECT AVG(salary) FROM players;
--          avg          
-- ----------------------
--  1579692.539817232376
-- (1 row)

-- 8. The names and positions of players with a salary above 10_000_000

SELECT name, position FROM players WHERE salary > 10000000;
--           name           | position 
-- -------------------------+----------
--  Jake Long               | T
--  Joe Thomas              | T
--  Dwight Freeney          | DE
--  Peyton Manning (buyout) | QB
--  Peyton Manning          | QB
--  Elvis Dumervil          | DE
--  Tamba Hali              | DE
--  Philip Rivers           | QB
--  Michael Vick            | QB
--  Nnamdi Asomugha         | CB
--  Trent Williams          | T
--  Matthew Stafford        | QB
--  Cliff Avril             | DE
--  Jared Allen             | DE
--  Matt Ryan               | QB
--  Brent Grimes            | CB
--  Drew Brees              | QB
--  Vincent Jackson         | WR
--  Calais Campbell         | DE
--  Sam Bradford            | QB
--  Chris Long              | DE
-- (21 rows)

-- 9. The player with the highest salary in the NFL

SELECT name, salary FROM players ORDER BY salary DESC LIMIT 1;
--       name      |  salary  
-- ----------------+----------
--  Peyton Manning | 18000000
-- (1 row)
-- PROBLEM! I couldn't get the MAX query to work here.


-- 10. The name and position of the first 100 players with the lowest salaries

SELECT name, position, salary FROM players ORDER BY salary ASC LIMIT 100;

--           name          | position | salary 
-- ------------------------+----------+--------
--  Phillip Dillard        |          | 369480
--  Eric Kettani           | RB       | 390000
--  Austin Sylvester       | RB       | 390000
--  Greg Orton             | WR       | 390000
--  Jerrod Johnson         | QB       | 390000
--  McLeod Bethel-Thompson | QB       | 390000
--  Jonathan Crompton      | QB       | 390000
--  Travon Bellamy         | CB       | 390000
--  Caleb King             | RB       | 390000
--  Mike Mohamed           | LB       | 390000
--  Kyle Nelson            | LS       | 390000
--  John Malecki           | G        | 390000
--  Nathan Bussey          | LB       | 390000
--  Robert James           | LB       | 390000
--  Markell Carter         | DE       | 390000
--  Aaron Lavarias         | DT       | 390000
--  Mark Dell              | WR       | 390000
--  Ronald Johnson         | WR       | 390000
--  Doug Worthington       | DT       | 390000
--  Derrick Jones          | WR       | 390000
--  Sealver Siliga         | DT       | 390000
--  Chase Beeler           | C        | 390000
--  Kenny Wiggins          | T        | 390000
--  Konrad Reuland         | TE       | 390000
--  Michael Wilhoite       | LB       | 390000
--  Garrett Chisolm        | G        | 390000
--  Juamorris Stewart      | WR       | 390000
--  Chad Spann             | RB       | 390000
--  Trevis Turner          | T        | 390000
--  Justin Medlock         | KR       | 390000
--  Armon Binns            | WR       | 390000
--  Derek Hall             | T        | 390000
--  Shaky Smithson         | WR       | 390000
--  Armando Allen          | RB       | 390000
--  DAndre Goodwin         | WR       | 390000
--  Jeremy Beal            | DE       | 390000
--  Brett Brackett         | TE       | 390000
--  Shaun Draughn          | RB       | 390000
--  John Clay              | RB       | 390000
--  Tristan Davis          | RB       | 390000
--  Curtis Holcomb         | CB       | 390000
--  Jimmy Young            | WR       | 390000
--  Kevin Cone             | WR       | 390000
--  Cory Nelms             | CB       | 390000
--  Ben Guidugli           | TE       | 390000
--  David Gilreath         | WR       | 390000
--  Dontavia Bogan         | WR       | 390000
--  Joe Hastings           | WR       | 390000
--  Marshall McFadden      | LB       | 390000
--  Kade Weston            | DT       | 390000
--  Kyle Hix               | T        | 390000
--  Mark LeGree            | S        | 390000
--  Mike Hartline          | QB       | 390000
--  Jameson Konz           | WR       | 390000
--  Tyler Beiler           |          | 390000
--  Mike Blanc             | DT       | 390000
--  Corbin Bryant          | DT       | 390000
--  Michael Jasper         | DT       | 390000
--  Mike Rivera            | LB       | 390000
--  Pat Devlin             | QB       | 390000
--  Jerome Messam          | RB       | 390000
--  Jamie McCoy            | TE       | 390000
--  Lestar Jean            | WR       | 390000
--  Malcolm Williams       | CB       | 390000
--  Ricky Sapp             | DE       | 390000
--  Rashad Carmichael      | CB       | 390000
--  Alex Silvestro         | DT       | 390000
--  Adam Weber             | QB       | 390000
--  Adam Grant             | T        | 390000
--  Jammie Kirlew          | DE       | 390000
--  Joe Reitz              | T        | 405000
--  Brandon Browner        | CB       | 415000
--  Jeff Byers             | C        | 415000
--  Jed Collins            | TE       | 415000
--  Aaron Berry            | CB       | 415000
--  Logan Payne            | WR       | 415000
--  Marcus Sherels         | CB       | 415000
--  T.J. Conley            | PR       | 415000
--  Cameron Sheffield      | LB       | 415000
--  Kyle Bosworth          | LB       | 415000
--  Garrett McIntyre       | DT       | 415000
--  John Estes             | C        | 415000
--  Thomas Austin          | G        | 415000
--  Emmanuel Stephens      | DT       | 415000
--  Markus White           | DE       | 440000
--  Ricardo Matthews       | DT       | 450000
--  Quinten Lawrence       | WR       | 465000
--  Bilal Powell           | RB       | 465000
--  Taylor Boggs           | C        | 465000
--  Kamar Aiken            | WR       | 465000
--  Dexter Jackson         | WR       | 465000
--  Justin Rogers          | CB       | 465000
--  Johnny White           | RB       | 465000
--  Eron Riley             | WR       | 465000
--  Tracy Wilson           | CB       | 465000
--  DaNorris Searcy        | S        | 465000
--  Chris White            | LB       | 465000
--  Sterling Moore         | CB       | 465000
--  Chris Hairston         | T        | 465000
--  Andrew Hawkins         | WR       | 465000
-- (100 rows)

-- 11. The average salary for a DE in the nfl

SELECT AVG(salary) FROM players WHERE position = 'DE';
--          avg          
-- ----------------------
--  2161326.377049180328
-- (1 row)

-- 12. The names of all the players on the Buffalo Bills
SELECT players.name, teams.name
FROM players, teams
WHERE players.team_id=teams.id AND teams.name LIKE 'Buffalo Bills';


-- 13. The total salary of all players on the New York Giants

SELECT SUM(salary) FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'Buffalo Bills';

--    sum    
-- ----------
--  78886125
-- (1 row)


-- 14. The player with the lowest salary on the Green Bay Packers

SELECT players.name, salary FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'Green Bay Packers' ORDER BY name DESC LIMIT 1;
--    name    | salary 
-- -----------+--------
--  Vic Sooto | 465000
-- (1 row)
