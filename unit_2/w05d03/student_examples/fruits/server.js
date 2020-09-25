const express = require('express');
const app = express();

// import data
const fruits = require('./models/fruits.js');

// middleware
// When we make app.post and New.jsx, takes Form and breaks it into object...
// Need this app.use // URL encoded parses
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// index route
app.get('/fruits', (req, res) => {
    // res.send(fruits);
    res.render('Index', { title: 'My Fruits Page', fruits });
});

// new route - Page with form to create new fruit
app.get('/fruits/new', (req, res) => {
    res.render('New');
})

// create route - Create a new fruit
app.post('/fruits', (req, res) => {
    // res.send(req.body);
    if(req.body.readyToEat == "on"){
        req.body.readyToEat = true
    }else{
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    // res.send(fruits)
    // redirect makes a get request
    res.redirect('/fruits')
})

// show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', { fruit: fruits[req.params.indexOfFruitsArray] });
});

app.listen(3000, () => {
    console.log('running on port 3000');
});
