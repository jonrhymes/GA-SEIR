/* Set Up Express */
const express = require('express');
const app = express();
const show = console.log
const methodOverride = require('method-override')

/* Models */
const Product = require('./models/products.js');

/* Set Up Middleware */
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(methodOverride('_method'));

/* Config */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connection
const mongoURI = 'mongodb://localhost:27017/products';

/* Connect to Mongo */
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true}, () => show('Mongo running at ', mongoURI));


db.once('open', () => {
    show('connected to mongo. GREAT JOB');
});
db.on('error', (error) => show(error.message + ' Is Mongo NOT running?'));
db.on('connected', () => show('mongo CONNECTED.', mongoURI));
db.on('disconnected', () => show('mongo DISCONNECTED.'));

/* Set Up Routes */ 
/* Presentational Routes */

/***** Root *****/
app.get('/', (req, res) => {
    res.send(`<a href="/store">Go to Store</a>`)
})

/***** JSON *****/
app.get('/json', (req, res) => {
    Product.find({}, (error, products) => {
        res.send(products)
    })
})

/***** Index *****/
app.get('/store', (req, res) => {
    Product.find({}, (error, products) => {
        if(error) {
            show(error)
        } else {
            const props = {
                products
            }
            res.render('Index', props)
        }
    })
})

/***** New *****/
app.get('/store/new', (req, res) => {
    res.render('New')
})

/***** Seed *****/
app.get('/store/seed', (req, res) => {
    Product.create([
      {
        name: 'Beans',
        description: 'A small pile of beans. Buy more beans for a big pile of beans.',
        img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
        price: 5,
        qty: 99
      }, {
        name: 'Bones',
        description: 'It\'s just a bag of bones.',
        img: 'http://bluelips.com/prod_images_large/bones1.jpg',
        price: 25,
        qty: 0
      }, {
        name: 'Bins',
        description: 'A stack of colorful bins for your beans and bones.',
        img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
        price: 7000,
        qty: 1
      }
    ], (error, product) => {
      if(error){
        show(error);
      } else {
        res.redirect('/products');
      }
    });
  });

/***** Show *****/
app.get('/store/:id', (req, res) => {
    Product.findById(req.params.id, (error, product) => {
        if(error){
            show(error)
        } else {
            res.render('Show', {
                product
            })
        }
    })
})

/***** Edit *****/
app.get('/store/edit/:id', (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        if(error){
            show(error)
        } else {
            res.render('Edit',
                { product: foundProduct }
        )}
    })
})


/* Functional Routes */

/***** Create *****/
app.post('/store', (req, res) => {
    // show(re.body)
    Product.create(req.body, {new: true}, (error, product) => {
        if(error){
            show(error)
        } else {
            res.redirect('/store')
        }
    })
})

/***** Delete/Destroy *****/
app.delete('/store/:id', (req, res) => {
    // req.body.qty =- 1;
    Product.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/store')
    })
});

/**** BUY ****/
app.put('/store/buy/:id', (req, res) => {
    console.log(req.body.qty)
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, data) => {
        // show(data.qty)
        // data.qty -= 1
        // show(data.qty)
        // show(data)
        // req.body = data.qty
        // !!! PROBLEM: I can get the data to update and go down by 1 in JSON but I can't get it to show in the Show or Index pages.

        res.redirect('/store')
    })
})

/***** Update *****/
app.put('/store/:id', (req, res) => {
        //    console.log('cannot buy')
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, data) => {
        res.redirect('/store')
    })
})

/* Listening on Port */

app.listen(3000, () => {
    show('listening...')
})