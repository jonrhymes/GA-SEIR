//// Me, me, me

const me = {
    firstName: 'Jon',
    lastName: 'Rhymes',
    age: 35,
    email: 'jonrhymes@gmail.com',
    place of residence: function(){'Florida'},
};

console.log(me.firstName);

me.age = 1000;

console.log(me.age);

// 6. Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
// 7. Access the value of "place of residence"

/// ASK IN OFFICE HOURS HOW TO DO THIS
console.log(me)

///////////////
// Fancy Greeting
//////////////

const fancyGreeting = () => {
    console.log('Greetings, ' + me.firstName)
}

fancyGreeting();

///////////
// Slimer
//////////

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 }

 console.log(monster.name) // use dot notation

 monster.type = "Spectral Energy"

 console.log(monster)

monster.age = 6;

 console.log(monster)

// add age, obj {'age' = 30}

//////////
// Ogres - define adventurer, gave them,
// while hit points > 0, took damage awy from enemy, once it got to zero or below zero
/////////

//////////
// Cat Combinator
/////////

const cat1 = {
    name: "Waffles",
    breed: "unknown",
    age: 7,
};

// console.log(cat1.age)
// console.log(cat1.breed)

const cat2 = {
    name: "Deb",
    breed: "Tabby",
    age: 90,
};

// console.log(cat2.age)
// console.log(cat2.breed)



const combineCats = (mama, papa) => {
    
}

console.log(combineCats(cat1, cat2))