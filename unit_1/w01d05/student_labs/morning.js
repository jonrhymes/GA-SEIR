//console.log('hello');

//printGreeting
// const printGreeting = (name) => {
//     return `Hello there, ${name}!`
// };
// console.log(printGreeting("Slimer"));

//reverseWordOrder
//try to split the string into an array, reverse the array, then join back into string
// const reverseWordOrder = (emptyString) => {
//     const newArr = emptyString.split(' ');
//     const newArr2 = newArr.reverse();
//     const newString = newArr2.join(' ');
//     return newString;
// };
// console.log(reverseWordOrder("Ishmael me Call"));
// console.log(reverseWordOrder("I use Lâncome on my comb"));

//calculate
// can i use switch statement?
// const calculate = (num1, num2, operation) => {
//     if (operation === "add") {
//         return num1 + num2;
//     } else if (operation === "sub") {
//         return num1 - num2;
//     } else if (operation === "mult") {
//         return num1 * num2;
//     } else if (operation === "div") {
//         return num1 / num2;
//     } else if (operation === "exp") {
//         return Math.pow(num1, num2);
//     } else {
//         console.log('unavailable');
//     };
// };
// console.log(calculate(4, 3, "exp"));

//printConsecutives
// const printConsecutives = (arr) => {
//     //arr.sort();
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] + 1 === arr[i+1] && arr[i+1] 
//             +1 === arr[i+2]) {
//           console.log(arr[i], arr[i+1], arr[i+2]);
//         };
//     };
// };
// printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);


//letterReverse