<<<<<<< HEAD
////////////////////
// Math Object (Rounding)
///////////////////

// console.log(console);
// console.log(Math); // Object [Math] {} = "prototype"

// let num = 16.07 // float = decimal

// let num = 16.7

// console.log(Math.round(num)); // rounds down normally

// console.log(Math.ceil(num)); // auto rounds up always up

// console.log(Math.floor(num)); // auto rounds down

///////////////////
// Math Object (Random Numbers)
//////////////////

// console.log(Math.random()); // Must put parenthesis to invoke it, or cast the magical spell - This will be a number between 0 and 1. Will not execute an integer.

// console.log(Math.floor(Math.random() * 2)); // Random number generator - must have floor // might have to be 10 or more

// console.log(Math.max(1,2,3,4,5,6,7,8)) // Gives the highest number in the pass thru

// console.log(Math.min(7,8,9,10));

/////////////////
// Other Math
//////////////
=======
/////////////////
//Math Object (Rounding)
////////////////

// console.log(console);
// console.log(Math);

// let num = 16.07;

// console.log(Math.round(num)); // rounds normally
// console.log(Math.ceil(num)); // auto rounds up
// console.log(Math.floor(num)); // auto rounds down


//////////////
//Math Object (Random Numbers)
//////////////

//console.log(Math.floor(Math.random()*10)); // generates random rounded number from 0-10

////////////////
//Other Math
////////////////
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

// let one = 1;
// let two = 2;
// let three = 3;

<<<<<<< HEAD
// console.log(Math.max(one, two, three));

// console.log(Math.min(one, two, three));

// let myArr = [1,2,3,4,5,6,7,8,9]

// console.log(Math.max(myArr)); // Not a number NaN, it's an array

// console.log(Math.min(...myArr)); // Uses the Spread Operator (. . .) to lift up the numbers out of the array

// Math.abs() - if negative, makes it positive

////////////////
// Ternary Operator review = a mini IF statement
///////////////

// sytnax = expression ? what happens if it's true : what happens if it's false

// false ? console.log(true) : console.log(false) // logs as false
// true ? console.log(true) : console.log(false) // logs as true // comparison with two components
// anything other than the 6 false values: NaN, null, empty string " " , meaning false is true - falsiness


/////////////////
// Do... While... Loop
////////////////

// let x = 15;

// do {
//     console.log(x);
//     x--;
// } while (x > 0);
=======
// console.log(Math.max(one, two, three)); // 3
// console.log(Math.min(one, two, three)); // 1

// let myArr = [1,2,3,4,5,6,7,8];

// console.log(Math.max(...myArr));
// console.log(Math.min(...myArr));


//////////////////
// Ternary Operator Review
///////////////////

// expression ? true : false

//'dog' ? console.log(true) : console.log(false); // prints true


////////////////
//Do..While..
///////////////

//Run it at least once, then check if it's true or false
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

// let x = 100;

// do {
//     console.log(x);
<<<<<<< HEAD
//     x--;
// } while (x > 100); // this runs only once although it's false. it still executes. Use this when you want the loop to run at least once.

// x = 0;

// do {
//     console.log('Hello')
// } while (x !== 0)
=======
//     x--
// } while (x > 0); //Prints 100-1 descending

// let x = 100;

// do {
//     console.log(x);
//     x--
// } while (x > 100); //Just prints 100 because of the do part, but the while loop doesnt work cause 100 is not greater than 100
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

// let x = 100;

// do {
<<<<<<< HEAD
//     if (x % 2 !== 0){
//         console.log(x);
//     // why don't we put the decrement here?
//     }
//     x--; 
// } while (x > 0)


////////////////////
// Revisit Destructuring and The Rest Operator
///////////////////

// const myArr = [1,2]

// const one = myArr[0];

// const two = myArr[1];

// console.log(one, two); // Verbose syntax

// Always use "=" for Destructuring

