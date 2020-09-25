//// !!! Overall: There were a number of problems. Please see below;

// console.log("test")

alert('Welcome to The Lawnmower Man!')

let money = 0;
let tool = ["Teeth", "Rusty Scissors", "Push Lawnmower", "Battery-Powered Lawnmower", "Starving Students"]

// !! Problem: I realized I have to include cost of the items
// let cost = [5, 25, 250, 500]

// const user = {
//     money: 0,
//     tools: ["Teeth", "Scissors"]
// };

let input = prompt([`1. Work\n2. Buy a tool\n\nMoney: $` + money + `\nTool: ` + tool[0]])

// !! Problem: The tool will need to be iterated over. Also, every time I presee OK, no matter the input, the game continues.

// With teeth, mow lawn for $1 as many times
while(money < 5) {
    money += 1; 
    prompt([`1. Work\n2. Buy a tool\n\nMoney: $` + money + `\nTool: ` + tool[0]])
}

// At $5, you can buy a pair of rusty scissors
// With scissors, mow lawn for $5 as many times
while(money >= 5 && money < 25) {
    money += 5;
    prompt([`1. Work\n2. Buy a tool\n\nMoney: $` + money + `\nTool: ` + tool[1]])
}

// !! Problem: The money should reset to zero if I buy a tool & if I don't have enough money, it should alert that I cannot buy a tool 

// At $25, buy a lawnmower
// With a push lawnmower, mow lawn for $50 as many times
while(money >= 25 && money < 250) {
    money += 50;
    prompt([`1. Work\n2. Buy a tool\n\nMoney: $` + money + `\nTool: ` + tool[2]])
}

// At $250, buy a battery-powered lawnmower
// With battery-powered lawnmower, mow lawn for $100 as many times
while(money >= 250 && money < 500) {
    money += 100;
    prompt([`1. Work\n2. Buy a tool\n\nMoney: $` + money + `\nTool: ` + tool[3]])
}

// At $500, hire a team
// With team, mow lawn for $250 as many times
while(money >= 500 && money < 1000) {
    money += 250;
    prompt([`1. Work\n2. Buy a tool\n\nMoney: $` + money + `\nTool: ` + tool[3]])
}

// !! Problem: I can reach 1075 with a Battery-lawnmower and not get the alert. 


// Win game if you have a team and $1000, then
// send a message saying "You've won the House and Gardening Game!"
while(money > 1000) {
    alert(`You've won the game!`)
}

// !! Problem: I need to create an alert function that interprets what tool I have and what money I have left and determines if I have enough to buy or I must continue to work.

// !! Problem: I wanted to create this function below but in order for the program to run, I have to comment it out.

// let cost = 5

// const buyTool = (cost) => {
//     if(money >= cost){
//         money +=;
//         }else{
//     alert([`You need more money!`]);
// }


switch(input){
    case 1:
    // doWork();
    // console.log("Hello");
    // Make a function that adds money
    break;
    case 2:
    // buyTool() => {
    //     money +=;
    // }
    // Make a function that chooses a tool 
    // buyTool();
    // console.log("Goodbye");
    break;
    default: null;
    break;
}





