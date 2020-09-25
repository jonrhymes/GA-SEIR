<<<<<<< HEAD
/////////////
// Object Review
////////////

// const myself = {
//     name: 'jon',
//     age: 34,
//     family: ['alison', 'thomas'],
//     pet: { name: 'waffles'},
//     likeSports: false, 
// };

// console.log(myself.name);
// console.log(myself.pet);

///////////
// Adding Functions to an Object (Methods)
//////////

// Arrow function (not hoisted, no prototype) = best method for 

// const func1 = () => {
//     console.log('hello');
// }

// // Using function keyword (is hoisted, prototype)

// function func2() {
//     console.log('hello')
// }

// // Function keyword as a variable (not hoisted, prototype)

// const func3 = function (){
//     console.log('hello');
// }
=======
///////////////
// Object Review
///////////////

// const myself = {
//     name: 'Alex Merced',
//     age: 34,
//     family: ['Becky', 'Wally'],
//     pet: { name: 'wally' },
//     likeSports: false,
// };

// console.log(myself.name);
// console.log(myself.family);
// console.log(myself.pet);

////////////////
// Adding Functions to an Object (Methods)
///////////////

//Arrow Function (not hoisted, no prototype)

// const func1 = () => {
//     console.log('hello');
// };

// // Using function keyword (hoisted, prototype)

// function func2() {
//     console.log('hello');
// }

// // function keyword as a variable (not hoisted, prototype)

// const func3 = function () {
//     console.log('hello');
// };
>>>>>>> f1fac4161c4bdcefd7fd13a179ef3ebd4f45ee31

// func1();
// func2();
// func3();

// const myObj = {
<<<<<<< HEAD
//     name: 'jon rhymes',
//     hello: () => {
//         console.log('hello'); // arrow function in an object, use this as the defaul
//     },
//     goodbye() {
//         console.log('goodbye'); // function: hoisted, with no prototype;
//     },
//     waffles: function () {
//         console.log('waffles'); // function: not hoisted, but with prototype
//     },

=======
//     name: 'Alex Merced',
//     hello: () => {
//         console.log('hello');
//     },
//     goodbye() {
//         console.log('goodbye');
//     },
//     cheese: function () {
//         console.log('cheese');
//     },
>>>>>>> f1fac4161c4bdcefd7fd13a179ef3ebd4f45ee31
// };

// myObj.hello();
// myObj.goodbye();
<<<<<<< HEAD
// myObj.waffles();

// use dot notation for objects

///////////////
// Testing the Existence of a property
//////////////

// const objArr = [ // Object that is an array, one item has an extra property
//     {name: 'Thomas', age: 30},
//     {name: 'Alison', age: 36},
//     {name: 'Deborah', age: 55, pet: {name: 'Waffles'}}
// ]

//// This is the way to check for property, to prevent RUN-TIME ERRORS


// for (person of objArr) { // Loop over an array of objects
//     console.log(person.name);
//     console.log(person.age);
//     // console.log(person.pet); // get undefined for first two objects
//     // console.log(person.pet.name); // cannot read because you're accessing a property but it runs a check against all the same information
//     console.log(person.pet ? person.pet.name : "No Pet"); // ^using Ternary operator here
//     // to solve this, use the TERNARY OPERATOR
//     // first part is the expression, the question mark asks if it's true, the first thing happens, if false, it defaults to after the colon
//     // OUTPUTS:
//     // Thomas
//     // 30
//     // No Pet
//     // Alison
//     // 36
//     // No Pet
//     // Deborah
//     // 55
//     // Waffles
// }


///////////////
// Object as a Switch Statement
//////////////

// const wizard = {
//     fire: () => {console.log('fire!');
//     },
//     wind: () => {console.log('wind!');
//     },
// }

// Switch is better than using If/Else statements

// const castSpell = (wiz, spell) => {
//     switch(spell){
//         case 'fire':
//             wiz.fire();
//             break;
//         case 'wind':
//             wiz.wind();
//             break;
//         default:
//             break;
//     }
// };

// castSpell(wizard, 'fire'); // fire!
// castSpell(wizard, 'wind'); // wind!

/// Make more succint, pass in key into string