// const myArr = [1,2]

// const [one, two, three = 0] = myArr; // adding another array - three = 0 is the default because there is no third array in the first const myArr

// console.log(one, two, three);

/////////////////
// The Rest Operator - iterate over separate arrays 
///////////////

// const myArr = [1,2,3];

// const [one, ...theRest] = myArr; // you can call "theRest" anything you want

// console.log(one, theRest);

// const myArr = [1,2,3, 7, "test"];

// const [one, ...cheese] = myArr; // you can call "theRest" anything you want

// console.log(one, cheese);

// const myObj = {
//     name: "Jon",
//     age: 35,
//     location: "Florida",
//     otherItems: ["1, 2", 4]
// };

// const { name, ...theRest } = myObj;

// console.log(name, theRest);


///////////////
// Revisit Split and Join
//////////////

// SPLIT ...
// let myString = "Hello World"

// console.log(myString.split(""));
// console.log(myString.split(" "));
// console.log(myString.split("h"));

// JOIN ...

// const myArr = ["hello", "world"];

// console.log(myArr.join());
// console.log(myArr.join(""));
// console.log(myArr.join(" "));

///////////////
// eval : evaluates a string and runs it in javascript
//////////////

// eval(`console.log('hello')`);

// const num1 = 5;
// const num2 = 7;
// const operator = '+'
// let result; // assigns it as an empty bucket

// eval(`result = ${num1} ${operator} ${num2}`);

// console.log(result);

// eval(`var result = ${num1} ${operator} ${num2}`);

// console.log(result); // var also works inside without declaring it first


/////////////////
// Sets : collections with only unique items
////////////////

// const myArr = [1,1,1,2,2,2,3,3,3]
// // new = make a new whatever it is

// const mySet = new Set(myArr);
// console.log(mySet); // = Set(3) { 1, 2, 3 } = makes a new object of the Set(3)

// const newArr = [...mySet]
// console.log(newArr);

// const noDupeArray = [...new Set(myArr)]; // removes dupes from array
// console.log(noDupeArray);


// ///////////////////
// // Multi-Dimensional Arrays : Array inside of an array
// //////////////////

// const mArr = [1,2,3,4,5,[6,7,[8,9]],[10,11]];
// console.log(...mArr);

// console.log(mArr[5][2][1]); // log 9: 5th array, 2nd array, 0 = first of the array

// console.log(mArr[6][0]); // this will log 10
// console.log(mArr[5][2][0]); // this logs 8

/////////////////
// Getting the last and middle element of an array
////////////////

// const myArr = [1,2,3,4,5,6,7,8,9];

// console.log(myArr[myArr.length - 1]); // get last element

// console.log(myArr[Math.floor((myArr.length / 2))]); // get middle element

// console.log(myArr.length);


//////////////////
// Array Methods: (indexOf, push, pop, shift, unshift, reverse, slice, splice, sort)
/////////////////

// const myArr = [1,2,3,4,5,6,7,8];
// const myArr2 = ["Sally", "Jesse", "Raphael"];

//// indexOf : must be primitive value, which means Booleans, numbers and strings

// console.log(myArr.indexOf(5)); // return the index of value 5, has to be an exact match
// console.log(myArr2.indexOf("Jesse"));

//// Push and Pop : Push adds, pop takes away from the BACK of the array

// console.log(myArr.pop(), myArr);
// ^ Pop Removes last item and returns it

// console.log(myArr.push(9), myArr);
// ^ Push Adds new item to the end of the array and returns new length of array

// 8 [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]  = Why is the 8 outside of it? Why is it giving me back 8? 

///// SHIFT and UNSHIFT : Shift adds to the FRONT of the array

// console.log(myArr.shift(), myArr);
// ^ Removes first item and returns it

// console.log(myArr.unshift(0), myArr);
// ^ Adds something to front of the array and the returns the new length of the array

