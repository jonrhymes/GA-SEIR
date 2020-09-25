const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("I'm on the line")
})

app.get('/homer', (req, res) => {
    res.send("D'oh!")
})

app.get('/marge', (req, res) => {
    res.send("Oh, Homie")
})

app.get('/bart', (req, res) => {
    res.send("Eat my shorts!")
})

app.get('/lisa', (req, res) => {
    res.send("I love to play the saxophone")
})

app.get('/maggie', (req, res) => {
    res.send("(pacifier noises)")
})

app.get('/snowballtwo', (req, res) => {
    res.send("barf")
})

app.get('/santaslittlehelper', (req, res) => {
    res.send("woof")
})

app.listen(3000, (req, res) => {
    console.log("I'm listening")
});