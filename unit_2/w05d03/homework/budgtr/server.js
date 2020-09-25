/***** SET UP EXPRESS *****/ 
const express = require('express');
const app = express();
const port = 3000;

/***** DATABASE *****/ 
const Budget = require('./models/budget.js')
// const bankAccount = require('./models/bankaccount.jsx')

/***** BANK ACCOUNT  *****/ 
// let total = 0;

// const account = (total) => {
//   for(let i = 0; i < Budget.length; i++) {
//     total += Budget[i].amount;
//     totalPrice = total;
//     // console.log(total)
//   }
//   return totalPrice
// }

// const bankAccount = account(total);
// console.log(bankAccount)
// new

/***** MIDDLEWARE *****/ 
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/***** INDEX ROUTE *****/ 
app.get('/budgets', (req, res) => {
    // res.send('hello world')

    // initialize bank account
    let bankAccount = 0;
    for(const budget of Budget) {
        bankAccount += budget.amount
    }
    console.log(bankAccount)
    res.render('Index', { title: 'Budgtr', Budget: Budget, bankAccount})
})

/***** NEW ROUTE *****/ 

app.get('/budgets/new', (req, res) => {
    res.render('New', { title: 'Budgtr', Budget: Budget})
})

/***** SHOW ROUTE *****/ 

app.get('/budgets/:id', (req, res) => {
    res.render('Show', { title: 'Budgtr', Budget: Budget[req.params.id]})
})

/***** CREATE ROUTE *****/ 

app.post('/budgets', (req, res) => {

    req.body.amount = parseInt(req.body.amount)
    console.log(req.body)
    Budget.push(req.body)
    res.redirect('/budgets')
})


/***** LISTEN ROUTE *****/ 
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})