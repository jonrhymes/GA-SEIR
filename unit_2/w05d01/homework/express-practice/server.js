const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send(`
    <body>
    <h1>99 bottles of beer on the wall</h1>
    <a href="/98" target="_blank"><h1>Take one down, pass it around</h1></a>
    </body>`)
})

app.get('/:number_of_bottles', (req, res) => {
    if(req.params.number_of_bottles > 0){
        res.send(`
        <body>
        <h1>${req.params.number_of_bottles} bottles of beer on the wall</h1>
        <a href="/${(req.params.number_of_bottles - 1)}"><h1>Take one down, pass it around</h1></a>
        </body>
        `)
    }else{
        res.send(`
        <body>
        <h1>${req.params.number_of_bottles} bottles of beer on the wall</h1>
        <a href="/"><h1>Start Over</h1></a>
        </body>
        `)
    }
})

app.get('/bugs/:bugs', (req, res) => {
    if(req.params.bugs <=  0){
        res.send(`
        <body>
        <h1>${req.params.bugs} little bugs in the code</h1>
        <h1>${req.params.bugs} little bugs</h1>
        <h1>Take one down, patch it around</h1>       
        <a href="/bugs/${(req.params.bugs - 1)}"></a>
        </body>
        `)
    }
})

app.get('/greeting/:name', (req, res) => {
    res.send('Wow! Hello there, ' + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseInt(req.params.total)
    const tipPercent = parseInt(req.params.tipPercentage) / 100;
    const tip = (total * tipPercent);
    // console.log(tip)
    res.send(`${tip}`);
})

const answers = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely", 
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good", 
    "Yes", 
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later", 
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

console.log(answers[3])
console.log(Math.floor(Math.random() * answers.length))

app.get('/magic/:question', (req, res) => {
    const reply = Math.floor(Math.random() * answers.length)
    // console.log(answers[reply])
    res.send(req.params.question + `? ` + `${answers[reply]}`)
});



app.listen(port, (req, res) => {
    console.log("listening...")
})
