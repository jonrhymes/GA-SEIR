<<<<<<< HEAD
/////////////////////
// Functions : First class citizens / or 1st class objects, can move wherever they want, can be thrown
/////////////////////

// const num = 8
// const name = "Jon R"
// const myFunc  = (string) => { // Passing in a parameter
//     return string;
// }

// const twoChains = (thing1, thing2) => {
//     console.log(thing2(thing1))
// }

// twoChains(name, myFunc)

// console.log(twoChains)

// const loopStuff = (howManyTimesIllLoop, func /* added after, do this when it loops through*/) => {
//     for(let i = 0; i <= howManyTimesIllLoop; i++){
//         func(i)
//     }
// }

// loopStuff(5, console.log)/* telling it how many times to loop and what to do after it loops. Console.log is the function we're passing. Func becomes console.log, Passing the value of console.log as the argument to Func*/

// console.log("You're doing great! Keep up the good work!")

///////////
// 2 ways of creating functions: Function Declaration & Function Expression

// function declaration : Readability is better here, denoted by the term Function. This is slower
=======
// console.log("you are awesome");

// 2 ways of creating functions

// function declaration
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
// function one () {
//     return 'one'
// }
// one()

<<<<<<< HEAD
// function expression: DEFAULT TO THIS (until we need a declaration). But here, this is shorter. We will use this most. Lambda or Arrow Function. This is faster, optimizes speed.
// const two = () => {
//     return 5
// }

// console.log(two)
// const shotenedTwo = () => 2 // This is the equivalent of const two = () => {} but it's used for only One Item, One value on One line. 

// const printBoo = () => { // here is where we assign the value
=======
// // function expression
// const two = () => {
//     return 2
// }
// const shotenedTwo = () => 2

// const printBoo = () => {
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
// 	console.log('======');
// 	console.log('Boo!');
// 	console.log('======');
// };
<<<<<<< HEAD

// printBoo(); // use parentheses to invoke it. This is where we use the value

// const printSum = () => {
//     console.log(10 + 10);
// }

// printSum();

// 1. 
// const printTriangle = () => {
//     console.log("#");
// }

// printTriangle();


// 2. 
const printTriangle = () => {
    console.log("#");
    console.log("##");
    console.log("###");
    console.log("####");
    console.log("#####");

}
printTriangle();

// Make it so that printTriangle will print the pound signs using a for loop (there is a for loop and only 1 console.log inside the function).

// Make it so that when you can invoke the function with the number of pound signs to print (not just hardcoded to print 5)

const printTriangle2 = (amt) => {
    for(let i = 1; i <= amt; i++){
        let tag = "#"
        console.log(tag.repeat(i))
    }
}

printTriangle2(5)

// function that mutates
const sharonFromQueens = {
    name: "Sharon",
    age: 21;
  }
const jamesFromBK = {
    name: "James",
    age: 25;
  }
const andyWhoLikesMiamiFootball = {
    name: "Andy",
    age: 25;
  }
  
const incrementAge = (person) => {
    person.age++
    // console.log (`Hooray! It's your ${person.age} birthday`)
  }

 const displayAge = (person) => {
    console.log (`Hooray! It's your ${person.age} birthday`)
 }

 const incrementAndDisplayAge = (person) => {
     incrementAge(person)
     displayAge(person)
 }

 const sharonFromQueens = {
  firstName: "Sharon",
  age: 21
}

const incrementAge = (name) => {
  name.age++
  console.log(`Horray it's your ${name.age} birthday, ${name.firstName}!`)
}

incrementAge(sharonFromQueens);

//////////////////
// Block-scoping with conditionals
/////////////////

// if (true) {
//     const num = 100;
//     console.log(num)
// }
=======
// printBoo();

// const printSum = (num) => console.log(num + num);
// printSum(8); // 16

// const printTriangle = (sign) => {
//     console.log(sign);
//     console.log(sign, sign);
//     console.log(sign, sign, sign);
//     console.log(sign, sign, sign, sign);
//     console.log(sign, sign, sign, sign, sign);
// };
// printTriangle('#');

// const printTriangle = (amt) => {
//     for (let x = 1; x <= amt; x++) {
//         let tag = '#'
//         console.log(tag.repeat(x))
//     };
// };
// printTriangle(5);


//CONDITIONALS

// if (true) {
//     const num = 100;
// }
// console.log(num);

>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

// const age = 21;
// let message = '';

// if (age < 21) {
// 	message = 'You cannot buy the beer';
// } else {
// 	message = 'You can buy the beer';
// }

<<<<<<< HEAD
// console.log(message);

// const words = 'that\'s a...'; //slash is as an escape, to continue to use single quotes.
=======
// console.log(message); //you can buy the beer because age and message are defined in the outer scope. 


// const words = 'that\'s a...';
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
// {
// 	const item = 'spicy meatball';
// 	const start = 'mama mia!'
// 	{
// 		console.log(start);
// 		console.log(words);
// 		console.log(item);
// 	}
<<<<<<< HEAD
// }

const square = () => {
    console.log()
    return 
}


const palindrome = () => {

}

function myFunction1() {
  const firstName = "Yanny"
  const middleName = "Andres"
  const lastName = "Castrillon"
  return firstName+" "+middleName+" "+lastName;
}
const fullName = myFunction();
console.log(fullName); => "Yanny Andres Castrillon"
=======
// } // prints mama mia thats a spicy meatball because the console logs are within the smallest scope and can access the other scopes it is also a part of
// console.log(item) // wont work because youre calling the variable outside of its scope


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

// Step 1: Write our outer function 
// Step 2: Create a variable that we want to persist in our Closure
// Step 3: Define a function that uses the value we want to persist
// Step 4: Return the definition of our function, we didnt call/invoke it

// const outerFunction = () => {
//     let novaIsAwesome = 0;
//     const innerFunc = () => {
//         novaIsAwesome++
//         console.log(novaIsAwesome)
//         return novaIsAwesome > 5
//     }
//     return innerFunc
// }

// const bryceIsAwesome = outerFunction()
// const christianIsAwesome = outerFunction()
// const abrahamIsAwesome = outerFunction()

// bryceIsAwesome()
// christianIsAwesome()
// bryceIsAwesome()
// bryceIsAwesome()
// christianIsAwesome()
// bryceIsAwesome()
// bryceIsAwesome()
// christianIsAwesome()
// abrahamIsAwesome()
// abrahamIsAwesome()
// christianIsAwesome()

// console.log('Bryce State:')
// console.log(bryceIsAwesome())
// console.log('Abraham State:')
// console.log(abrahamIsAwesome())
// console.log('Christian State:')
// console.log(christianIsAwesome())


// 10! = 10 x 9 x 8 x 7... x1


// Step 1: Write our function and define a base case
// step 2: Write our Recursive logic
// Step 3: Test your function
const factorial = (n) => {
    if (n === 0) {
        return 1 // this exits the function so it doesnt keep repeating itself and itll be running infinitely SO MAKE SURE YOU USE THE RETURN IN YOUR BASE CASE because once the comp sees return, it will stop the function, even if there are 800 more lines of code left within the function
    } else {
        return n * factorial(n-1)
    }
}

console.log(factorial(10));
console.log(factorial(9));
console.log(factorial(50));
console.log(factorial(5));
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
