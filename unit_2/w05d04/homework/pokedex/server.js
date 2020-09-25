/***** EXPRESS SETUP *****/
const express = require('express');
const app = express();
const port = 3000;
const methodOverride = require('method-override');

/***** DATABASE *****/
const pokemon = require('./models/pokemon.js')

/***** MIDDLEWARE *****/
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/***** ROOT *****/
app.get('/', (req, res) => {
    res.send('Pokemon Go!');
});

/***** INDEX *****/
app.get('/pokemon', (req, res) => {
    res.render('Index', { title: "Pokedex", pokemon});
});

/***** CREATE *****/
app.post('/pokemon', (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
});

/***** DELETE *****/
app.delete('/pokemon/:index', (req, res) => {
    const { index } = req.params;
    pokemon.splice(index, 1);
    res.redirect('/pokemon')
});

/***** EDIT *****/
app.get('/pokemon/:index/edit', (req, res) => {
    const { index } = req.params;
    res.render('Edit', { 
        title: "Pokedex", 
        pokemon: pokemon[index],
        index: req.params.index,
        img: pokemon.img,
        type: pokemon.type,
        stats: pokemon.stats
    })
});

/***** UPDATE *****/
app.put('/pokemon/:index', (req, res) => {
    const { index } = req.params;
    pokemon[index] = req.body;
    res.redirect('/pokemon')
});

/***** NEW *****/
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

// const { index } = req.params;
/***** SHOW *****/
app.get('/pokemon/:index', (req, res) => {
    const { index } = req.params;
    res.render('Show', { 
        title: "Pokedex" , 
        pokemon: pokemon,
        pokemon: pokemon[index],
        index: req.params.index
    });
});

/***** LISTEN *****/
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});