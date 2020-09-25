<<<<<<< HEAD
///////////
// Callback : function passed as an argument to another function

// const myFunc = () => {console.log('Hello world')};
// setTimeout(myFunc, 5000);

// setTimeout takes a function as the first argument and then set the number of milliseconds you want to stall before this happens

// setTimeout(() => {
//     console.log('Hello world')
// }, 5000) 
 
// ^ Defines function directly into the function call. Two parameters

// Synchronous is a single thread, one set of instructions run from top-down; one step at a time - JavaScript.
// Asynchronous occurs out of order and runs multiple things.

// setInterval(() => {console.log('Hello world')}, 1000)

// setInterval repeats function at every interval

// callback is the child of the function wrapper

// const parent = (callback) => {
//     callback(); // this is where the function gets run
// }
// const child = () => {console.log("hello world")};
// parent(child);

////////////////////////
// Higher order function : A function that is a Wrapper around other functions. Allows you to break up your logic. Allows ONE thing you've created to do multiple functions. 

// 1. Start with convoluted function and break it up into separate functions

// const fancyText = () => {
//     console.log('===========')
//     console.log('Hello world!')
//     console.log('===========')
=======
////////////////
// Callbacks
///////////////

//A function passed as an argument to another function

// const myFunc = () => {
//     console.log('Hello World');
// };

// setTimeout(myFunc, 5000); // settimeout is a func where you pass in a function, time in milliseconds as the arguments // prints hello world 5 seconds later

// setTimeout(() => {
//     console.log('Hello World')
// }, 5000); // just define the function while being passed as an argument to save time from storing it in a variable

// Synchronus - one step at a time/ single threaded - JS is synchronus, runs the code one line at a time

// Asynchronus - Multiple things, out of order

// setInterval(() => {
//     console.log('hello world')
// }, 1000) // every second, it will say hello world

// const parent = (callback) => {
//     callback()
// } //callback is just parameter for any callback function that will be passed in as argument when we later use the parent function

// const child = () => {
//     console.log('hello world')
// }

// parent(child); // parent function says to say that whatever callback function is being passed as an argument will have its function invoked so when we do parent(child), child function is passed and invoked and thats why hello world prints.

////////////////
//Higher Order Function
///////////////

//A function that is a wrapper around other functions

// const fancyText = () => {
//     console.log('=============');
//     console.log('hello world');
//     console.log('=============');
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
// };

// fancyText();

<<<<<<< HEAD
// ===========
// Hello world!
// ===========

// 2. If you wanted to put "Goodbye world", you need to break it up

// const fancyWrapper = (callback) => {
//     console.log('===========')
//     callback();
//     console.log('===========')
// };
// //  How does the function callback() know to put in fancywrapper? 

// fancyWrapper(() => {
//     console.log('Goodbye world!')
// });
// // ===========
// // Goodbye world!
// // ===========

// fancyWrapper(() => {
//     console.table({name: 'Jon Rhymes', age: 35}); // table is a nice way to lay out data
// });
// ┌─────────┬──────────────┐
// │ (index) │    Values    │
// ├─────────┼──────────────┤
// │  name   │ 'Jon Rhymes' │
// │   age   │      35      │
// └─────────┴──────────────┘

// Must pass functions through other functions. What do you expect to be passed into the function? 

//////////////////////////////
// Higher Order Array Function

// Make two arguments: the array and the callback. 

// Here, we recreate the forEach function below:
// const customForEach = (arr, callback) => { // can call them whatever I want.
//     for(x = 0; x < arr.length; x++){
//         callback(arr[x], x);}
// };

// const myArr = [1,2,3,4,5,6,7,8];

// customForEach(myArr, (value, index) => { // what is the index doing? NOTHING
//     console.log(value);});

// pass in first argument = my array, second argument passes in the callback

// could also do this:
// const logValue = (value, index) => {
//     console.log(value);}; 

// customForEach(myArr, logValue) => { // what is the index doing?
//     console.log(value);});
// myArr = arr, logValue = callback

// Common practice to use the function inside the function. Below:
// customForEach(myArr, function (value, index) {
//     console.log(value;)
// });

// const loopObject = (obj, callback) => {
//     for(key in obj) {
//         callback(key);
//     }
// };

// const myObj = {name: 'Alison', age: 36}

// loopObject(myObj, (key) => {
//     console.log(key, myObj[key]);
// });

///////////////
// Array.forEach

// forEach does not return a value
=======
// const fancyWrapper = (callback) => {
//     console.log('=============');
//     callback();
//     console.log('=============');
// };

// fancyWrapper(() => {
//     console.log('hello world')
// }); //takes a callback function and prints whatever that function is supposed to do in between the equal signs

// fancyWrapper(() => {
//     console.table({name:'Sharon Kim', age: 24})
// }); //console.table is nice for printing out objects in better layouts

//////////////////////
//Higher Order Array Functions
/////////////////////

//Loop over the array but lets you decide what happens in the middle

// const customForEach = (arr, callback) => {
//     for (x = 0; x < arr.length; x++) {
//         callback(arr[x], x)
//     }
// } //the for loop says that each time you loop through the array, it will run that function
// //for each loop

