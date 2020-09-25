// console.log("git hub")

class Hero {
    constructor(name = "Dougie", health, weapons, catchPhrases) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchPhrases = ['i\'m fresher than day old pizza',
        'you can\'t count my calories']
    }
    randomInt(array) {
        // return Math.floor(Math.random() * this.catchPhrases.length);
        return Math.floor(Math.random() * array.length);
    }
    talkSass() {
        // console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])
        console.log(`${this.name} says: ${this.catchPhrases[this.randomInt(this.catchPhrases)]}`);
    }
    announceHealth() {
        console.log(`${this.name}'s health is ${this.health}`)
    }
    fight(enemy) {
        console.log(`${this.name} says: I'm ready to rumble!`);
        // create an array of the weapon names (keys from this.weapons)
        const weaponOptions = Object.keys(this.weapons);
        // select a random weapon from that array
        const selectedWeapon = weaponOptions[this.randomInt(weaponOptions)]
        // hardcode weapon first ^
        // log the selected weapon and it's hit points
        console.log(`${this.name} used ${selectedWeapon} for ${this.weapons[selectedWeapon]} hitpoints`)
        // subtract hitpoints from the enemy's health
        enemy.health -= this.weapons[selectedWeapon];
    }
};

const dougie = new Hero();
// dougie.talkSass();
// dougie.announceHealth();
// dougie.fight();
// console.log(dougie.weapons)

class Enemy {
    constructor(name = "Pizza Rat", health, weapons, catchPhrases){
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10    
        }
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer']
    }
    randomInt() {
        return Math.floor(Math.random() * this.catchPhrases.length);
    }
    // talkSmack() {
    //     console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])
    // }
    // announceHealth() {
    //     console.log(`I have ${this.health} left!`)
    }
    talkSass() {
        // console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])
        console.log(`${this.name} says: ${this.catchPhrases[this.randomInt()]}`);
    }
    announceHealth() {
        console.log(`${this.name}'s health is ${this.health}`)
    }
    fight(enemy) {
        console.log(`${this.name} says: I'm gonna flatten you like a slice of pepperoni!`);
        // create an array of the weapon names (keys from this.weapons)
        const weaponOptions = Object.keys(this.weapons);
        // select a random weapon from that array
        const selectedWeapon = weaponOptions[this.randomInt(weaponOptions)]
        // hardcode weapon first ^
        // log the selected weapon and it's hit points
        console.log(`${this.name} used ${selectedWeapon} for ${this.weapons[selectedWeapon]} hitpoints`)
        // subtract hitpoints from the enemy's health
        enemy.health -= this.weapons[selectedWeapon];
    }
};

const pizzaRat = new Enemy();
// pizzaRat.talkSmack();

// dougie.talkSass();
// pizzaRat.talkSmack();
// dougie.announceHealth();
// pizzaRat.announceHealth();

// console.log(pizzaRat.fight())
// dougie.fight(pizzaRat);
// console.log(pizzaRat.weapons.pepperoniStars)
// console.log(pizzaRat.weapons.pepperoniStars - dougie.health)
// console.log(dougie)
// console.log(pizzaRat)
// pizzaRat.fight(dougie);
// dougie.fight(pizzaRat);

