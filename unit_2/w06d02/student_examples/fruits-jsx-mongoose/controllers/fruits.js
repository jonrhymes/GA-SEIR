// bringing in Express
const express = require('express')
// Creating a router Collection of routes
const fruitController = express.Router()
// Bring in Mongoose and Fruit Schema
const mongoose = require('mongoose')
const Fruit = require('../models/fruits.js')

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

// Routes

// Index
fruitController.get('/', isAuthenticated, (req, res) => {
    // Use Fruits model to get all Fruits
    Fruit.find({}, (error, allFruits) => {
        res.render('Index', {
            fruits: allFruits,
            username: req.session.currentUser,
        })
    });

});

// New
fruitController.get('/new', isAuthenticated, (req, res) => {
    res.render('New');
});

// Create
fruitController.post('/', isAuthenticated, (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // Use Model to create Fruit Document
    Fruit.create(req.body, (error, createdFruit) => {
        // Once created - respond to client
        res.redirect('/fruits');
    });
});


// seed
// app.get('/fruits/seed', (req, res) => {
//     Fruit.create([
//         {
//             name: 'grapefruit',
//             color: 'pink',
//             readyToEat: true
//         },
//         {
//             name: 'grape',
//             color: 'purple',
//             readyToEat: false
//         },
//         {
//             name: 'avocado',
//             color: 'green',
//             readyToEat: true
//         }
//     ], (err, data) => {
//         res.redirect('/fruits');
//     })
// });

// Show
fruitController.get('/:id', isAuthenticated, (req, res) => {
    // Find the specific document
    Fruit.findById(req.params.id, (error, foundFruit) => {
        // render the Show route and pass it the foundFruit
        res.render('Show', {
            fruit: foundFruit
        });
    });
});

// Edit
fruitController.get('/edit/:id', isAuthenticated, (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render('Edit', {fruit: foundFruit})
    })
})

// Delete
fruitController.delete('/:id', isAuthenticated, (req, res) => {
    Fruit.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/fruits')
    })
})

// update
fruitController.put('/edit/:id', isAuthenticated, (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/fruits')
    })
})
//////////


// Export

module.exports = fruitController;