// const myArr = [1,2,3,4,5,6,7,8,9];

//const logValue = (value, index) => {
//     console.log(value);
// };
//customForEach(myArr, logValue);
//OR
// customForEach (myArr, (value, index) => {
//     console.log(value);
// }); // value, index are the parameters because the arguments for this callback function have been defiend in the customforEach function already // index isnt being used this time, its just available to you if you want // prints 1, 2, 3, 4, 5, 6, 7, 8, 9

// const loopObject = (obj, callback) => {
//     for (key in obj) {
//         callback(key)
//     }
// };

// const myObj = {
//     name: 'Sharon Kim',
//     age: 24
// }

// loopObject (myObj, (key) => {
//     console.log(key, myObj[key]);
// })

////////////////////
// array.forEach
///////////////////
// forEach does not return a value, just does the thing
//executes the same code for each element of an array
//quick way to loop over an array; quicker version of a regular for loop
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

// const myArr = [1,2,3,4,5,6,7,8,9];

// myArr.forEach((value, index) => {
<<<<<<< HEAD
//     console.log(`at index ${index} there is the value ${value}`);
// }); 

// The Same thing written below: 
// const logArray = (value, index) => {
//     console.log(`at index ${index} there is the value ${value}`);
// }); 

// myArr.forEach(logArray);

/////////////
// Map :  array.map = return an array made of the return of the callback

// const myArr = [1,2,3,4,5,6,7,8,9];

// 1. create new array that adds 1 to each one

// const addOne = (value, index) => {
//     return value + 1
// }

// const newArray = myArr.map(addOne); // How does this know to make an array? is it because it is setting it to an old array?

// console.log(newArray);

// const nameArray = [
//     {first: "Jon", last: "Rhymes"},
//     {first: "Alison", last: "Thornsberry" },
// ];

// // turn into a new array where the separated items are joined
// const newArray = nameArray.map((value, index) => {
//     return {name: `${value.first} ${value.last}`} // {} returns an object

// BUT! ... when you're returning a value you can't say return [ name ] and force it into an array?? 

//     return {name: value.first + ' ' + value.last} // concatenation
// });

// console.log(newArray);

///////////////
// Array.filter : returns a Boolean, returns items from an array that are true. Evaluates true or false. Filter involves only Booleans. For whatever passes the test.

// const myArr = [1,2,3,4,5,6,7];

// // const filterTest = (value, index) => {
// //     return value > 4;
// // };
// // ^ filters out numbers above 4

// const filterTest = (value, index) => {
//     return value % 2 === 0;
// };
// // ^ filters out only even numbers
// // How do I get only odd numbers? 

// const newArray = myArr.filter(filterTest);

// console.log(newArray);

//////////////
// Array.every : returns true if every element of the array passes the callback test... to see if every number of the array odd or every number is even.
// All or nothing

// const myArr = [2,4,6,8,9];

// const everyCallback = (value, index) => {
//     return value % 2 === 0;
// }

// console.log(myArr.every(everyCallback)) 

// ^ good way to check if every villian's power goes to zero, says battle complete

// console.log(
//     myArr.every((value, index) => {
//     return value % 2 === 0;
//     })
// );


//////////////
// array.Some : The opposite of every. Returns true if at least ONE element passes the test. 
=======
//     console.log(`at index ${index} there is the value ${value}`)
// }); //if you dont need one of these arguments, then just use underscore _ in place of it
// //OR
// const logArray = (value, index) => {
//     console.log(`at index ${index} there is the value ${value}`)
// });
// myArr.forEach(logArray); // prints at index 0 there is the value 1, and so forth


//////////////////
// array.map
//////////////////

// Returns an array made of the return of the callback
// map returns a new array, without mutating the original one, otherwise use the forEach if you dont care about making those alterations

// const myArr = [1,2,3,4,5,6,7,8,9];

// const addOne = (value, index) => {
//     return value + 1;
// }
// const newArr = myArr.map(addOne);
// console.log(newArr);

// const myArr = [1,2,3,4,5];
// const newArr = myArr.map((value, index) => {
//     return value *10;
// })
// console.log(newArr);

// const nameArr = [
//     {first: 'Sharon', last: 'Kim'},
//     {first: 'Shawn', last: 'Mendes'}
// ];

// const newArr = nameArr.map((value, index) => {
//     return {name: `${value.first} ${value.last}`}
// }) //returns in object form
// console.log(newArr);


////////////
//array.filter
///////////
// Filter returns an array for each item in which the callback returns true
//the callback function when using this .filter() method should return a boolean of true or false. So if you wanted it to be true, itd print just the true values

//const myArr = [1,2,3,4,5,6,7,8,9];

// const filterTest = (value, index) => {
//     return value > 4; //if true, print, if false, skip the number
// }
//const newArr = myArr.filter(filterTest);
//console.log(newArr); // prints an array [5,6,7,8,9,] because the other numbers are not bigger than 4, so theyre false. We only print the true ones 

