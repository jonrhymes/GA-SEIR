<<<<<<< HEAD
// Create a function that takes a parameter and logs it

// const newFunc = (parameter) => {
//     console.log(parameter);
// }

// Create a second function that logs 'hi'

const sayHi = () => {
    console.log('HI')
}

// Invoke the first function, passing in the second function as a parameter
// You should see a function reference being logged

// newFunc((sayHi));

// Alter the first function so that it invokes its parameter
// If you did these steps correctly, you should get a log of 'hi'

// const newFunc = (parameter) => {
//     sayHi();
//  };

//  newFunc(); // I had to move this down inorder to invoke it. It said "Cannot access 'sayHi' before initialization". Why?!
=======
/////////////
//Callback Drills
////////////

// const myFunc = (func) => {
//     func();
// };

// const sayHi = () => {
//     console.log('hi');
// };

// myFunc(sayHi);
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

// const foo = (param, param2) => {
//     param(param2);
// }

<<<<<<< HEAD
// // const foo = (bar(), 'hi') => {
//     // bar('hi'); = console.log('hi')
// // }

=======
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
// const bar = (param) => {
//     console.log(param);
// }

<<<<<<< HEAD
// foo(bar, 'hi');
=======
// foo(bar, 'hi'); // should print hi
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

// const foo = (param, param2) => {
//     param(param2, 'hello');
// }

// const bar = (param, param2) => {
<<<<<<< HEAD
//     console.log(param, param2);
// }

// foo(bar, 'hi');

// foo = (bar, 'hi') => {
//     bar('hi', 'hello')
// };

// const foo = (param, param2) => {
//     param(param2, 'hello');
// }

// const baz = (param) => {
//     console.log(param.toUpperCase());
// }

// foo(baz, 'hello')

// WORK = 
// const foo = (baz, 'hello') => {
//     baz('hello', 'hello');
// }

// const baz = ('hello') => {
//     console.log('hello'.toUpperCase());
// }

// foo(baz, 'hello')

/////////////////
// Electric Mixer

// const electricMixer = (attachment) => {
//     console.log(`This mixer is now: ` + attachment());
// };

// anonymous function: 
// const electricMixer = () => {
//     console.log()
// }

// electricMixer(() => { // So here, am I invoking the function that invokes another function? 
//     return "spiralizing"; 
// });

// const spiralizer = () => {
//     return "spiralizing";
// }

// const spiralizer = () => {
//     return "spiralizing";
// };
  
//   electricMixer(spiralizer);

// const slicerDicer = () => {
//     return "slicin' and dicin'";
// };
  
// const cakeMaker = () => {
//     return "revolving and icing"
// };

// electricMixer(spiralizer);
// electricMixer(slicerDicer);
// electricMixer(cakeMaker);

//   setTimeout(() => {
//     console.log('hi');
//   }, 2000);

// let counter = 0;

// setInterval(() => {
//     counter ++;
//     console.log(counter);
// }, 1000);


//   setInterval(() => {
//       counter + 1;
//       console.log(counter);
//   }, 1000)

// let str = "Never give your heart to a blockhead";

// console.log(str.split(" ").reverse().join(" "))

// const wordReverse = (str) => {
//     console.log(str.split(" ").reverse().join(" "));
// };

// wordReverse("Never give your heart to a blockhead");

// wordReverse(() => {
// console.log(str.split(" ").reverse().join(" "))
// });

// const repMaster = (param) => {
//     wordReverse(param);
//     console.log(`${param} proves that I am the rep MASTER!`);
// };

// repMaster("Never give your heart to a blockhead", wordReverse);

// wordReverse();

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

const operates = (value) => {
    // console.log(value);
}

const calculate = (num1, num2) => {
    return operates();
}

calculate(operates(add(3,4)));
calculate(operates(subtract(3,4)));
calculate(operates(multiply(3,4)));
calculate(operates(divide(3,4)));

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

// !! Problem: I had trouble making the operates function. I tried several times to get this to run but I couldn't figure it out because it took operates to mean a variable and I wasn't sure how to switch from one operation to another inside the function. I assume we pass operates through calculate.

// 7. Call calculate 4 times, each time using one of the operation functions you wrote

// calculate(add(3,4));
// calculate(subtract(3,4));
// calculate(multiply(3,4));
// calculate(divide(3,4));
=======
//     console.log(param2);
// }

// foo(bar, 'hi'); // thought it would print hi, hello BUT it just prints hello

// const baz = (param) => {
//     console.log(param.toUpperCase());
// } // should print HELLO, BUT it doesnt print anything


/////////////////
//Electric Mixer
/////////////////

// const electricMixer = (attachment) => {
//     console.log(`This mixer is now: ${attachment()}`);
// };

// // 2. electricMixer(() => {
// //     return "spiralizing"
// // });

// const spiralizer = () => {
//     return "spiralizing"
// };

// const slicerDicer = () => {
//     return "slicin' and dicin'";
//   }
  
//   electricMixer(spiralizer);
//   electricMixer(slicerDicer);

//balloon whisk

// const electricMixer = (attachment) => {
//     console.log(`The mixer is now ${attachment()} to make some dalgona coffee`);
// };

// const balloonWhisk = () => {
//     return "whisking away"
// };

// electricMixer(balloonWhisk);


///////////////////
//setInterval and setTimeout
///////////////////

// const myFunc = () => {
//     let x = 1;
//     console.log(x);
//     x +=1;
// };
// setInterval(myFunc, 1000);
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
