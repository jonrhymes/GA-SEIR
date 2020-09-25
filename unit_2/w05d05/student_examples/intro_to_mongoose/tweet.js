const mongoose = require('mongoose');
const Schema = mongoose.Schema

const tweetSchema = new Schema({
    title: String,
    body: String,
    author: String,
    likes: {type: Number, default: 0},
    deleted: {type: Boolean, default: false}
},
{timestamps: true})

module.exports = mongoose.model('Tweet', tweetSchema)
// const Tweet = mongoose.model('Tweet', tweetSchema)
// 'Tweet' will be created with lowercase
//make this exportable to be accessed in `app.js`
// module.exports = Tweet;