/// POP and SHIFT do not need a number - keep the parentheses empty
/// PUSH and UNSHIFT allows you to sub in a new number

// console.log(myArr.reverse(), myArr);
// ^ Reverses the array permenantly

////// SLICE and SPLICE
/////////////////
//// Slice: 

const myArr = [1,2,3,4,5,6,7,8];
console.log(myArr.slice(1,3), myArr); // made a copy of the array with elements from starting but not including ending index, does not alter (or mutate) the original array
// console.log(myArr.slice(3,7), myArr);
// console.log(myArr.slice(6,7), myArr);
// console.log(myArr.slice(0,7), myArr);

//////////////
//// Splice : 

// removes elements from an array, start cutting from here, then remove this many items (in this case 3). Begins cutting at the specified index and returns the removed elements in an Array.

// console.log(myArr.splice(2,3), myArr); // this alters the original array


///////////
/// Sort: 

// const myArr = [1,4,2,8,3,9,8,5,7];

// console.log(myArr.sort()); // Orders the array

// const myStr = ["Zebra", "Delta", "Adam"];
// console.log(myStr.sort()); // Sorts things alphabetically

/// NOTE: you can chain functions together. The first function has to return something the second function can use. 
// console.log(myArr.sort().reverse());


/////////////
// Reference vs. Value 

/// Primitives: Strings, Numbers, Booleans are passed by value
=======
//     if (x % 2 !== 0) {
//         console.log(x)
//     }
//     x--;
// } while (x > 0); // prints only the odd numbers

///////////////
//Revisit Destructuring and The Rest Operator
////////////////

//Destructuring- Break down a collection of data into variables

// const myArr = [1,2];

// // const one = myArr[0];
// // const two = myArr[1];

// const [one, two, three = 0] = myArr // Take the first thing in myArr and store in the variable one, do the same for 2 and two, and since there is no 3, we defined three and gave it a default value of 0.

// console.log(one, two, three);

// const myArr = [1,2,3];

// const [one, ...theRest] = myArr;

// console.log(one, theRest); //prints 1 because its in its own variable, and theRest is still left as an array. The three dots look like the spread operator but its theRest operator here. The variable doesnt have be called theRest, it can be cheese or anything else.

// const myObj = {name: 'Sharon Kim', age: 24, height: 5.7};

// const {name, ...theRest} = myObj // break apart myObj and store it in name and theRest

// console.log(name, theRest); //Prints Sharon Kim because its been stored in the variable and now you are just calling that variable and printing its value. Then the rest in the object, but still within the curly brackets, is printed


///////////////////////
// revisit Split and Join
///////////////////////

// let myString = 'Hello World';

// console.log(myString.split('')); // empty string means it breaks it by each letter
// console.log(myString.split(' ')); // any time there is a space, it will break it up there

// let date = '7/8/20';
// console.log(date.split('/')); // splits it by the slash in the date 

// const myArray = ['Hello', 'World'];

// console.log(myArray.join()); // when you dont specify a divider, it just assumes to use a commma because it used to be an array
// console.log(myArray.join('')); //empty string means no space so the array turns into a string without spacing or dividing
// console.log(myArray.join(' ')); // the array turns into a string that is separated by spacing because the string with a space says to separate the things in the array with a space when printed as a string using the join function


///////////////
//eval
//////////////

//eval('console.log("hello")');
// eval passes a string as a javascript expression

// const num1 = 5;

// const num2 = 7;

// const operator = '+';

// let result;

// eval(`result = ${num1} ${operator} ${num2}`); // we declared result variable outside of this function first because of scoping issues
// console.log(result);

//////////////
//Sets
/////////////

//sets are used to remove duplicates
//sets are collections with only unique items

// const myArr = [1,1,1,1,2,2,2,2,2,3,3,3,3,3];

// // const mySet = new Set(myArr)
// // console.log(mySet); // prints Set(3) {1,2,3} created new object from a set from myArr

