///////////////////
// Combine objects, arrays, and functions
///////////////////

// 1. 
const crayonBox = {
    colors: ['pink', 'blue', 'yellow']
};
console.log(crayonBox.colors[1]);

// 2. 
const bottle = {
    cap: {
        material: 'plastic',
        color: 'white'
    }
}
console.log(bottle.cap.material);

// 3.
const receipt = ['brush', {name: 'vitamin c serum', price: 60}, {name: 'toner', price: 30}];
console.log(receipt[1].name);

// 4. 
const apartmentBuilding = ['security guard', 'elevators', 'stairway', ['Sharon', 'Shelley', 'Jamie', 'Christine'], 'garage'];
console.log(apartmentBuilding[3][1]);

///////////////////////
// Combine objects, arrays, and functions more than one level deep
///////////////////////

// 1.
const knit = () => {
    const accessory = {
        item: 'scarf',
        size: '6 ft'
    };
    return accessory
}
console.log(knit().item);

// 2. 
const crayonSelector = () => {
    return crayonBox;
}
console.log(crayonSelector().colors[0]);

// 3. 
const powerButton = () => {
    const options = () => {
        console.log('select a song');
    };
    options();
};
powerButton();

///////////////
// Model a Vending Machine
///////////////

const vendingMachine = {
    snacks : [{name: 'Doritos'}, {name:'Haribo Gummy Bears'}, {name: 'Snickers'}],
    vend: (num) => {
        return vendingMachine.snacks[num].name
    }
};
console.log(vendingMachine.vend(1)); // prints Haribo Gummy Bears

//////////////////
// Callbacks
//////////////////

// 1.
const add = (num1, num2) => {
    return num1 + num2
};
console.log(add(4, 5));

// 2.
const subtract = (num1, num2) => {
    return num2 -num1
};
console.log(subtract(1, 100));

// 3.
const multiply = (num1, num2) => {
    return num1 * num2
};
console.log(multiply(8, 6));

// 4.
const divide = (num1, num2) => {
    return num2 / num1
};
console.log(divide(3,15));

// 5. 
const calculate = (num1, num2, operates) => {
   return operates(num1, num2)
};
console.log(calculate(2,4, multiply)); 
console.log(calculate(2,4, divide));
console.log(calculate(2,4, add));
console.log(calculate(2,4, subtract));

/////////////////
// Function definition placement
//////////////////

bar(); // cannot access 'bar' before initialization
const bar = () => {
    console.log('bar here');
}
foo(); //cannot access 'bar' before initialization

const foo = () => {
    console.log('foo here');
};

const bar = () => {
    console.log('bar here');
}
bar();
const foo = () => {
    console.log('foo here');
}
foo();

//////////////////
// Error reading
/////////////////

// "missing initializer in const declaration" means the "=" in between foo and () is missing. 
// after fixing the function declaration syntax, we get another error that reads "cannot access 'foo' before initialization." This means we tried invoking the function before declaring it and since javascript goes line by line, it doesn't know the function foo yet when it saw foo().
// Correct way
const foo = () => {
    console.log('hi');
};
foo();