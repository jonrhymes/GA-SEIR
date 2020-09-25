<<<<<<< HEAD
//////////////////////////////////////
// Section 1: Programming Fundamentals

// DRY: Don't Repeat Yourself. A software engineer should be consice and precise. Each element of the code should serve an essential role.   

// KISS: Keep It Simple, Stupid. The simpler the software, the cleaner it is to read by both engineer and interfacae, the easier it is to manage and the quicker it runs.

// Avoid creating a YAGNI: You Aren't Going to Need It. To put it metaphorically, when you build a house you stack one brick at a time. It doesn't help to add embellishments before laying down the foundation.

// Do the simplest thing that could possibly work: There's no need for complex mechanisms to power the software when a single function could acheive the same result.

// Don't make me think: At a glance, the code should make sense. It shouldn't take other engineers much to detangle since they will likely be working with you on the same code. 

// Write code for the maintainer: Like many writers, engineers must write for an audience who will read and try to interpret what is written. Write code for posterity. 

// Single responsibility principle: The mission of your code should be evident. Arbitrarily assigning or naming any code will cause confusion. 

// Avoid premature optimization: You can edit yourself to death. Don't nitpick the code because functionality is more important than optimization.

// Separation of concerns: Separation of operations will improve any enhancements.

// I still have an idea that software is complex, and it's certainly been a challenge to comprehend, but what surprised me was the insistence of simplicity. I guess it's because code can become complicated, the more it's tasked to do.

// I'm struggling with keeping things simple. I tend to think of the most needless way to do something and frustrate myself when it doesn't work. 

///////////////////
// Commenting Code

// const f = l => { // First, we declare an arrow function f which takes in l as a parameter, which is 55.
//     let es = 0, p = 0, c = 1, n = 0 // Here, we declare a series of variables: es, p, c, and n. With the exception of c, they're all set to zero. 
//     while (c <= l) { // We run a while loop and inset the condition that while c is less than or equal to l, the loop will run. 1 is less than 55, so it will run until which time it reaches 55. 
//       n = c + p; // Next we set n(0) to be equal to c(1) plus (0) by a math operator, adding what came before to the newer number. 
//       [c, p] = [n, c] // This sets an array equal to another array [1, 0] = [1, 1] 
//       es += (c % 2 === 0) ? c : 0 // Here is a ternary expression that says add c if c is evenly divisible by two (modulus) as it increments from zero, adding the last looped number to it. If the condition is not met, c will become zero if false. C seems to be doing the heavy lifting here as it adds 1 to itself, then to itself again, ad infinitum.
//     }
//     return es // Return pushes up es back into the loop. 
//   } 
//   console.log(f(55)) // Here we invoke the function with the parameter of 55.

// This is the Fibonacci Sequence.

//   const f = l => { 
//     //   (console.log(es));
//     //   console.log(f);
//     //   console.log(l);
//     let es = 0, p = 0, c = 1, n = 0
//     // console.log(c);
//         // (console.log(es));
//         // console.log(n);
//         // console.log(p);
//     while (c <= l) {
//         // console.log(es);
//         console.log(c);
//         // console.log(l);
//         n = c + p;
//         // console.log(es);
//         // console.log(c);
//         // console.log(n);
//         // console.log(p);
//         [c, p] = [n, c]
//         // console.log(es);
//         // console.log(c);
//         // console.log(n);
//         // console.log(p);
//     }
//     // console.log(es);
//     return es
//   }
//   console.log(f(55))
=======
////////////////////
// Common programming principles
////////////////////

// Write a ~1 sentence summary for each one
// Dry - DONT REPEAT YOURSELF; When programming, avoid repetition for maintainability and performance.
// KISS - KEEP IT SIMPLE STUPID; Always try to aim for writing simpler code in order to have fewer bugs and to cut down coding time.
// Avoid creating a YAGNI - YOU ARENT GOING TO NEED IT; Don't start implementing things until you actually need them
// Do the simplest thing that could possibly work - Keep things simple so you don't stress yourself out and there's less room for error
// Don't make me think - If the code seems confusing or requires more thinking to understand, it can probably be more simplified.
// Write code for the maintainer - Make sure your code is not just readable to you. The person/people maintaining your code in the future should know what's going on and not get stressed from it.
// Single responsibility principle - Your code should be broken into modules. A function should do one thing, not many things, because if you were to go back and correct some damage, it'll be easier to fix a smaller problem over a big one. 
// Avoid premature optimization - Unless your code is even able to run, don't jump many steps ahead. Once your code works, then start worrying about efficiency and optimization. 
// Separation of concerns - Organize your code into a modular program, and section off codes that are meant for specific functionality. 
// Which ones surprise you?
// Though I wasn't aware of all these principles, they all make sense. I think the "single responsibility principle" surprises me a little bit. Even before Alex touched on this during class, I thought it was good to have one function doing a whole bunch of things. I see how it can cause problems now though.
// Which one is currently giving you the most struggle?
// Going off from the landscaping homework, I realized I struggle with "avoid premature optimization" because I kept worrying about the end-goal when I didn't even have code that ran yet. Then, I just kept running in confusion. I think that also helped me realize I need more practice pseudocoding. 

//////////////////////////
//Commenting Code
////////////////////////

const f = l => { // declaring a function, f, with parameter of l
    let es = 0, p = 0, c = 1, n = 0 // declaring variables using let because this allows for reassignment on es, p, c, and n. c is the only one with assigned value of 1.
    while (c <= l) { // a while loop in the function definition that says while c is less than or equal to l, run the next code
      n = c + p; // Evaluate the expression c + p first, which is 1, and then reassign the value of n to this
      [c, p] = [n, c] // reassign the variable p to the value of n and reassign the value of c to the value of next. So p = c, and c = n
      es += (c % 2 === 0) ? c : 0 // ternary operator that says if the value of c is an even number, increase the value of es by c. If the value of c is not an number (false), then return the value of es. 
    }
    return es // return the value of evenSum and this is where the function ends.
  }
  
  console.log(f(55)) // print/log to the console the value of when I run function, f,  with an argument of 55. 
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

// const f2 = (limit) => {
//     let evenSum = 0;
//     let previous = 0;
//     let current = 1;
//     while (current <= limit) {
//       let next = current + previous;
//       previous = current;
//       current = next;
//       if (current % 2 === 0) {
//         evenSum += current;
//       }
//     }
//     return evenSum;
//   }
<<<<<<< HEAD
//   console.log(f2(55))

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand? 
// The function should be called fibonnaci. I would also change the names of next, current and previous to reflect numerals, like nextNum or currentNumber.

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2? 
// I would rather start working with f2 because there are more descriptors and it reinforces the principle of simplicity and readability, even though it is technically longer.

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// The colon is crucial, otherwise it returns SyntaxError: Invalid left-hand side in assignment, as it attempts to solve n = c + p [c, p] = [n, c] as a single declaration.
=======
  
  
//   console.log(f2(55))

// 1. In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// the function is finding the sum of the even numbers in the Fibonacci sequence/ Project Euler Problem, so the function can be called findEvenSumOfFibonacci. Current can be changed to currentSum so we know the sum is accumulating and we're not focusing on some current number in the sequence.
// 2. If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// f2, because I had no idea what the letters in f meant without f2.
// 3. Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// No, because Javascript reads line by line anyway and the variables are being changed as you go down the code.

>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
