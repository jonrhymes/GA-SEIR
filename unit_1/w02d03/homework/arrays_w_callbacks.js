<<<<<<< HEAD
// I didn't know which one to put this in, so I opted to add it to both "Combining Datatypes" and "Arrays with Callbacks"

const winterWear = {
    item: "scarf", size: "6ft"
};

const knit = () => {
    return winterWear.item;
};

console.log(knit().size)
console.log(knit(winterWear));

const crayonBox = {
    company: "Crayola",
    crayons: ["blue", "yellow", "orange"],
};

const crayonSelector = () => {
    return crayonBox;
};

console.log(crayonBox.crayons[2]);


const options = () => {
    console.log("select a song");
}

const powerButton = () => {
    return options();
}

powerButton();

/////////////////////////
//Model a Vending Machine

const vendingMachine = {
    snacks: [
        {name: "peanuts", price: 1},
        {name: "trail mix", price: 2},
        {name: "pretzels", price: 3},
    ],
};

console.log(vendingMachine.snacks[2].name)

const vend = (x) => {
    return vendingMachine.snacks[x].name;
};

vend(2);

const vendingMachine = {
    snacks: [
        {name: "peanuts", price: 1},
        {name: "trail mix", price: 2},
        {name: "pretzels", price: 3},
    ],
    vend(index){
        console.log('vending', vendingMachine.snacks[index].name)
    }
};

vendingMachine.vend(2)

// console.log(vendingMachine.snacks[2].name)

// const vend = (x) => {
//     return vendingMachine.snacks[x].name;
// };

// vend(2);

////////////
// Callbacks

// 1. Make a function add that takes two arguments (numbers) and sums them together

const add = (num1, num2) => {
    return num1 + num2;
};

console.log(add(3,4));

// 2. Make a function subtract that takes two arguments (numbers) and subtracts them

const subtract = (num1, num2) => {
    return num1 - num2;
};

console.log(subtract(3,4));

// 3. Make a function multiply that takes two arguments and multiplies them

const multiply = (num1, num2) => {
    return num1 * num2;
};

console.log(multiply(3,4));

// 4. Make a function divide that takes two arguments and divides them

const divide = (num1, num2) => {
    return num1 / num2;
};

console.log(divide(3,4));

// 5. Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback)

// const operates = (value) => {
//     console.log(value);
// }

// const calculate = (num1, num2) => {
//     return operates();
// }

// calculate(operates(add(3,4)));
// calculate(operates(subtract(3,4)));
// calculate(operates(multiply(3,4)));
// calculate(operates(divide(3,4)));

const calculate = (num1, num2, operates) => {
    return operates(num1, num2); // This doesn't look like a function to me. It's calling back the add section.
}

console.log(calculate(3,4,add));

calculate(operates(add(3,4)));
calculate(operates(subtract(3,4)));
calculate(operates(multiply(3,4)));
calculate(operates(divide(3,4)));

// ^ !! Problem: I keep getting undefined from the console.log but at least it ouputs something, as opposed to last night where I wasn't getting anything. It's uses operates as the function it passes through, so that's good. How do I get back just the number without console logging an empty function? I was sort of confused by this question. See work below:

// num1 = 3;
// num2 = 4;

// const operates = () => {
//     if(typeof callback === add){
//         return console.log()
//     }
// };

// const calculate = (num1, num2, operates()) => {
//     return value;
// });

// let operates = () => {
//     calculate(add(3,4));
//     calculate(subtract(3,4));
//     calculate(multiply(3,4));
//     calculate(divide(3,4));
// };

// const calculate = (num1, num2) => {
//     return operates(num1, num2);
// };

// console.log(calculate)

// !! Problem: I had trouble making the operates function. I tried several times to get this to run but I couldn't figure it out because it took operates to mean a variable and I wasn't sure how to switch from one operation to another inside the function. 

// 7. Call calculate 4 times, each time using one of the operation functions you wrote

// calculate(add(3,4));
// calculate(subtract(3,4));
// calculate(multiply(3,4));
// calculate(divide(3,4));

//////////////////////////////
// Function defition placement

const bar = () => {
    console.log('bar here');
}

bar();

const foo = () => {
    console.log('foo here');
}

foo();

/////////////////
// Error reading

// foo();

// const foo()=>{
//     console.log('hi');
// } 
// This means that an equal sign was left out. It's needed to create the function.

/////////////////////////////////////////
// Section 3 Array Methods with Callbacks

=======
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

<<<<<<< HEAD
/////////
// Every

// 1. Determine if every number is greater than or equal to 0

const find = (value, index) => {
    return value >= 0;
};
console.log(nums.every(find));

console.log(nums.every(num => num >= 0));

// 2. Determine if every word shorter than 8 characters

// console.log(panagram[1].length;
// console.log(panagram[2].length);
const shorter = (value, index) => {
        if(panagram.length < 8) {
            return true;
        }else{
            return false;
        }
};

console.log(panagram.every(shorter));

console.log(panagram.every(word => word.length < 8))

//////////
// Filter

// filter the array for numbers less than 4

const lessThan = (value, index) => {
    return value < 4;
};
console.log(nums.filter(lessThan));

console.log(nums.filter(num => num < 4));

// filter words that have an even length

// console.log(panagram[5].length);

const evenLength = (value, index) => {
    if(panagram[index].length % 2 === 0){
        return value;
    }
};

console.log(panagram.filter(evenLength));

