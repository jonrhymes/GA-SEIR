const maze = require('./maze.js')
<<<<<<< HEAD
// Modules can only be used in Node. 

class Character {
    constructor(name, age, eyes, hair, lovesCats = true, lovesDogs = true){
=======
class Character {
    constructor(name, age, eyes, hair, lovesCats=true, lovesDogs=true) {
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs;
    }
<<<<<<< HEAD
    /* no commas or semicolons after curly brackets */
    /* greet */
    greet (otherCharacter) {
        console.log('hi ' + otherCharacter + '!');
    }
    /* classyGreeting */
    classyGreeting (otherClassyCharacter) {
        console.log('Howdy ' + otherClassyCharacter.name + '!');
    }
    /* setHair */
    setHair (hairColor) {
        this.hair = hairColor;
    }
    /* smite */
    smite () {
        console.log('i smited thee.');
    }
};

const hobbit = new Character('Mr. Baggins', 133, 'brown', 'black')

console.log(hobbit);

//////////
// Extend: make other class and adding to it

class Hobbit extends Character {
    constructor (name, age, eyes, hair) {
        super(name, age, eyes, hair);
        this.skills = ["thievery", "speed", "willpower"];
        this.solve = ''
    }
    steal(){
        console.log('lets get away')
    }
    greet(otherChracter){
        console.log(`hello ${otherChracter.name}`)
    }
    smite(){
        super.smite(); // This is equal to the master class above
        this.steal(); // This is equal to Frodo
    }
};

console.log(maze.level0());
console.log(maze.level1());
console.log(maze.level2());
console.log(maze.level3());
console.log(maze.level4());


const solve = '';

const level1 = maze.level1();
const level2 = maze.level2();

// solveTemp.push(level1.pop())
// solveTemp.push(level2.)
// console.log(solveTemp)

// const frodo = new Hobbit ('Frodo', 30, 'Brown', 'Black')

// const bilbo = new Hobbit ('Bilbo', 113, 'Brown', 'Black')

// frodo.greet(bilbo)
// frodo.smite();

// ^ overwrites our old function with a new function because it extends from a nother class

class Hobbit extends Character {
    constructor (name, age, eyes, hair) {
        super(name, age, eyes, hair);
        this.skills = ["thievery", "speed", "willpower"];
    }
    steal(){
        console.log('lets get away')
    }
    greet(otherChracter){
        console.log(`hello ${otherChracter.name}`)
    }
    smite(){
        super.smite(); // This is equal to the master class above
        this.steal(); // This is equal to Frodo
    }
};

class Men extends Character {
    constructor (name,age,eyes,hair) {
        super(name, age, eyes, hair);
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.skills = ["sleeping", "eating", "breathing"]
    }
    studying() {
        console.log(`I'm studying`)
    }
}

// const me = new Men('Jon Rhymes', 35, 'brown', 'brown')

// console.log(me.skills)
// me.studying();
=======
    // greeting
    greet (otherCharacter) {
        console.log('hi ' + otherCharacter + '!');
    }
    //classGreeting
    classyGreeting (otherClassyCharacter) {
        console.log('Howdy ' + otherClassyCharacter.name + '!');
    }
    //setHair
    setHair (hairColor) {
        this.hair = hairColor;
    }
    //smite
    smite () {
        console.log('i smited thee.');
    }
}
const hobbit = new Character('Mr Baggins', 113, 'brown', 'black')
console.log(hobbit);

class Hobbit extends Character {
    constructor(name, age, eyes, hair) {
        super(name, age, eyes, hair);
        this.skills = ["thievery", "speed", "willpower"]
    }
    steal() {
        console.log('lets get away')
    }
    greet (otherCharacter) {
        console.log(`hello ${otherCharacter.name}`)
    }
    smite () {
        super.smite() 
        this.steal()
    }
}

const frodo = new Hobbit ('Frodo', 30, 'brown', 'black');
const bilbo = new Hobbit ('Bilbo', 113, 'brown', 'black');

// frodo.greet(bilbo)
// frodo.smite();
console.log(frodo);

class Men extends Character {
    constructor(name, age, eyes, hair) {
        super(name, age, eyes, hair);
        this.skills = ['pranking', 'flirting', 'running'];
        this.solve = ''
    }
    runFromMichael() {
        console.log(`I have to make a sales call`)
    }
    greet(otherCharacter) {
        console.log(`Good morning ${otherCharacter.name}`)
    }
}

// const jim = new Men ('Jim', 29, 'brown', 'brown');
// const michael = new Men('Michael Scott', 40, 'brown', 'black');
// const dwight = new Men ('Dwight', 35, 'brown', 'brown', false);
// console.log(dwight);

// const level1 = maze.level0()
// const solveTemp = []
// solveTemp.push(level1.pop())

console.log(maze.level0())
console.log(maze.level1());

const levelOneArray = maze.level1();
levelOneArray.push(level1.pop());

console.log(maze.level2().val)
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
