<<<<<<< HEAD
// const quotes = ["First quote", "Second quote", "Third quote"]

// // Random

// const randomThings = [1, 10, "Hello", true]
// // // access the first element of the array
// // console.log(randomThings[0]);
// randomThings[2] = "World"
// console.log(randomThings);

// We've Got Class

const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"]
// console.log(ourClass[2]);

ourClass[2] = "Octocat"
// console.log(ourClass);

const new1 = "Cloud City"
console.log(ourClass);

console.log(ourClass.push(new1), ourClass);

const myArray = [5 ,10 ,500, 20]

console.log(myArray.push("Egon"), myArray);

const newArr = myArray;

console.log(newArr.pop(), newArr);

console.log(newArr.unshift("Bob Marley"), newArr);

console.log(newArr.splice(0,1), newArr);

console.log(newArr.reverse());

// Biggie Smalls
// Write an if..else statement that iterates over the myArray array declared above:

if (i = 0; i )

// console.log little number if the number is entered is less than 100

// If the number entered is 100 or more, alert big number.

// Monkey in the Middle
// Write an if...else if...else statement:

// console.log little number if the number entered is less than 5.

// If the number entered is more than 10, log big number.

// Otherwise, console.log "monkey".

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

// 1. Kristyn's closet
//   console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// 2. Remove from closet and save it to a variable

// console.log(kristynsCloset.shift(), kristynsCloset);

// kristynsCloset.splice(5, 0, "raybans");

// console.log(kristynsCloset)

// kristynsCloset.splice(4, 1, "stained knit hat");
// console.log(kristynsCloset)


  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  // 5. access first element in Thom's shirts
  console.log(thomsCloset[0][0])

  // 6. access one item from Thom's pants
  console.log(thomsCloset[1][2])

  // 7. accessories 
=======
//Easy Does It
// const myArr = ['Hello', 'Yay', 'Bye'];


//Random
// const randomThings = [1, 10, "Hello", true];
// console.log(randomThings[0]);
// randomThings[2] = "World";
// console.log(randomThings);


//We've Got Class
// const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"]
// console.log(ourClass[2]);
// ourClass[2] = "Octocat";
// console.log(ourClass);
// console.log(ourClass.push('Cloud City'), ourClass);


//Mix It Up
// const myArray = [5 ,10 ,500, 20]
// myArray.push("Egon");
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.unshift("Bob Marley");
// console.log(myArray);
// myArray.shift();
// console.log(myArray);
// console.log(myArray.reverse());


//Biggie Smalls
// const myArray = [5 ,10 ,500, 20];
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] < 100) {
//         console.log('little number');
//     } else {
//         console.log('big number');
//     }
// };


//Monkey in the Middle
// const myArray = [5 ,10 ,500, 20];
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] < 5) {
//         console.log("little number");
//     } else if (myArray[i] > 10) {
//         console.log("big number");
//     } else {
//         console.log("monkey");
//     }
// };


//What's in Your Closet?
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

// 1. console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// 2. const kristynShoe = kristynsCloset.shift();
// console.log(kristynShoe);
// console.log(kristynsCloset);

// 3. 
// const last = kristynsCloset.pop();
// console.log(kristynsCloset);
// kristynsCloset.push('raybans', last);
// console.log(kristynsCloset);
//kristynsClose.splice(5,0, 'raybans');
//console.log(kristynsCloset);

// 4. 
// kristynsCloset[5]= 'stained knit hat';
// console.log(kristynsCloset);

// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//5. console.log(thomsCloset[0][0]);
//6. console.log(thomsCloset[1][1]);
//7. console.log(thomsCloset[2][2]);
//8. 
//  const top = thomsCloset[0][0];
//  const bottom = thomsCloset[1][1];
//  const acc = thomsCloset[2][2];
//  console.log(`Thom is looking fierce in a ${top}, ${bottom}, and ${acc}!`);
//9. 
// thomsCloset[1][2] = "Footie Pajamas";
// console.log(thomsCloset);

//Hungry For More
// const twoDArray = [
//     [9,8,7],
//     [6,5,4],
//     [3,2,1],
//   ];

// console.log(twoDArray.sort());
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