console.log(panagram.filter(word => word.length % 2 === 0));

////////
// Find

// Find the first value divisible by 5

const divvy = (value, index) => {
    return value % 5 === 0;
};
 
console.log(nums.find(divvy));

// find the first word that is longer than 5 characters

const longerThan = (value, index) => {
    if(panagram[index].length > 5){
        return value;
    }
};

console.log(panagram.filter(longerThan));
// ^ returns an empty array because no word is longer than 5 characters

/////////////
//Find Index

// find the index of the first number that is divisible by 3

const divUp = (value, index) => {
    return value % 3 === 0;
};

console.log(nums.findIndex(divUp));

console.log(nums.findIndex(ind => ind % 3 === 0));

// find the index of the first word that is less than 2 characters long

const firstWord = (value, index) => {
    return panagram[index].length < 2;
};

console.log(panagram.findIndex(firstWord));
// ^ Logs -1 because there is no word less than two characters long, so it cannot log 0. Why won't it log null?

//////////
//For Each

// console.log each value of the nums array multiplied by 3

// nums.forEach((value, index) => {
//     value * 3;
// })
// console.log(nums);

const timesThree = (value, index) => {
    return value * 3;
};

const newArr = nums.map(timesThree);

console.log(newArr)

// console.log each word with an exclamation point at the end of it
// const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const exclamation = (value, index) => {
    return value + "!";
};

const newArr2 = panagram.map(exclamation);
// console.log(panagram.map(exclamation));

console.log(newArr2);

///////
// Map

// make a new array of each number multiplied by 100

const multiplied = (value, index) => {
    return value * 100;
};

const newArr3 = nums.map(multiplied);

const newArr5 = nums.map(num => num * 100)

console.log(newArr3);


// make a new array of all the words in all uppercase

const uppercase = (value, index) => {
    return value.toUpperCase();
}

const newArr4 = panagram.map(uppercase);

console.log(newArr4);

// Find out if some numbers are divisible by 7

const someNum = (value, index) => {
    return value % 7 === 0;
}

console.log(nums.some(someNum));

// Find out if some words have the letter a in them

const letterA = (value, index) => {
    return panagram.keys('a')
}

console.log(panagram.some(letterA));
=======
//////////
// Every
//////////

// 1.Determine if every number is greater than or equal to 0
const everyMethod = (value, index) => {
    return value >= 0
};
console.log(nums.every(everyMethod));
// 2. Determine if every word shorter than 8 characters
const everyMethod2 = (value, index) => {
    return value.length < 8
}
console.log(panagram.every(everyMethod2));

////////////
// Filter
////////////

// 1. Filter the array for numbers less than 4
const filterTest = (value, index) => {
    return value < 4
};
const newArr = nums.filter(filterTest);
console.log(newArr); // prints new array of only the numbers less than 4

// 2. filter words that have an even length
const filterTest2 = (value, index) => {
    return value.length % 2 === 0
}
const newArr2 = panagram.filter(filterTest2);
console.log(newArr2);

////////////
// Find
///////////

// 1. Find the first value divisible by 5
const findDivide5 = (value, index) => {
    return value % 5 === 0
};
console.log(nums.find(findDivide5));

// 2. Find the first word that is longer than 5 characters 
const findLongerThan5 = (value, index) => {
    return value.length > 5
};
console.log(panagram.find(findLongerThan5)); // returns undefined because none of the elements are longer than 5 characters

//////////////
// Find Index
/////////////

// 1. find the index of the first number that is divisible by 3
const findDivide3 = (value, index) => {
    return value % 3 === 0
};
console.log(nums.findIndex(findDivide3));

// 2. find the index of the first word that is less than 2 characters long
const findShorterThan2 = (value, index) => {
    return value.length < 2
};
console.log(panagram.findIndex(findShorterThan2)); // prints -1 because that kind of element does not exist in the array

///////////
// For Each
///////////

// 1. console.log each value of the nums array multiplied by 3
nums.forEach((value, index) => {
    console.log(value * 3);
});

// 2. console.log each word with an exclamation point at the end of it
panagram.forEach((value,index) => {
    console.log(`${value}!`)
});

///////////
// Map
//////////

// 1. make a new array of each number multiplied by 100
const multiplyHundred = (value, index) => {
    return value * 100
};
console.log(nums.map(multiplyHundred));

// 2. make a new array of all the words in all uppercase
const upperCase = (value, index) => {
    return value.toUpperCase();
}
console.log(panagram.map(upperCase));

//////////
// Some
/////////

// 1. Find out if some numbers are divisible by 7
const divisibleBy7 = (value, index) => {
    return value % 7 === 0
};
console.log(nums.some(divisibleBy7)); // prints true because at least one needs to be divisible by 7, and that value is 7

// 2. Find out if some words have the letter a in them
const haveVowelA = (value, index) => {
    return value.includes('a')
};
console.log(panagram.some(haveVowelA)); // prints true because lazy has an A
// found the .includes() method on w3schools

////////////
//Reduce
////////////

// 1. Add all the numbers in the array together
const addAllNumbers = (accumulator, value, index) => {
    return accumulator + value
}
console.log(nums.reduce(addAllNumbers, 0));

// 2. concatenate all the words
const joinAllWords = (accumulator, value, index) => {
    return `${accumulator}${value}`
}
console.log(panagram.reduce(joinAllWords, panagram[0])) // I'm not sure why "the" prints twice in the beginning?
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
