const mongoose = require('mongoose');
const Tweet = require('./tweet.js');

const mongoURI = 'mongodb://localhost:27017/tweets'
// anything after the slash is the SUB-DATABASE
const show = console.log // show('me')
// for shorthand use
const db = mongoose.connection;

mongoose.connect(mongoURI, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true})
// use the latest tools. Upgrade it to most recent features. Once this function runs, we will be connected to MongoDB

db.on('error', (error) => show(error.message + 'Dude you messed up, check yourself'))
db.on('connected', () => show('You connected. You are a MongoDB Wizard and you\'re connected to ', mongoURI))
db.on('disconnected', () => show('Bye. Have a wonderful time'))

db.on('open', () => {
    console.log('Connection made!');
});

setTimeout(() => {db.close()}, 5000)

const myFirstTweet = {
    title: 'Deep Thoughts',
    body: 'Do I have to be in love to sit in a love seat?',
    author: 'Arthur'
}

// Tweet.create(myFirstTweet, (error, tweet) => {
//     if (error){
//         show(error)
//     } else {
//         show(tweet)
//     }
// })

const manyTweets = [
    {
      title: 'Deep Thoughts',
      body: 'Friends, I have been navel-gazing',
      author: 'Karolin'
    },
    {
      title: 'Sage Advice',
      body: 'Friends, I am vegan and so should you',
      author: 'Karolin',
      likes: 20
    },
    {
      title: 'Whole Reality',
      body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
      author: 'Karolin',
      likes: 40
    },
    {
      title: 'Organic',
      body: 'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
      author: 'Karolin',
      likes: 162
    },
    {
      title: 'Confusion',
      body: 'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
      likes: 1
    },
    {
      title: 'Vespa',
      body: 'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
      author: 'Karolin',
      likes: 2
    },
    {
      title: 'Licensed',
      body: 'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
      author: 'Karolin',
      likes: 3
    },
    {
      title: 'Water',
      body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
      author: 'Karolin',
    },
  ];

// Tweet.insertMany(manyTweets, (error, tweet) => {
//     if (error){
//         show(error)
//     } else {
//         show(tweet)
//     }
//     db.close()
// })

// Tweet.find({}, 'title body', (error, tweet) => {
//     if (error){
//         show(error)
//     } else {
//         show(tweet)
//     }
//     db.close()
// })

// RETURNS   {
//     _id: 5ebef3e7555f8d505486b833,
//     title: 'Water',
//     body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how'
//   }

// Tweet.find({title: 'Water'}, 'title body', (error, tweet) => {
//         if (error){
//             show(error)
//         } else {
//             show(tweet)
//         }
//         db.close()
//     })

// Tweet.find({likes: {$gte: 20}}, 'title body likes', (error, tweet) => {
//         if (error){
//             show(error)
//         } else {
//             show(tweet)
//         }
//         db.close()
//     })

    Tweet.findOneAndUpdate(
        {title:'Vespa'} /* <= searching by */,
        {deleted: true} /* <= the thing we are updating */, 
        {new: true} /* <= Telling mongoose send me the updated item as opposed to the item before it was updated */,
        (err, tweet)=>{ /* This is our callback that happens after all the work is done*/
        if (err){
          console.log(err);
        } else {
          console.log(tweet);
        }
        db.close()
        })