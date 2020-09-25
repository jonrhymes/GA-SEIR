<<<<<<< HEAD
// Objects Game

=======
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
// const player = {
//     name: 'Jake the great',
//     health: 1000,
//     power: 1000,
//     stamina: 1000
//   }
  
<<<<<<< HEAD
//   const bigBadBoss = {
=======
// const bigBadBoss = {
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
//     name: 'Alex the Merceless',
//     health: 1000000000000000000,
//     power: 10000000000000000,
//     stamina: Infinity
<<<<<<< HEAD
//   }

  // create function that creates an object. 

//   const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newEnemy
//   }
//   const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
=======
// }

// const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
//     const newPlayer = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newPlayer
<<<<<<< HEAD
//   }

//   const JamesTheBold = createPlayer('JamesTheBold', 1000, Infinity, Infinity)

//   console.log(JamesTheBold);

//   const alisonTheConqueror = createPlayer('Alison The Conqueror of Worlds', Infinity, Infinity, Infinity);

//   console.log(alisonTheConqueror);

///////////
// Classes

class Character {
    // CAN'T TURN THIS INTO AN ARROW FUNCTION
    constructor(nameIs, healthIs, powerIs, staminaIs){
        this.name = nameIs;
        this.health = healthIs;
        this.power = powerIs;
        this.stamina = staminaIs;
    }
    greet(){
        console.log('hi!');
    } // This is how you write a function inside of an object
    attack(){
        console.log('I attacked you!');
    }
    newGreeting(){
        console.log(`Good morrow!`);
    }
}

console.log(typeof Character);
console.log(JamesTheBold)
const DanaTheMagnificent = new Character();
console.log(DanaTheMagnificent)
// ^ returns Character {} when class Character {} is blank.
// class Character needs constructor(nameIs, healthIs, powerIs, staminaIs){ and this...}

const DanaTheMagnificent = new Character('DanaTheMagnificent', 9000, 9000, Infinity);
console.log(DanaTheMagnificent);
^ returns:

Character {
  name: 'DanaTheMagnificent',
  health: 9000,
  power: 9000,
  stamina: Infinity
}
console.log(DanaTheMagnificent instanceof Character);
console.log(JamesTheBold instanceof Character)
^ false, not an instance of Character because it was made ourselves. 
Because it shares the same class, it can all be adjusted at once. 

////////////////////////////
// Object Oriented Programming

//////////////
// Four Pillars:
// Encapsulation
// Abstraction
// Inheritance
// Polymorphism

// Two categories: Character and Animals

const RyanTheGreat = new Character('Ryan The Great', 5000, 10000, Infinity)
// ^ when you add a new character, it grabs the class and any of the methods you construct at first

DanaTheMagnificent.greet();
// ^ Part of the w02d03 homework, calculate and operataors

RyanTheGreat.greet();

Character.prototype.bye = function () {
    console.log(`bye from ${this.name}`)};
    // ^ Change class AFTER THE FACT... Use prototype to gain access to the object and add functions inside of it.

DanaTheMagnificent.bye();
RyanTheGreat.bye();

Character.prototype.value = "We are all intrepid learners of NOVA";

console.log(RyanTheGreat.value)

Character.prototype.handshake = `Good morrow ${this.name}`;

DanaTheMagnificent.attack();
console.log(DanaTheMagnificent.handshake)

// inside class character, add another function

//////////////////////////
// Customizable Class. Descending classes. NEW Exercise. Add to class and build things

class Character {
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) { // lovesCats is DEFAULT VALUE, it's the preferabble method to lovesDogs below.
        this.legs = 2; // hardcoded: all characters will begin with these properties
        this.arms = 2; // hardcoded. Instance of the Character, Ayla, on THAT character is 2. 
        this.name = name; // This. means that everytime you make a new character, in that instance it has specific values;
=======
// }

// const CaesartheGreat = createPlayer('CaesartheGreat', 1000, 1000, Infinity);
// //console.log(CaesartheGreat);

// class Character {
//     constructor(nameIs, healthIs, powerIs, staminaIs){
//         this.name = nameIs;
//         this.health = healthIs;
//         this.power = powerIs;
//         this.stamina = staminaIs;
//     }
//     greet () {
//         console.log('hi!')
//     }
//     complain () {
//         console.log("I'm so tired!")
//     }
// }

// console.log(typeof Character); // prints function
// console.log(CaesartheGreat);
// const DanaTheMagnificent = new Character('DanaTheMagnificent', 9000, 9000, Infinity)
// // console.log(DanaTheMagnificent)
// // console.log(DanaTheMagnificent instanceof Character)
// // console.log(CaesartheGreat instanceof Character)

// const RyanTheGreat = new Character ('Ryan The Great', 5000, 10000, Infinity)
// RyanTheGreat.greet();
// DanaTheMagnificent.greet();

// Character.prototype.bye = function () {console.log(`bye from ${this.name}`)}
// Character.prototype.age = "I am 24"
// console.log(RyanTheGreat.age);
// DanaTheMagnificent.complain();


//like in the game of sims, you create new character and they make you assign it a name, give clothes, makeup, etc. 
// the loveCats = false is a parameter that is the same as just using let loveCats = false. youre assigning that variable a value, and whatever you pass as the argument in its place can overwrite it
class Character {
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs){
        this.legs = 2;
        this.arms = 2;
        this.name = name;
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
<<<<<<< HEAD
        this.lovesDogs = lovesDogs || true; // if it's undefined and isn't assigned, it says true automatically
    }
    greet (otherCharacter) {
        console.log('hi' + otherCharacter + '!');
    }
    smite(){
        console.log('I smite thee you vile person');
    }
}

const ayla = new Character('Ayla the Awesome', 28, 'brown', 'locks of dark brown');
// console.log(ayla.lovesDogs)

const me = new Character('Jon the Strong', 35, 'brown', 'short & brown', true, 'sometimes....')
// How come you can overwrite a Boolean with a string?

console.log(me);


class Person {
    constructor(hair){
        this.hair = hair;
        this.name = `the ${hair} bomber`
    }
    updateHair(newHairColor) {
        this.hair = newHairColor;
    }
}

// STATE
const tom = new Person('blonde')

tom.updateHair('brown') // changes Tom's hair STATE

/// Objects manage their own state. An object made by class is called an instance of class. 
=======
        this.lovesDogs = lovesDogs || true;
    }
    greet (otherCharacter) {
        console.log('hi ' + otherCharacter.name + '!');
      }
      smite () {
        console.log('I smite thee you vile person');
      }
    }

const ayla = new Character('Ayla the Awesome', 28, 'brown', 'locs of dark brown');
console.log(ayla);
const me = new Character('Sharon', 24, 'brown', 'artifical brown', 'sometimes', 'especially when they\'re puppies!')
console.log(me);

class Person {
    constructor(hair) {
        this.hair = hair
        this.name = `the ${hair} bomber`
    }
    updateHair(newHairColor) {
        this.hair = newHairColor
    }
}

// STATE = current state of the object
const tom = new Person ('blonde')
//console.log(tom); // the state as of right now is that tom has blonde hair
// add updateHair
tom.updateHair('red');
console.log(tom) // toms hair is now red, so you have changed his state
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
