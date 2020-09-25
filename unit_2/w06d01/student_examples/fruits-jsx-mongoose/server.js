/* Set Up Express */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const show = console.log

const Fruit = require('./models/fruits.js')

/* Set Up Middleware */

app.use(express.urlencoded({extended: true}));
// Middleware runs BEFORE our routes are created. Can't use req.body without it
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});

db.once('open', ()=> {
    show('connected to mongo. You\'re awesome!');
});

/* Set Up Routes */ 
/* Presentational Routes */

app.get('/', (req, res) => {
    res.send(`<a href="/fruits">Continue to Fruits Index</a>`)
})

// Index
app.get('/fruits', (req, res) => {
    // below first we wil ltry to find all of our fruits
    // Then after we either find all fruits or get an error we will run our callback
    const thisRunsNext = (error, allFruits) => {
        if(error){
            show(error)
        } else {
            const props = {
                fruits: allFruits
            }
        res.render('Index', props)}
    }  
    Fruit.find({}, thisRunsNext)
})

// New
app.get('/fruits/new', (req, res) => {
    res.render('New')
})

// Seed
app.get('/fruits/seed', (req, res) => {
    Fruit.create([
    {
        name: 'banana',
        color: 'yellow',
        readyToEat: false
    },
    {  
        name: 'blueberry',
        color: 'blue',
        readyToEat: true
    },
    {
        name: 'strawberry',
        color: 'red',
        readyToEat: true

    }
    ], (error, newFruits) => {
        res.redirect('/fruits')
    })
})

// Show
app.get('/fruits/:id', (req, res) => {
    // req.params.id is set by the line above ':id'
    Fruit.findById(req.params.id, (error, foundFruit) => {
        if(error){
            show(error)
        } else {
            res.render('Show', {
                fruit: foundFruit
            })
        }
    })
})

/* Functional Routes */

// Create
app.post('/fruits/', (req, res) => {
    console.log('This is before we change it')
    console.log(req.body);
    // if(req.body.readyToEat === "on"){
    //     req.body.readyToEat = true;
    // } else {
    //     req.body.readyToEat = false;
    // }

    req.body.readyToEat === 'on' 
    ? req.body.readyToEat = true
    : req.body.readyToEat = false;
    console.log('This is after we change it')
    console.log(req.body)
    // res.send(req.body)
    Fruit.create(req.body, (error, createdFruit) => {
        if(error){
            show(error)
        }else{
            res.redirect('/fruits')
        }
    })
    // res.redirect('/fruits')
})

/* Listening on Port */

app.listen(3000, () => {
    console.log('listening');
})