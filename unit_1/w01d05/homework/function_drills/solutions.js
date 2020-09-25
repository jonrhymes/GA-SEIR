<<<<<<< HEAD
//////////////////
// Written Questions
/////////////////

// 1. The difference between a parameter and an argument is that a parameter passes input through the function. The value of the parameter, or the input of it, is called the argument. 

// 2. Return vs console.log: console.log prints only to the Terminal and is set apart from the function itself, acting more like a check to see if processes are working. On the other hand, return stores and passes the result of a function back into the function and has the ability to exit the function to stop a chain of loops. Return does not print to the Terminal and exists - as far as I'm aware - only in functions. 

//////////////////
// Palindrome
/////////////////

// Ignore: scratch work
// let string = "Hello"

// console.log(string.slice(0,1).toLowerCase());
// console.log(string.toLowerCase().split('').reverse().join(''));

const checkPalindrome = (string) => {
    const forwards = string.toLowerCase();
    const backwards = string.toLowerCase().split('').reverse().join('');
    // console.log(string);
    // console.log(forwards);
    // console.log(backwards);
        if(forwards === backwards){
            return true
        }else{
            return false
    }
}
console.log(checkPalindrome('Radar'))
console.log(checkPalindrome('Madamimadam'))
console.log(checkPalindrome('Borscht'))

//////////////////
// Sum Array
/////////////////

// Ignore scratch: const array = [1,2,3,4,5]
// console.log(...array)

// const sumArray = (array) =>{
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//         // console.log(array[i]);
//         }
//         return sum
// }

/// Alternate solution: 

const sumArray = (array) =>{
  let sum = 0;
  for(let num of array){
    sum += num
    // console.log(array[i]);
    }
    return sum
  }

console.log(sumArray([1,2,3,4,5,6]));


//////////////////
// Prime Numbers
/////////////////

const checkPrime = (num) => {
    if(num <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0){
        return false;
      } 
    } return true;
  }

  // console.log(checkPrime(9))

  const printPrime = (num) => {
    for (let i = 2; i <= num; i++){
      if(checkPrime(i) === true){
        // if current iteration is prime, console log it, otherwise do nothing
      if(checkPrime(i) ? console.log(i) : null
        // console.log(i);
      }
    }
  }

  printPrime(97)


//////////////////
// Rock Paper Scissors
/////////////////

//// NOTE: I'm sure there's a more elegant way to write this code...

let choices = ["Rock", "Paper", "Scissors"];

const randomMove = () => {
  randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
// console.log(randomMove())

let computersMove = randomMove();
let usersMove = randomMove();
// console.log(computersMove)
// console.log(usersMove)

const rockPaperScissors = () => {
    console.log(`Computer chose ` + `${computersMove}`);
    console.log(`User chose ` + `${usersMove}`);
    if(computersMove === usersMove){
      console.log("It's a tie!")
    }else if(computersMove === "Rock"){
      if(usersMove === "Paper"){
        console.log(`${usersMove}` + ` beats ` + `${computersMove}` + `, user wins!`)
      }else{
        console.log(`${computersMove}` + ` beats ` + `${usersMove}` + `, computer wins!`)}
    }else if(computersMove === "Paper"){
      if(usersMove === "Scissors"){
        console.log(`${usersMove}` + ` beats ` + `${computersMove}` + `, user wins!`)
      }else{
        console.log(`${computersMove}` + ` beats ` + `${usersMove}` + `, computer wins!`)}
    }else if(computersMove === "Scissors"){
        if(usersMove === "Rock"){
          console.log(`${usersMove}` + ` beats ` + `${computersMove}` + `, user wins!`)
      }else{
        console.log(`${computersMove}` + ` beats ` + `${usersMove}` + `, computer wins!`)}
      }
      
}

=======
// test console.log('hello');

/////////////////
//WRITTEN QUESTIONS
////////////////

// 1. Parameters are the inputs we can put in functions when we define them (they're basically placeholders). Arguments are the values/inputs we type in when invoking the functions. Both go in the parentheses after the function identifier/name.
// 2. Return is used to get a value from the function. Also, when there is a return within the function, it stops executing, even if there are more lines of code following it. Console.log prints/logs to the console whatever is in the parentheses that follow it. Console is the object and .log() is the method/action.

////////////////
//Palindrome
///////////////

const checkPalindrome = (anyString) => {
    const newArr = anyString.split('');
    newArr[0] = newArr[0].toLowerCase();
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === newArr[(newArr.length-i)-1]) {
            return true;
        } else {
            return false;
        };
    };
};
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

// const checkPalindrome = (anyString) => {
//   const newArr = anyString.split('');
//   newArr[0] = newArr[0].toLowerCase();
//   const newArr2= newArr.reverse();
//   if (newArr === newArr2) {
//     console.log(true);
//     } else {
//         console.log(false);
//       };
//     };
// console.log(checkPalindrome("Radar")); //returns true
// console.log(checkPalindrome("Borscht")); //returns undefined???

//////////////
//Sum Array
//////////////

const sumArray = (numArr) => {
    let sum = 0;
    for (let i = 0; i <numArr.length; i++) {
        sum += numArr[i];
    };
    return sum;
};
console.log(sumArray([1, 2, 3, 4, 5, 6]));

////////////////////
//Prime Numbers
////////////////////

const checkPrime = (num) => {
    let sqrtNum = Math.floor(Math.sqrt(num));
    for (let x = 2; x <= sqrtNum; x++) {
      if (num % x === 0) {
        return false;
    } else {
      return true
    };
  };
};
console.log(checkPrime(728)); //rounded down sqrt is 26 and 728/26 has no remainder
console.log(checkPrime(7)); // rounded down sqrt is 2 and 7%2 is 1
  
const printPrimes = (primenum) => {
    for (let y = 2; y <= primenum; y++) {
      if (checkPrime(primenum) === true) {
        console.log(y)
      }
    }
  };
printPrimes(97); // When I place y into checkPrime(), it prints odd numbers from 5-97 and when I play primenum into checkPrime(), it prints everything from 2-97. 


//////////////////
//Rock Paper Scissors
//////////////////

const possibleMoves = ['rock', 'paper', 'scissors'];

const randomMove = () => {
  return possibleMoves[Math.floor(Math.random()* possibleMoves.length)];
};
//randomMove();

const rockPaperScissors = (player1, usersMove) => {
  if (computersMove === usersMove) {
    console.log(`computer chose ${computersMove}`);
    console.log(`user chose ${usersMove}`);
    console.log(`${computersMove} is the same as ${usersMove}, it's a draw!`);
  } else if (computersMove === possibleMoves[0]) {
      if(usersMove === possibleMoves[1]) {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
        console.log(`paper beats rock, user wins!`);
      } else {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
        console.log(`rock beats scissor, computer wins!`)
      };
  } else if (computersMove === possibleMoves[1]) {
      if(usersMove === possibleMoves[0]) {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
        console.log(`paper beats rock, computer wins!`);
      } else {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
        console.log(`scissor beats paper, user wins!`)
      };
  } else if (computersMove === possibleMoves[2]) {
      if(usersMove === possibleMoves[0]) {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
      console.log(`rock beats scissor, user wins!`);
      } else {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
        console.log(`scissor beats paper, computer wins!`)
      };
  };
};

let computersMove = randomMove();
let usersMove = randomMove();
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
rockPaperScissors(computersMove, usersMove);