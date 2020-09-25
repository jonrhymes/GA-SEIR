// server.js
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// routes here above listen
app.get('/', (req, res) => {
    // const props = {
    //     name: "Arthur"
    // }
    // res.render('Index', props)
    res.render('Index', {
        name: "Alison",
        dog: "Sadie",
        enemy: "squirrel",
        otherEnemy1: "blue jays",
        otherEnemy2: "snakes"
    })
})

app.listen(port, (req, res) => {
  console.log("listening...")
})