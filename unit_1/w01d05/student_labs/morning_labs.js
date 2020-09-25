// The Problems
// printGreeting

const printGreeting = (name) => {
    console.log("Hello there, " + name + "!");
}

console.log(printGreeting("Slimer"));

// Can't get this:

// const reverseWordOrder = () => {
//     const text = '';
//     console.log(string.reverse())
//     // console.log(str.);
// }

// console.log(reverseWordOrder("Hello"));

// reverseWordOrder

const reverseWordOrder = (str) => {
    console.log(str);
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWordOrder("Ishmael me Call"));







// calculate

// const calculate = (num1, num2, operation) => {
//     if(operation == "add"){
//         // return num1 + num2;
//         console.log(num1 + num2)
//     }else if(operation == "exp"){
//         console.log(Math.pow(num1, num2));
//     }
// }

// calculate(5, 5, "exp");

// const calculate = 



    //     console.log(num1 + num2); // we should use Return here, but I can only get this to work by asking it to console.log 
    // }else if(operation == "sub"){
    //         return num1 - num2;
    //     }else if(operation === "mult"){
    //         return num1 * num2; 
    //     }
    // } 

    // math.pow()




// const printConsecutives = () => {

// }

// const sortFunc = (num) => {
//     console.log(printConsecutives.sort())
// }

// printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);