const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send("I'm here for you")
})


app.get('/bigEd', (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>Mayonnaise hair product</h1>
        </body>
    </html
    `);
})

app.get('/usman', (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>Baby girl, Lisa. Baby love</h1>
        </body>
    </html>
    `)
})

app.get('/david', (req, res) => {
    res.send(`
    <html>
        <body>
           <h1>Ready or not, here I come. You can't hide. I'm gonna fiiiiind you and make you want me.</h1> 
        </body>
    </html>
    `)
})


app.listen(3000, (req, res) => {
    console.log("I'm listening")
});


