// dependencies
const express = require('express'); // Express
const app = express(); // Create app object
const mongoose = require('mongoose'); // Bring in mongoose
const Fruit = require('./models/fruits.js'); // Fruit model
const methodOverride = require('method-override'); // Method overrid
const fruitController = require('./controllers/fruits.js') // Fruit controller
require('dotenv').config() //Process.env holds all your variables / For HEROKU
const port = process.env.PORT || 3000; // Port number
const mongodbURI = process.env.MONGODBURI // Mongo DB URI
const DBURI = process.env.MONGOURI; // Mongo DB URI
const userController = require('./controllers/users_controller.js'); // Users controller
const session = require('express-session') // Session Middleware
const User = require('./models/users.js')
const bcrypt = require('bcryptjs')

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Controllers
app.use('/fruits', fruitController)
app.use('/users', userController)

// mongoose connection

// mongoose.connect('mongodb://localhost:27017/basiccrud', {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// });

mongoose.connect(DBURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log("connected to mongo");
});
//////////////////////
// Authorization route

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}


// Route to login page
app.get('/sessions/new', (req, res) => {
    res.render('sessions/New',
    {
        currentUser: req.session.currentUser
    })
})

// Authentication Route, login
app.post('/sessions/', (req, res) => {
    // see if user exists
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if(err) {
            // send error if error
            console.log(err)
            res.send('oops the db had a problem!' + err)
        } else if(!foundUser) {
            // send to sign up if user doesn't exist
            res.redirect('/users/new')
        } else {
            // compare passwords
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                // send to fruits page
                req.session.currentUser = foundUser.username
                res.redirect('/fruits/')
            } else {
                // tell them its a wrong password
                res.send('wrong password')
            }
        }
    })
})

app.delete('/sessions', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/sessions/new');
    })
})

// listen
app.listen(port, () => {
    console.log('listening on: ' + port);
});