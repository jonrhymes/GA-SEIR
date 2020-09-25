/***** SET UP EXPRESS *****/
const express = require('express');
const app = express();
const port = 3000;

/***** DATABASE *****/
const drinks = require('./models/drinks.js')

/***** SET UP JSX ENGINE *****/
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/***** ROUTES *****/

/***** PRESENTATIONAL *****/
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

/***** INDEX *****/
// app.get('/drinks/', (req, res) => {
//     res.send(drinks);
//     // drinks[1].name
// });

app.get('/drinks', (req, res) => {
    // const props = {
    // drink: drinks[req.params]
    // }
    res.render('Index', {
        drink: drinks[req.params]
    })
});

// app.get('/drinks/:id', (req, res) => {
//     res.send(req.params.id)
// });

app.get('/drinks/:id', (req, res) => {
    res.render('Show', {
        drink: drinks[req.params.id]
    })
});


app.listen(port, (req, res) => {
    console.log('listening...')
});