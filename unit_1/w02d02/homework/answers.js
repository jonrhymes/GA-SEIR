<<<<<<< HEAD
////////////
// Datatypes

// Is this a trick question because everything in JavaScript is an object?

// 1. A light switch that can be either on or off.
// Datatype: Boolean or a Number
// Data Structure example: 
const lightOn = true;
const light = 0;

// 2. A user's email address.
// Datatype: String
// Data Structure example: 
let email = "jonrhymes@gmail.com";

// 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Datatype: Object with an Array
// Data Structure example: 
const spaceship = {
    features: ["hull", "laser blasters", "tractor beam", "warp drive"],
    name: "USS Enterprise",
    captain: "James T. Kirk",
} 

// 4. A list of student names from our class.
// Datatype: Array
// Data Structure example: 
const students = ["James", "Dominic", "Emma", "Sam", "Jessica"]

// 5. A list of student names from our class, each with a location.
// Datatype: Object
// Data Structure example: 
const students2 = {
    James: {location: "Chicago, IL"},
    Dominic: {location: "Seattle, WA"},
    Emma: {location: "Austin, TX"},
    Sam: {location: "New York, NY"},
    Jessica: {location: "Atlanta, GA"}
}

// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// Datatype: Object
// Data Structure example: 

const ourClass = {
    James: {
        location: "Chicago, IL",
        favoriteTv: ["The Bachelor Presents: Listen to Your Heart", "Too Hot to Handle"],
    },
    Dominic: {
        location: "Seattle, WA",
        favoriteTv: ["Late Night with Seth Meyers", "SNL"],
    },
    Emma: {
        location: "Austin, TX",
        favoriteTv: ["Buffy the Vampire Slayer", "RuPaul's Drag Race"],
    },
    Sam: {
        location: "New York, NY",
        favoriteTv: ["90 Day Fiance", "Black-ish"],
    },
    Jessica: {
        location: "Atlanta, GA",
        favoriteTv: ["Kitchen Nightmares", "Tales From the Crypt"],
    },
}
// console.log(ourClass.Jessica.favoriteTv[0])

////////////////
// Take it Easy

// 1. Make an array that holds all of the colors of the rainbow.
const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

// 2. Write code that will access "blue" from the rainbow array.
function colorOf(){
    return console.log(rainbow[4]);
}
colorOf();

// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const jonRhymes = {
    favoriteFood: "Ramen",
    hobby: "Bicycling",
    hometown: "St. Petersburg, FL",
    favoriteDatatype: "Object", 
}

// 4. Write code that will access your hobby from the object that you just created.
const whoIs = () =>{
    console.log(jonRhymes.hobby);
}
whoIs();

////////////////
// Crazy Object!
=======
/////////////
//Answer the Following
////////////

// 1. A light switch that can be either on or off.
// datatype: boolean
// data structure example: const lightSwitch = true;
// 2. A user's email address.
// datatype: string
// data structure example: const userEmail = 'sharonk1295@gmail.com'
// 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// datatype: array
// data structure example: const spaceship = ['hull', 'laser blasters', 'tractor beam', 'warp drive']
// 4. A list of student names from our class.
// datatype: array
// data structure example: const class = ['Sharon', 'David', 'Will']
// 5. A list of student names from our class, each with a location.
// datatype: array and object
// data structure example: const class = [{name: 'Sharon', location: 'NYC'}, {name: 'David', location: 'Texas'}, {name: 'Will', location: 'Jersey'}]
// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// datatype: array and object
// data structure example: const class = {name: 'Sharon', location: 'NYC', favoriteTvShow: 'The Office'}, {name: 'David', location: 'Texas', favoriteTvShow: 'Tiger King'}, {name: 'Will', location: 'Jersey', favoriteTvShow: 'Jersey Shore'}]


///////////////////
//Take It Easy
///////////////////

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors[4]);

const sharon = {
    favFood: 'funnel cake',
    hobby: 'dancing',
    currentTown: 'NYC',
    favDataType: 'string'
};
console.log(sharon.hobby);


///////////////////////
//Crazy Object!
////////////////////
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
<<<<<<< HEAD
}


// Log the following:
// 1.  "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

// Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk");
console.log(crazyObject.larry.quotes);

/////////////////
// Object-ception
=======
  }
console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);
crazyObject.larry.quotes.push('I\'m trying to elevate small talk to medium talk');
console.log(crazyObject.larry.quotes);


////////////////////
//Object-ception
///////////////////
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }
<<<<<<< HEAD

 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

 ////////////
 //Bond Films

 const bondFilms = [
=======
 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);


/////////////////
//Bond Films
////////////////

const bondFilms = [
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
<<<<<<< HEAD
];

// 1. Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.

let bondTitles = [];

const findTitle = (title) => {
    for(let i = 0; i < bondFilms.length; i++){
        console.log(bondTitles.push(bondFilms[i].title));
    } return title;
}

findTitle();

console.log(bondTitles);

// 2. Create a new array oddBonds, of only the Bond films released on odd-numbered years.

// console.log(bondFilms.year)

oddBonds = [];

const findOdds = (year) => {
    for(let i = 0; i < bondFilms.length; i++){
        if(bondFilms[i].year % 3 === 0){
            oddBonds.push(bondFilms[i].title);
        }
    }return year;
}

findOdds();

console.log(oddBonds);


// 3. Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also

const regex = /$/;

console.log(bondFilms[0].gross.replace(regex, ""))

// console.log(bondFilms[0].gross.replace(regex, " "))
// const gross = () => {
//    console.log(bondFilms[0].gross.replace($, )
// }

// console.log(bondFilms[0].gross.replace($, '');

// console.log(bondFilms[0].gross.replace(" "))

// const gross = () => {
//     for(let i = 0; i < bondFilms.length; i++){
//         console.log(bondFilms[i].gross.parseInt(" "));
//     }
// }

// gross();

// !! Problem: I can't figure out how to replace or parseInt this.
=======
  ];

//1. 
let bondTitles = [];
for (let i = 0; i < bondFilms.length; i++) {
    bondTitles.push(bondFilms[i].title)
  }
console.log(bondTitles);

//2.
const oddBonds = [];
for (let i = 0; i < bondFilms.length; i++) {
    if (bondFilms[i].year % 2 !== 0) {
        oddBonds.push(bondFilms[i].year)
    }
};
console.log(oddBonds);


//3.
let arrOfGross = [];
for (let i = 0; i < bondFilms.length; i++) {
    arrOfGross.push(bondFilms[i].gross)
}
console.log(arrOfGross);

let takeCommasOut = [];
for (let x = 0; x < arrOfGross.length; x++) {
    takeCommasOut[x] = arrOfGross[x].replace(/,/g, '');
}
console.log(takeCommasOut); // prints an arry of the gross numbers but still in strings and each has the $

let takeSignOut = [];
for (let a = 0; a < takeCommasOut.length; a++) {
    takeSignOut[a] = takeCommasOut[a].replace("$", "");
};
console.log(takeSignOut); // prints an array of the just gross numbers but still as strings

let totalGross = [];
for (let y = 0; y < takeSignOut.length; y++) {
    totalGross[y] = parseInt(takeSignOut[y], 10)
};
console.log(totalGross); // FINALLY printed array of just the gross numbers

const sumArray = (arr) => {
    let sum = 0;
    for (let g = 0; g < arr.length; g++) {
        sum += arr[g];
    };
    return sum;
};
console.log(sumArray(totalGross)); //prints cumulative gross of Bond franchise







>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
