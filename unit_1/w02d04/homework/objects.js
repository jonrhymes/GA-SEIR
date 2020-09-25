<<<<<<< HEAD
//////////////////
//Creating Classes

class Hamster {
    constructor(owner, name = 'Mortadella', price) {
        this.owner = '';
        this.name = name;
        this.price = 15; 
    }
    wheelRun() {
        console.log('squeak squeak');
    }
    eatFood() {
        console.log('nibble nibble');
    }
    getPrice() {
        return this.price;
    }
};

// const ham = new Hamster('Becky', 'Mortadella', 15);
// ham.wheelRun();
// ham.eatFood();
// console.log(ham)

class Person {
    constructor(name = 'Jacob', age, height, weight, mood, hamsters, bankAccount) {
=======
/////////////
// CREATING CLASSES
/////////////

class Hamster {
    constructor (owner, name, price) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }
}

class Person {
    constructor (name, age, height, weight, mood, hamsters, bankAccount) {
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
<<<<<<< HEAD
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`Hello there, I am ${this.name}`);
    }
    eat(weight, mood) {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight --;
    }
    ageUp(age, heigh, mood, bankAccount) {
        this.age ++;
        this.height ++;
        this.mood --;
        this.bankAccount = this.bankAccount + 10;
    }
    buyHamster() {
    // buyHamster(owner, name, price) {
        // const ham = new Hamster(owner, name, price);
        // const gus = new Hamster('Timmy', 'Gus', 2)
        this.hamsters.push('Timmy', 'Gus', 2);
        this.mood = this.mood + 10;
        // this.bankAccount -= Hamster.getPrice(price); // !! I couldn't figure this out, how to put the function inside here
        this.bankAccount = this.bankAccount - 15;
        // console.log(ham.name);
    }

};

// const me = new Person('Jon');
// me.buyHamster('Jonny', 'Hammy', 20);
// const ham = new Hamster
// console.log(me.eat(2))
// me.eat();
// console.log(me)
// Hamster.prototype.push('Hello', 'There')
// console.log(this.hamsters)
// console.log(this.hamsters.push(Hamster))
// const arr = [1,2,3,4]
// arr.push(Hamster)
// console.log(arr)

const timmy = new Person('Timmy');
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
// console.log(timmy);
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
// console.log(timmy);
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
// console.log(timmy);
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
// console.log(timmy);

const gus = new Hamster('Gus')

timmy.buyHamster();
console.log(timmy);

timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();

console.log(timmy);

timmy.eat();
timmy.eat();

console.log(timmy);

timmy.exercise();
timmy.exercise();

console.log(timmy);
=======
        return this.name
    }
    getAge() {
        return this.age 
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
    eat(num) {
        return this.weight +=num, this.mood +=num;
    }
    exercise(num) {
        return this.weight -=num
    }
    ageUp(num) {
        return this.age +=num, this.height +=num, this.weight +=num, this.mood -=num, this.bankAccount += 10;
    }
    buyHamster(hamster) {
        return this.hamsters.push(hamster), this.mood +=10, this.bankAccount -= hamster.getPrice();
    }
}

//console.log(pet.getPrice());

const Timmy = new Person ('Timmy')
Timmy.age = 5;
//console.log(Timmy)
Timmy.eat(5);
//console.log(Timmy);
Timmy.exercise(5);
//console.log(Timmy);
Timmy.ageUp(9);
//console.log(Timmy);
const Gus = new Hamster ('', 'Gus')
//console.log(Gus);
Gus.owner = 'Timmy';
//console.log(Gus);
Timmy.buyHamster(Gus);
//console.log(Timmy);
Timmy.ageUp(15);
//console.log(Timmy);
Timmy.eat(2);
//console.log(Timmy);
Timmy.exercise(2);
console.log(Timmy);
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
