const express = require('express');
const app = express();
const birds = require('./models/birds')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Index
app.get('/birds', (req, res) => {
    res.render('Index', {
        birds: birds
    })
})

// Show 
app.get('/birds/:id', (req, res) => {
    res.render('Show', {data : birds[req.params.id]})
})

// Create 
app.post('/birds', (req, res) => {
    
})

// New
app.get('/birds/new', (req, res) => {
    res.render('New')
    
})

// Edit 
app.get('/birds/:id/edit', (req, res) => {
    
})

// Update
app.put('/birds/:id', (req, res) => {
    
})

// Delete
app.delete('/birds/:id', (req, res) => {
    
})


app.listen(3000, () => {
    console.log('listening')
})