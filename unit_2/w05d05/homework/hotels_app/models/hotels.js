const mongoose = require('mongoose');
const Schema = mongoose.Schema

const hotelSchema = new Schema({
    name: { type: String, required: true, unique: true },
    location: { type: String },
    rating: { type: Number, maxValue: 5 },
    vacancies: { type: Boolean},
    tags: [ { type: String} ],
    rooms : [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ]
},
{timestaps: true});

module.exports = mongoose.model('Hotel', hotelSchema)