const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('app is running on port: ', port);
}); 

app.get('/calc/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const sum = num1 + num2;
    res.send("the sum is " + sum);
});

app.get('/someroute', (req, res) => {
    console.log('req.query: ', req.query);
    res.send('someroute accessed');
});

app.get('/calcquery/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const sum = num1 + num2;
    const minus = num1 = num2;
    if(req.query.operation === 'add'){
        res.send("the sum is " + sum);
    } else {
        res.send('cannot sum')
    }
});