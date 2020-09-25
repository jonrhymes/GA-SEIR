<<<<<<< HEAD
// How do we assign a value to a variable?
// A: Through an equal sign

// Which line(s) is/are valid?

// let a = 0;
// console.log(a); // valid
// const b = 1;
// console.log(b); // valid
// 9 = a;
// console.log(a); // not valid
// b = b + 5;
// console.log(b); // not valid. b is not defined.

// How do we change the value of a variable?
// A: First by assigning a value
// How do we assign an existing variable to a new variable?

=======
//Let's get Mathy
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16

<<<<<<< HEAD
// // Round a down
// console.log(Math.floor(a));
// // Round b up
// console.log(Math.ceil(b));
// // Find the absolute value of b - a
// console.log(Math.abs(c));
// // Find the largest number of a, b, c, d, e
// console.log(Math.max(a,b,c,d,e));
// // Find the smallest number of a, b, c, d, e
// console.log(Math.min(a,b,c,d,e));
// // Find the square root of e
// console.log(Math.sqrt(e));
// // Raise e to the power of d
// console.log(Math.pow(e, d));
// Make a digital die 0 generate a random number between 1 - 6
// console.log(Math.ceil(Math.random() * (6)));

// Strings Activity 1
// Strings - Switcharoo
// Create a variable called firstVariable.
// assign it the value of a string: "Hello World"
let firstVariable = "Hello World"
// // On the next line, change the value of this variable to a number.
firstVariable = 4;

let secondVariable = firstVariable;

let secondVaraible = "This is a string"

console.log(secondVariable);

console.log(firstVariable);
// store the value of firstVariable into a new variable called secondVariable - How do you do this?
let firstVariable = secondVariable;
console.log(secondVariable);
// On the next line, change the value of secondVariable to a string.
// What is the value of firstVariable?

// Strings - Combine it
// Create a variable called yourName and set it equal to your name as a string.
// let yourName = "Jon"

// // Write an expression that takes the string "Hello, my name is " and the variable yourName so that it prints a new string with them concatenated
// console.log("Hello my name is " + yourName)
// // ex: Hello, my name is Jean Valjean

// // Booleans Activity
// // Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
// // MDN Comparison Operators

//   const a = 6;
//   const b = 100;
//   const c = -5;
//   const d = 3000;
//   const e = 'Jelly Bean';
// // a < b;
// console.log(a < b);
// // c _ d;
// console.log(c < d)
// // 'Peanut' _ 'Peanut';
// console.log("Peanut" === "Peanut")
// // a _ b _ c;
// console.log(a < b > c);
// // a _ a _ d;
// console.log(a != a < d);
// // e _ 'Jelly Bean';
// console.log(e == 'Jelly Bean')
// // 48 _ '48';
// console.log(48 == '48');
// // 'e' _ 'Eh'
// console.log(e != 'Eh');

// The Farm
// Write code that will print out "mooooo" if the variable animal is equal to cow.

// Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."

let animal = ["cow", "chicken", "goat"];

for (let i = 0; i < animal.length; i++){
    if(i == 0){
        console.log("mooo")
    }else{
        console.log("This is not a cow")
    }
}

// Let's get odd
// Print out the odd numbers that are within the range of 1 - 100.

// for (let i = 1; i <= 100; i++){
//     if (i % 2 !== 0){
//     console.log(i + " is an odd number");
//     }
// }

// Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:

// for (let i = 0; i <= 100; i++){
//     if (i % 5 == 0){
//     console.log("I found a " + i + ". High Five!");
//     }
// }

// I found a 5. High five!
// I found a 10. High five!
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!


// Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.

// Fibonacci
// Fibonacci is a classic example in coding. Its name will appear often. In its essence, it is adding numbers together in a specific sequence. Don't let the inherent 'mathyness' or fancy name scare you. You've got this!

// Here are some sequences, can you figure out the next number? Can you figure out the pattern so you could write a loop to generate these?:

// 1, 2, 3, 4

// Here is another one:

// 2, 4, 6, 8

// And another:

// 5, 10, 15, 20

// and one more:

// 2, 4, 8, 16, 32

// Fibonacci is just another sequence of numbers.

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...


// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 8 + 5 = 13
// Can you see the pattern?

// Think about how you would create that pattern using JavaScript

// Here is the challenge: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// Fun fact! Fibonacci appears often in nature. Check it out

// Feeling overwhelmed?

// Start with some pseudoecode!
// First just try to console.log the first 10 Fibonacci numbers
// Try thinking of the smallest step, solve it and then find the next step to take
// Checkerboard
// Set a checkerboard size to a variable

// const boardSize = 8;
// Now, using what you know about control flow, build a checkerboard

//  # # # #
// # # # #
//  # # # #
// # # # #
// You should be able to change the variable boardSize and generate a larger or smaller grid

// const boardSize = 20;
=======
// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.abs(b-a));
// console.log(Math.max(a, b, c, d, e));
// console.log(Math.min(a, b, c, d, e));
// console.log(Math.sqrt(e));
// console.log(Math.pow(e,d));
// console.log(Math.ceil(Math.random()*6));
// console.log(Math.floor(Math.random() * 6) +1));

//Strings Activity 1
// let firstVariable = 'Hello World';
// firstVariable = 3;
// let secondVariable = firstVariable;
// secondVariable = 'sharon';
// console.log(firstVariable);

// const yourName = 'Sharon Kim';
// console.log(`Hello, my name is ${yourName}`);

//Booleans Activity
// const a = 6;
// const b = 100;
// const c = -5;
// const d = 3000;
// const e = 'Jelly Bean';

// console.log(a < b);
// console.log(c < d);
// console.log('Peanut'==='Peanut');
// console.log(a < b > c);
// console.log(a + a < d);
// console.log(e === 'Jelly Bean');
// console.log(48 == '48');
// console.log('e' !== 'Eh');

//The Farm
const animal = 'cow';
if (animal === 'cow') {
    console.log('moooooo')
} else {
    console.log('Hey! You\'re not a cow.');
};

// Driver's Ed
const age = 24;
if (age >= 16) {
    console.log('Here are the keys');
} else {
    console.log(`Sorry, you're too young.`)
}

// Just Loop It
for (let x = 0; x <= 10; x++) {
    console.log(x);
};

for (let y = 500; y >= 50; y--) {
    console.log(y);
};
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