// const castSpell = (wiz, spell) => {
//     // wiz[spell](); // brackets used to specify a key you don't know yet
//     wiz[spell] ? wiz[spell]() : console.log('wizard has not learned the spell'); // using a ternary operator
=======
// myObj.cheese();

//////////////////
//Testing the Existence of a property
/////////////////

// const objArr = [
//     { name: 'Bob', age: 45 },
//     { name: 'Josephine', age: 90 },
//     { name: 'Steve', age: 55, pet: { name: 'spot' } },
// ];

// for (person of objArr) {
//     console.log(person.name);
//     console.log(person.age);
//     console.log(person.pet ? person.pet.name : 'No Pet');
// }

///////////////
// Object as a Switch Statement
///////////////

// const wizard = {
//     fire: () => {
//         console.log('fire!');
//     },
//     wind: () => {
//         console.log('wind!');
//     },
// };

// const castSpell = (wiz, spell) => {
//     // switch (spell) {
//     //     case 'fire':
//     //         wiz.fire();
//     //         break;
//     //     case 'wind':
//     //         wiz.wind();
//     //         break;
//     //     default:
//     //         break;
//     // }

//     wiz[spell] ? wiz[spell]() : console.log('wizard has not learned spell');
>>>>>>> f1fac4161c4bdcefd7fd13a179ef3ebd4f45ee31
// };

// castSpell(wizard, 'fire');
// castSpell(wizard, 'wind');
<<<<<<< HEAD
// castSpell(wizard, 'poison'); // prints wizard has not learned the spell

////////////
// Keys, Values and Entries : if you need to turn object into an array
///////////

// const myObj = {
//     name: 'ALISON',
//     age: 36,
// };

// const keys = Object.keys(myObj)
// // returns an array of the keys
// const values = Object.values(myObj); // returns an array
// const entries = Object.entries(myObj); // is the Key with the value - gives an array of an array

// console.log(keys);
// // [ 'name', 'age' ]
// console.log(values);
// // [ 'ALISON', 36 ]
// console.log(entries);
// // [ [ 'name', 'ALISON' ], [ 'age', 36 ] ]


//////////////
// Composition (Bonus topic) - may come up in interviews, Build-A-Bear sets up a table of items, multiple object and mushing them together 
/////////////

// fireWizard = {
//     fire: () => console.log('fire'),
// };

// windWizard = {
//     wind: () => console.log('wind'),
// };

// const wizFactory = (name, powers) => {
//     let newWiz = {name};

//     for (power of powers){
//         switch(power){
//             case 'fire':
//                 newWiz = {...newWiz, ...fireWizard};
//                 break;
//             case 'wind':
//                 newWiz = {...newWiz, ...windWizard};
//                 break;
//             default:
//                 break;
//         }
//     }
//     return newWiz
// };

// console.log(wizFactory('Merlin', ['fire'])); // must pass it in as an array
// // { name: 'Merlin', fire: [Function: fire] }
// console.log(wizFactory('Gandalf', ['wind']));
// // { name: 'Gandalf', wind: [Function: wind] }
// console.log(wizFactory('Harry Potter', ['fire','wind']));
// {
//     name: 'Harry Potter',
//     fire: [Function: fire],
//     wind: [Function: wind]
//   }


=======
// castSpell(wizard, 'poison');

////////////
// Keys, Values and Entries
////////

// const myObj = {
//     name: 'Alex Merced',
//     age: 34,
// };

// const keys = Object.keys(myObj);
// const values = Object.values(myObj);
// const entries = Object.entries(myObj);

// console.log(keys);
// console.log(values);
// console.log(entries);

////////////////
//Composition (Bonus)
///////////////

fireWizard = {
    fire: () => console.log('fire'),
};

windWizard = {
    wind: () => console.log('wind'),
};

const wizFactory = (name, powers) => {
    let newWiz = { name };

    for (power of powers) {
        switch (power) {
            case 'fire':
                newWiz = { ...newWiz, ...fireWizard };
                break;

            case 'wind':
                newWiz = { ...newWiz, ...windWizard };
                break;

            default:
                break;
        }
    }

    return newWiz;
};

console.log(wizFactory('Merlin', ['fire']));
console.log(wizFactory('Gandalf', ['wind']));
console.log(wizFactory('Harry Potter', ['fire', 'wind']));
>>>>>>> f1fac4161c4bdcefd7fd13a179ef3ebd4f45ee31