// const filterCallback = (value, index) => {
//     return value % 2 === 0;
// }
// const newArr = myArr.filter(filterCallback); 
// console.log(newArr); // prints array of just even numbers


//////////////////
// array.every
/////////////////

//returns true if every element of the passes the callbacks test
//everything in the array has to pass the test

// const myArr = [2,4,6,8];

// const everyCallback = (value, index) => {
//     return value % 2 === 0
// };
// console.log(myArr.every(everyCallback)); //prints true, but lets say you had a 9 in the array, it would print false because every single element in the array is not even because of the 9


/////////////////
// array.some
////////////////

//returns true if at least one element passes the callback test
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

// const myArr = [2,4,6,8,9];

// const someCallback = (value, index) => {
<<<<<<< HEAD
//     return value % 2 !== 0; // find out ODD numbers
// }

// console.log(myArr.some(someCallback))
// ^ returns true because at least one value is odd;

///////////////
// array.find : Returns the value of the FIRST element that passes the callback test. The loop stops and gives the first number back to you. 
=======
//     return value % 2 !== 0
// };

// console.log(myArr.some(someCallback)); // returns true because 9 is odd, doesnt matter if the other elements are even because at least one element just has to pass the test. 9 passed the test


//////////////////
// array.find and array.findIndex
/////////////////
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

// find -> returns the value of the first element that passes the callback test
// findIndex -> returns the index of the first element that passes the callback test

<<<<<<< HEAD
// Use .filter if you want 3 AND 5

// myArr2 = [2,3,4,5,6]

// const findOdd = (value, index) => {
//     return value % 2 !== 0;
// }

// console.log(myArr2.find(findOdd))
// // ^ returns the value

// console.log(myArr2.findIndex(findOdd));
// ^ finds the index

///////////
// Chaining : You can chain a function of the value type that the prior function returns

// const myArr = [1,2,3,4]

// console.log(
//     myArr.map((value, index) => {
//     return value + 1;
//     // }) returns [2,3,4,5]
//     }).filter((value, index) => { // returns array
//         return value % 2 === 0; // returns [2,4]
//     }).find((value, index) => {
//         return value % 2 === 0; // returns 2... now you can't go further past this
//     })
// );


///////////////
// array.reduce : allows you to loop over the array to do a cumulative operation. The outlier.

// const myArr = [1,2,3,4,5,6,7,8,9]

// the difference is Accumulator is the starting value
// const reduceCallback = (accumulator, value, index) => 
//     // console.log(accumulator + value)
//     {return accumulator + value;
// }

// console.log(myArr.reduce(reduceCallback, 0));
// ... 0 is the initiliazing number

// count how many even numbers are in the array
// const reduceCallback = (accumulator, value, index) => {
//     if(value % 2 === 0){
//         return accumulator + 1;
//     }else{
//         return accumulator;
//     }
// }

// to count odd numbers in an array, filter out and .length
// console.log(myArr.reduce(reduceCallback, 0));
// console.log(myArr.reduce(reduceCallback, 0));

// console.log(myArr.filter(value => value % 2 === 0).length);

// EXPLAINER: 0 is first passed into the accumulator, first number in the array gets passed into the first loop as the value. If it doesn't pass the test, then then 1 is added.  

=======
// const myArr = [2,3,4,5,6];

// const findOdd = (value, index) => {
//     return value % 2 !== 0
// };
// console.log(myArr.find(findOdd)); // prints 3 because its the first element in the array that is odd. it stops there, 5 passes the test but it stops at the first element that is true. if you want to print both 3 and 5, then use array.filter()

// console.log(myArr.findIndex(findOdd)); // prints the index of 3, which is 1, so it prints 1


/////////////////
// Chaining Array Functions
////////////////

// you can chain a function of a value type that the prior function returns

// const myArr = [1,2,3,4];

// // console.log(myArr.map((value, index) => {
// //     return value + 1
// // })); // gives me an array with everything +1

// console.log(myArr.map((value, index) => {
//     return value + 1
// }).filter((value, index) => {
//     return value % 2 === 0 //prints [2,4]
// }).find((value, index) => {
//     return value % 2 === 0 //prints 2
// })); 


///////////////
// reduce
///////////////

// it allows you to loop over the array do a cumulative operation

const myArr = [1,2,3,4,5,6,7,8,9];

// const reduceCallback = (accumulator, value, index) => {
//     return accumulator + value;
// } //accumulator is your current element plus the next value and that new sum becomes the accumulator and the next element becomes the next value 


// console.log(myArr.reduce(reduceCallback,0));
// prints 45 because you 1 + 2 first where 1 is the accumulator and value is 2, then together thats 3. Then 3 becomes accumulator which is added to next value which is 3. so now you have 6 and then add 6 +4 and so on.

const reduceCallback = (accumulator, value, index) => {
    if (value % 2 === 0) {
        return accumulator + 1
    } else {
        return accumulator // which is initially 0
    }
} // adds 1 if its even, and doesnt do anything if its odd

console.log(myArr.reduce(reduceCallback, 0)); // 0 is the initial value you start off with
console.log(myArr.filter((value) => value % 2 === 0).length);
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
