// Dependencies
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const show = console.log;
const db = mongoose.connection;

// Config
const mongoURI = 'mongodb://localhost:27017/hotel';

// Models
const Hotel = require('./models/hotels.js');
const hotelSeed = require('./models/seed.js');

// Connect to Mongo
mongoose.connect(mongoURI, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true}, () => show('Mongo running at', mongoURI));

// Error / Success
db.on('error', (error) => show(error.message + ' is Mongod not running?'));
db.on('connected', () => show('mongo CONNECTED. Congratulations, Software Engineer!', mongoURI));
db.on('disconnected', () => show('mongo DISCONNECTED.'));
db.on('open', () => show('Connection made.'));


// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// Create 13 hotels in the database:
// show(hotelSeed)

// Find all our hotels and console.log them:
// Hotel.find({}, (error, hotel) => {
//     if(error){
//         show(error)
//     }else{
//         show(hotel)
//     }
//     db.close();
// })

// Find all the hotels but only return the hotel name and console.log them:
// Hotel.find({}, 'name', (error, hotel) => {
//     if(error) { show(error) }
//     else { show(hotel) }
//     db.close()
// })

// Find just your hotel using a search parameter that would only match your hotel: 
// Hotel.find({tags: 'coffee'}, (error, hotel) => {
//     if(error) { show(error) }
//     else { show(hotel) }
//     db.close()
// })

// Find all the hotels that have vacancies, also exclude ratings:
// Hotel.find({ vacancies: true }, { rating: 0 },  (error, hotel) => {
//      if(error) { show(error) }
//     else { show(hotel) }
//     db.close()
// })

// How would you do this if there was a hotel with a rating of 0? 

// Turns out Hotelicopter was an April Fool's prank! Let's delete that one from our database:
// Hotel.remove({name: 'Hotelicopter'}, (error, hotel) => {
//     if(error) {show(error)}
//     else {show(hotel)}
//     db.close()
// })

// Hilbert's Hotel is getting terrible ratings all it does is give everyone headaches and no room service. Let's just remove that one as well:
// Hotel.remove({name: `Hilbert'\s Hotel`}, (error, hotel) => {
//     if(error) {show(error)}
//     else {show(hotel)}
//     db.close()
// })

// The hotel in the Colorado Rockies has been closed for undisclosed reasons. Delete this hotel too:
// Hotel.remove({name: `Overlook Hotel`}, (error, hotel) => {
//     if(error) {show(error)}
//     else {show(hotel)}
//     db.close()
// })

// The Great Northern's rating is only a 3! Update that to be a 5: 
// Hotel.findOneAndUpdate(
//     {name: 'The Great Northern'},
//     {rating: 5},
//     {new: true},
//     (error, hotel) => {
//         if(error){
//             show(error)
//         } else {
//             show(hotel);
//         }
//         db.close()
//     }
// )


// Motel Bambi is now fully booked, change the vacancies to false:
// Hotel.findOneAndUpdate(
//     {name: 'Motel Bambi'},
//     {vacancies: false},
//     {new: true},
//     (error, hotel) => {
//         if(error){
//             show(error);
//         } else {
//             show(hotel);
//         }
//         db.close()
//     }
// )

// Things are on the decline for the Motel in 'White Bay, Oregon', change the rating to 2:
Hotel.findOneAndUpdate(
    {name: 'Bates Motel'},
    {rating: 2},
    {new: true},
    (error, hotel) => {
        if(error){
            show(error)
        } else {
            show(hotel);
        }
        db.close()
    }
)

// Hotel.find({}, (error, hotel) => {
//     if(error){
//         show(error)
//     }else{
//         show(hotel)
//     }
//     db.close();
// })

// Hotel.collection.drop()

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
// })

// *******************************************//
// Everything provided to students end
// *******************************************//