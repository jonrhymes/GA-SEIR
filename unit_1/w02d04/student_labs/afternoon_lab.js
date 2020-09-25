class Pet {
<<<<<<< HEAD
    constructor(owner, name){
        this.owner = owner;
        this.name = name;
    }
    walk (){
        console.log(`walka walka`)
    }

}

// const cat = new Pet('Deborah', 'Waffles CheesyBurger')

// console.log(cat)
// cat.walk();
=======
    constructor (owner, name) {
        this.owner = owner;
        this.name = name;
    }
    walk () {
        console.log('walka walka')
    }
}

const firstPet = new Pet ('Sharon', 'Dalgoo');
console.log(firstPet);
firstPet.walk();
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

class Dog extends Pet {
    constructor(owner, name) {
        super(owner, name);
        this.price = 20;
    }
<<<<<<< HEAD
    bark() {
        console.log(`bark! woof!`);
    }
    chaseTail() {
        console.log(`oh boy oh boy oh boy`);
    }
    getPrice() {
        return this.price;
    }
};

// console.log(Dog)
const doge = new Dog('Deb', 'Spot');
// console.log(doge)
doge.getPrice();
console.log(doge.getPrice());
// ========> why doesn't this return anything?
doge.chaseTail();
doge.bark(); 

Dog.prototype.bark = function () {
    console.log(`WOOF WOOF woof!`)
};

doge.bark();

class Cat extends Pet {
    constructor(owner, name) {
        super(owner, name);
        this.price = 10;
    }
    purr() {
        console.log(`purrrrr`);
    }
    clean() {
        console.log(`cleaning`);
    }
    getPrice() {
        return this.price;
    }
    walk() {
        console.log(`strut strut`)
    }
};

const kitty = new Cat('Mike', 'Waffles Cheesyburger');

console.log(kitty);
kitty.walk();
kitty.purr();

Cat.prototype.purr = function () {
    console.log(`PPPPPPRRRR`);
};

kitty.purr();

// Stretch
// Using classes, generate a deck of cards and store them in an array
// cards are objects and should have a value, a face, a suit, a boolean of whether they are faceUp etc.
// there are 13 cards per suit, values should match what they are in BlackJack (or another game), - Ace, by default is equal to 11, - cards 2-10 share the same face and value - Jack, Queen and King have a value of 10
// Figure out how to shuffle the array and console.log the top card (Hint: google it)
// Figure out how to compare the top and bottom card and console.log both cards and a message that says which card is bigger (or a tie)



=======
    bark () {
        console.log('bark')
    }
    chaseTail() {
        console.log('oh boy oh boy oh boy')
    }
    getPrice() {
        return this.price
    }
}

const terrier = new Dog('Boston University', 'Rhett');
console.log(terrier);
terrier.bark();
terrier.chaseTail();
console.log(terrier.getPrice());

class Cat extends Pet {
    constructor (owner, name) {
        super(owner, name);
        this.price = 10;
    }
    purr () {
        console.log('purrrrrrr')
    }
    clean() {
        console.log('cleaning')
    }
    getPrice() {
        return this.price
    }
    walk() {
        console.log('strut strut')
    }
}

const garfield = new Cat ('Bob', 'Garfield');
console.log(garfield);
garfield.purr();
garfield.clean();
console.log(garfield.getPrice());
garfield.walk();

Dog.prototype.bark = function () {console.log('bark bark bark')};
terrier.bark();
Cat.prototype.walk = function () {console.log('I do not walk')};
garfield.walk();

/////////////
//Stretch
////////////

let deckOfCards = [];
const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const faces = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 11];
class Cards {
    constructor(value, face, suit, faceUp = true) {
        this.value = value;
        this.face = face;
        this.suit = suit;
        this.faceUp = faceUp;
    }
}

class Spades extends Cards {
    constructor (value, face, suit, faceUp) {
        super(value, face, suit, faceUp)
    }
}

deckOfCards(new Cards())
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
