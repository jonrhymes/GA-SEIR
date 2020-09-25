const express = require('express');
const app = express();
const port = 3000;

const superheroes = [
    {
        name: 'Superman',
        powers: [
            'flight',
            'invulnerability',
            'x-ray vision'
        ]
    },
    {
        name: 'Wonder Woman',
        powers: [
            'superhuman strength',
            'arm sheilds',
            'agility'
        ]
    },
    {
        name: 'Black Panther',
        powers: [
            'genius-level intellect',
            'vibranium suit',
            'speed'
        ]
    }
];

const villians = [
    {
      name: 'Lex Luthor',
      powers: [
          'super brain'
        ]
    },
    {
      name: 'Ares',
      powers: [
          'shape shifting', 
          'teleporting'
        ]
    },
    {
      name: 'Killmonger',
      powers: [
        "ability to fit in Black Panther's suit",
        'internet agreement that he looks badass'
      ]
    }
];

// const powersList = villians.forEach(villians.powers)
// console.log(powersList)

console.log(villians[1].powers[0])



/***** ROUTE *****/
app.get('/', (req, res) => {
    res.send(`We can be heroes, just for one day`)
})

/***** INDEX *****/
app.get('/superheroes', (req, res) => {
    res.send(superheroes)
})

/***** SHOW *****/
app.get('/superheroes/:index', (req, res) => {
    res.send(`
        <h1>${superheroes[req.params.index].name}</h1>
        <h3>Powers:</h3>
        <ul>
            <li>${superheroes[req.params.index].powers[0]}</li>
            <li>${superheroes[req.params.index].powers[1]}</li>
            <li>${superheroes[req.params.index].powers[2]}</li>
        </ul>
        <h3>Villian:</h3>
        <h1>${villians[req.params.index]}</h1>
    `)
})


app.get('/villians/:index', (req, res) => {
    res.send(`
        <h1>${villians[req.params.index].name}</h1>
        <h3>Powers:</h3>
        <ul>
            <li>${villians[req.params.index].powers[0]}</li>
            <li>${villians[req.params.index].powers[1]}</li>
            <li>${superheroes[req.params.index].powers[2]}</li>
        </ul>
    `)
})


app.listen(port, () => {
    console.log(`Here to save the day... on port ${port}`)
})