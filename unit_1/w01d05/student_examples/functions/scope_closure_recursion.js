///////////////////
// Define Scope restriction
///////////////////

// Prevents global access

// const exampleFunction = () => {
//     const num = 100;
//     console.log(num * num);
//   }
  
//   console.log(num); // num will be undefined because it can only be accessed inside the {}

///////////////////
// Differentiate between global and local scope
///////////////////

// variables, when declared inside function, are only available inside that function

// ** Functions create their own execution context **


///////////////////
// Describe how functions can call other functions
///////////////////

// Review This!!  

// const returnName = () => {
//     return "Matt"
//   }
  
//   const returnGreeting = () => {
//     return "oh hai, " + returnName()
//   }
//   console.log(returnGreeting());

// ///////////////////
// // Use const and let for block-scoping
// ///////////////////

// {
//     const item = 'spicy meatball';
//     console.log(item);
// }

// var leaks out of a block! So stick to let and const


///////////////////
// Use block-scoping with loops
///////////////////


//////////////////
// Block-scoping with conditionals
/////////////////

// if (true) {
//     const num = 100;
//     console.log(num)
// }

// const age = 21;
// let message = '';

// if (age < 21) {
// 	message = 'You cannot buy the beer';
// } else {
// 	message = 'You can buy the beer';
// }

// console.log(message);


///////////////////
// Use blocks within blocks
///////////////////

// const words = 'that\'s a...'; //slash is as an escape, to continue to use single quotes.
// {
// 	const item = 'spicy meatball';
// 	const start = 'mama mia!'
// 	{
// 		console.log(start);
// 		console.log(words);
// 		console.log(item);
// 	}
// }

///////////////////
// Define pollution
///////////////////

// Security concern if values are reassigned

///////////////////
// Define Closure and Recursion
///////////////////

//////////////
// Closure: 

// const closure = () => { // First create closure, then put it in memory, stored in global memory
// 	let privateVal = 5 // stored in closure's local memory
// 	const innerFunc = () => { // Functions
// 		privateVal++
// 		// we would normally not do this because we want to keep the value private
// 		console.log(privateVal)
// 		return privateVal > 10
// 	}
// 	return innerFunc // Returning the definition of the function vs innerFunc (), which would end the function
//   }
//   const generatedFunc = closure() // put on the call stack to be executed
//   generatedFunc() // 6

//   The key is that a function remembers all the data that was available to it in the original context it was written so if you write a function in the global scope it can find data in the global scope but if you define a function in another function and use the FIRST CLASS CITIZEN FEATURE OF FUNCTIONS to bring that function out of the darkness and into the light then it will take with it the memory of the function it was birthed from.

// const val = 8;

// const func = () => {
//     val++;
//     return val;
// }

// console.log(val);

// ///////////////
// // Recursion: 

// const areAllOdd = (arr) => {
//     // This known as our base case this keeps us from having an infinite loop
//     // we are checking here to see if the array no longer has any values in it
//       if (arr.length === 0){
//         console.log('no numbers in this array')
//         return
//       }
//       // here we check if the num is odd
//       if (arr[0] % 2 === 0){
//         console.log(`is the first number in this array odd ${arr}`)
//         // We run shift because we want to eliminate the value that we know is no longer checking for
//         const num = arr.shift()
//         console.log(`${num} is not odd`)
//         areAllOdd(arr)
//       } else {
//             console.log(`is the first number in this array odd ${arr}`)
//         console.log(`${arr[0]} is odd`)
//         return
//       }
//     }
  
//     const martinsArray = [3142, 5798, 6550, 5914]
  
//     areAllOdd(martinsArray)


// Step 1: Write our outer function. 
const outerFunction = () => {
// Step 2: Create a variable that we want to persist in our Closure
    let novaIsAwesome = 0;
// Step 3: Create another function. Define a function that uses the value we want to persist
    const innerFunc = () => { // Just defined it, didn't run function
        novaIsAwesome++; // increments the value above
        console.log(novaIsAwesome);
        return novaIsAwesome > 5; 
    }
// Step 4: Return the DEFINITION of our function
    return innerFunc // returns the definition of the function
} // Now created a closure

const bryceIsAwesome = outerFunction() // Call and invoke the function
const christianIsAwesome = outerFunction()
const abrahamIsAwesome = outerFunction() // Creates a new context of variables
bryceIsAwesome()
christianIsAwesome()
bryceIsAwesome()
bryceIsAwesome()
christianIsAwesome()
bryceIsAwesome()
bryceIsAwesome()
christianIsAwesome()
abrahamIsAwesome()
abrahamIsAwesome()
christianIsAwesome()

console.log('Bryce State: ')
console.log(bryceIsAwesome())
console.log('Abraham State: ')
console.log(abrahamIsAwesome())
console.log('Christian State: ')
console.log(christianIsAwesome())

////////////////////
// Recursive Function

// Factorial - 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

// const = function expression

// must make a base case first, so that it won't be an infinite loop
const factorial = (n) => {
// Step 1: Write our function and define a base case
    if(n === 0){// THIS IS OUR BASE CASE!
    return 1; // once we return, we EXIT our function so it'll stop the chain of recursive loops
// Step 2: Write our Recursive Logic
    }else{
    return n * factorial(n - 1) 
    }
}
// Step 3: Test Function

console.log(factorial(10));
console.log(factorial(9));
console.log(factorial(5));
console.log(factorial(50));