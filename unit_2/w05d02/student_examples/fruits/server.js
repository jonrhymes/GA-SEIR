/***** Set Up Express ****/
const express = require('express');
const app = express();
const port = 3000;

// temporary data will be replaced with models and a connection to our db
const fruits = require('./models/fruits.js');

// const demo = ['cool', 'fresh', 'awesome', 'all things that describe Arthur 10 years ago']

// set up jsx engine

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/**** Routes Start *****/

/********
* Presentational Routes
*********/

app.get('/', (req, res) => {
    res.send('ROOT: I can get whatever I want');
})

/***** Index *****/
app.get('/fruits/', (req, res) => {
    res.render('Index', {
        fruit: fruits[req.params]
    });
});

// app.get('/fruits/', (req, res) => {
//     res.render('Show', {
//         fruit: fruits[req.params]
//     });
// });

/***** Show *****/
// app.get('/fruits/:id', (req, res) => {
//     res.send(fruits[req.params.id])
// })

app.get('/fruits/:id', (req, res) => {
    // const props = {
    //     fruit: fruits[req.params.id],
    //     demo: demo
    // }
    // res.render('Show', props)
    res.render('Show', {
        fruit: fruits[req.params.id],
        // demo: demo
    });
})

/********
* Functional Routes
*********/


/****** Routes End ******/

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});