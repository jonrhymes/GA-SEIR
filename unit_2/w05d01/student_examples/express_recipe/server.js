// : colon passing the value through to the send, Variable

// console.log(require('express'))

// grabbing express from nodemodules
const express = require('express');
// we are invoking the express function
const app = express();
// setting the local port that our app will use

// Two ports are run automatically: Port 80 ( => HTTP runs by default) and Port 443 ( => HTTPS runs by default)
const port = 3000;

// const recipe = [
//     'Welcome lets go ahead and make Spaghetti, wash your hands', 
//     'Make Noodles', 
//     'Make Sauce', 
//     'Make Protein', 
//     'Add Noodles, Sauce and Protein together. Make it fancy with some parsley'
// ];


// app.get('/spaghetti/step/jon', (req, res) => {
//     res.send("jon loves alison");
//     // res.send('this is the index: ' + req.params.currentStep);
// });
// // Must come BEFORE /:currentStep because you're already declaring this to look for currentStep


// app.get('/spaghetti/step/:currentStep', (req, res) => {
//     res.send(recipe[req.params.currentStep]);
//     // res.send('this is the index: ' + req.params.currentStep);
// });


// app.get('/fixed/spaghetti/step/:currentStep', (req, res) => {
//     if (recipe[req.params.currentStep]) {
//           res.send(recipe[req.params.currentStep]);
//     } else {
//       res.send('cannot find anything at this index: ' + recipe[req.params.currentStep]);
//     }

// });


const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter",];

app.get('/', (req, res) => {
    res.send('welcome to the root')
});

app.get('/awesome', (req, res) => {
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });
  
app.get('/:indexOfPlantsArray', (req, res) => {
      res.send(plants[req.params.indexofPlantsArray]);
});

app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.query)

    // destructuring 
    const {firstname, lastname} = req.params
    // destructuring
    const {isCool, isAwesome} = req.query
    res.send(`
    <h1>My first name is ${firstname} and my last name is ${lastname}</h1>
    <h2>${isCool? 'And I am cool' : 'And I am handsome'}</h2>
    <h3>${isAwesome? 'And I am awesome': 'And I love Alison'}</h3>
    `)
    // Ternary - if it's truthy, then it'll print



    // ${req.params.firstname}
    //     console.log(req.params);
//     console.log('=========================================');
//   console.log('This is the entire Request Object sent from the browser to the server: ');
//   console.log(req);
//   console.log('========================================');
	// res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});


app.listen(port,() => {
    console.log('listening on port' , port);
});