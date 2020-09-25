// create 5 burgers (at least 3 should be beef)

// burger 1: meatless
db.burgers.insert(
... {meat: 'Jackfruit'
... , cheese: false,
... toppings: ['coleslaw', 'pickles', 'onions', 'guacamole']})

// burger 2: meatless
db.burgers.insert(
... {meat: 'chickpea',
... cheese: true,
... toppings: ['mustard', 'fried green tomatoes', 'lettuce']})

// burger 3: meat
db.burgers.insert(
... {meat: 'beef', cheese: true, toppings: ['mayonnaise', 'mustard', 'lettuce']})

// burger 4: meat
db.burgers.insert(
... {meat: 'beef', cheese: false, toppings: ['ketchup', 'onions', 'french fries']})

// burger 5: meat
db.burgers.insert(
... {meat: 'beef', cheese: true, toppings: ['mustard', 'lettuce', 'ketchup']})

// find all the burgers
db.burgers.find()

// show just the meat of each burger
db.burgers.find({}, {meat: 1, _id: 0})

// show just the toppings of each burger
db.burgers.find({}, {toppings: 1, _id: 0})

// show everything but the cheese
db.burgers.find({}, {cheese: 0})

// find all the burgers with beef
db.burgers.find({meat: 'beef'})

// find all the burgers that are not beef
db.burgers.find({meat: {$ne: 'beef'}})

// find the first burger with cheese
db.burgers.findOne({cheese: true})

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.findOneAndUpdate({cheese: true}, {$set: {cheese: 'double cheese'}})

// find the burger you updated to have double cheese
db.burgers.find({cheese: 'double cheese'})

// find and update all the beef burgers to be 'veggie'
db.burgers.update({}, {$set: {meat: 'veggie'}}, {multi: true})


// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.findOneAndDelete({cheese: 'double cheese'})

// drop the collection
//Expected Output
//true
db.burgers.drop()

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'
db.burgers.updateMany({}, {$rename: {'cheese': 'pumpkinSpice'}})

// find all the burgers with ketchup (or another topping you used at least once)
db.burgers.find({toppings: 'ketchup'})

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles


// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 