// // const newArr = [...mySet]; // spread the stuff inside to make it print into an array when you console log it
// // console.log(newArr);

// const noDupeArray = [...new Set(myArr)]; //sets a new array from your array and takes out the dupes, and then it spreads everything in your array out for the new array
// console.log(noDupeArray);

/////////////
//MultiDimensional Arrays
/////////////

//An array inside of an array

// const mArray = [1, 2, 3, 4, 5, [6, 7, [8, 9]], [10, 11]];
// console.log(mArray[5][2][1]); // log 9
// console.log(mArray[6][0]); // log 10
// console.log(mArray[5][2][0]); // log 8


//////////////
//Getting the last and middle element of an array
//////////////

// const myArr = [1,2,3,4,5,6,7,8,9];

// console.log(myArr[myArr.length-1]); // get last element because the index is the arrays length but -1 since arrays are zero based index

// console.log(myArr[Math.floor(myArr.length/2)]); // to get middle element- take the arrays length and divide by 2 and then math floor it so it rounds to 4 and myArr[4] = 5 so 5 is the middle number!


///////////
//Array Methods indexOf, push, pop, shift, unshift, reverse, slice, splice, sort
/////////////


// const myArr = [1,2,3,4,5,6,7,8];

///indexOf

// console.log(myArr.indexOf(5)); // return the index of value 5

//Push and Pop
//pop removes last item and returns it
//push adds an item to the end of the array and returns new length of array

// console.log(myArr.pop(), myArr); //side effect of pop is that it returns the last element and also takes it out of the array, mutating it. Doesnt hold argument.

// console.log(myArr.push(9), myArr); //push returns the length of the array after pushing something new to the end of the array. The array is mutated. Pass whatever value you want to add as the argument. 

//Shift and Unshift

// console.log(myArr.shift(), myArr); // removes first item and returns it. Array is mutated and no longer has its original first item.

// console.log(myArr.unshift(0), myArr); // add something to the front of the array and then return the new length of the array

// Reverse

// console.log(myArr.reverse(), myArr); // reverses the array

//Slice and Splice

//slice does not mutate the array; gives subset of array
//splice mutates the array

// console.log(myArr.slice(1,3), myArr); //creates a new array with the elements from the starting to but not including the ending index, does not mutate original array. so it should print elements with index 1 and 2, not 3. 
//slice(inclusive,exclusive)

//splice
//start cutting from here and cut this many things and then give them back to me

// console.log(myArr.splice(2,3), myArr); // begin cutting at the specific index and remove the number of elements specified in the next given number. return the removed elements in an array.

//Sort

// const myArr = [1,4,2,8,3,8,5,7];

// console.log(myArr.sort().reverse()); //reverse will reverse order the sorted array, so make sure the first one returns an array that the reverse() can work on


//////////////////
//Reference vs Value
/////////////////

//Primitives: Strings, Numers, Booleans are passed by value
//Just passes copy of the value
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

// let num1 = 5;
// let num2 = num1;
// num1 = 6;
<<<<<<< HEAD
// console.log(num1, num2); // num2 didn't also change because its value is still num1

////// Collections: Objects, Arrays, Sets are passed by reference. Array is not data, it's technically an Address

// let arr1 = [1];
// let arr2 = arr1;
// arr1[0] = 5;
// console.log(arr1, arr2); 

///// 

// let arr1 = [7];
// let arr2 = [...arr1]; // Use spread operator to lift the number out of the array. This is how you can copy an array
// arr1[0] = 5;
// console.log(arr1, arr2); 
=======

// console.log(num1, num2); //prints 6 5

// //collections: Objects, Arrays, Sets are passed by reference

// let arr1 = [1];
// let arr2 = [...arr1]; // everything thats in that array, save it in the new array arr2
// arr1[0] = 5;
// console.log(arr1, arr2);
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
