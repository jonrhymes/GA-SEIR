////////////////
// Space Battle

// USS Nova
// Alien Ship
// Retreat = Quit
// Use pop-up prompts to get user input


// 1. " Earth has been attacked by a horde of aliens! You are the captain of the USS Nova, on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// Prompt for NEXT

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat."

// USS Nova attacks first

// If aliens survive, it attacks you

// If ship is destroyed, you have option to ATTACK or RETREAT. 

// If you retreat, the game is over

// If you destroy all the aliens, you win!

// If you are destroyed, you lose! If hull reaches 0 or less, the ship is destroyed.

// ==================> KEEP THIS <======================

class Ship {
    constructor (name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    // ======================> SAVE THIS <==================
    // attack(enemy) {
    //     if(enemy.hull === 0){
    //         console.log(`${this.name} lost!`);
    //     }else if(Math.random() <= this.accuracy){
    //         enemy.hull -= this.firepower;
    //         console.log(`${enemy.name} got hit!`)
    //         }else{
    //             console.log(`${this.name} missed!`)
    //             }
    // } 
    // attack(enemy) {
    //     if(Math.random() <= this.accuracy) {
    //         enemy.hull -= this.firepower;
    //         console.log(`${enemy.name} got hit!`)
    //     }else if(enemy.hull === 0){
    //         console.log (`${enemy.name} lost!`)
    //     }
    // }
    //
    // =================> KEEP THIS, IT WORKS <==============
    // attack(enemy) {
    //     if(Math.random() <= this.accuracy && enemy.hull > 0) {
    //     enemy.hull -= this.firepower
    //     console.log(`${enemy.name} got hit`)
    //     }else if(enemy.hull <= 0){
    //         console.log(`${enemy.name} exploded!`)
    //     }
    // }
    attack(enemy) {
        if(Math.random() <= this.accuracy) {
        enemy.hull -= this.firepower }
        if(enemy.hull > 0) {
        console.log(`${enemy.name} was hit and has ${enemy.hull} hitopint left!`);
        }else if(enemy.hull <= 0){
        console.log(`${enemy.name} exploded!`);
        }
    }
    destroy (newEnemy) {
        this.fleet.shift(newEnemy);
    }
};

// ================> CHANGE CONSOLE.LOGS TO ALERTS ^^^^^^^

const ussNOVA = new Ship ('USS Nova', 20, 5, 0.7);

class EnemyShip extends Ship {
    constructor (name = `Gattacka Fleet`, hull, firepower, accuracy) {
        super(name, hull, firepower, accuracy);
        this.name = name;
        this.hull = Math.round(Math.random() * (6 - 3)) + 3;
        this.firepower = Math.round(Math.random() * (4 - 2) + 2);
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
};

// ========> Way to make new Enemies

class AlienFactory {
    constructor (fleet) {
        this.fleet = [];
    }
    generateFleet (num) {
        for(let i = 0; i < num; i++){
        const newEnemy = new EnemyShip();
        this.fleet.push(newEnemy);
        }
    }
};

    // attack(enemy) {
    //     if(Math.random() <= this.accuracy) {
    //     enemy.hull -= this.firepower }
    //     if(enemy.hull > 0) {
    //     console.log(`${enemy.name} was hit and has ${enemy.hull} hitpoints left!`);
    //     }else if(enemy.hull <= 0){
    //     console.log(`${enemy.name} exploded!`);
    //     }
    // }

// ==================> Single Ship <==================

const alienShip = new EnemyShip();
console.log(alienShip);

// ==================> Multiple ships <====================

// const alienShips = new AlienFactory();
// alienShips.generateFleet(6);

// const currentShip = alienShips.fleet[0];
// console.log(currentShip)

// ussNOVA.attack(currentShip);
// console.log(currentShip);


// ==================> STRUGGLING WITH GAME <======================

////////
// Game

alert(`Welcome to Space Destroyers!`)

alert(`Earth has been attacked by a horde of aliens! 

You are the captain of the USS Nova, on a mission to destroy every last alien ship.

Battle the aliens as you try to destroy them with your lasers.`);

const input = prompt(`${ussNOVA.name} has a potential threat in it's crosshairs!

Engage? (enter 'Y')
or Retreat? (enter 'N')?`)

////////
/// Game

// !!! Problem: I'm struggling with the game functionality. How does the input affect the outcome and continue running the game without doing a continuous loop? I've set up the multiple aliens, the game options and some prompt, but it doesn't work. 

let gameOn = true;
let userStart = true;

const options = {
    // Y is the engage function
    Y: () => {
        alert(`You have engaged in an attack!`);
        gameOn = true;
    },
    // N "should" end the game
    N: () => {
        alert(`Abandon all hope! USS Nova retreated.`);
        gameOn = false;
    },
    // is incorrect input
    I: () => {
        alert(`That is not an option! Please enter 'Y' or 'N'.`);
    },
};

while(gameOn) {
    if(ussNOVA){
    ussNOVA.attack(alienShip);
    break;
    }if(alienShip){
    alienShip.attack(ussNOVA);
    break;
    }
    userStart != userStart
};

options[input.toUpperCase()] ? options[input.toUpperCase()] : options[i]();


// const battle = () => {
//     if(input === 'Y' && ussNOVA.hull > 0) {
//         alert(`You have engaged in an attack!`)
//         ussNOVA.attack(alienShip);
//     }
// }

// startGame();

// while(gameOn) {
//     if(input === 'Y' && ussNOVA.hull > 0){
//         alert(`You have engaged in an attack!`)
//         ussNOVA.attack(alienShip);
//     }else{
//         gameOn = false;
//     }
// }
// const winCheck = () => {
//     if (ussNOVA.hull > 0) {
//         alert('you have won the game!!!');
//         return false;
//     }

//     if (ussNOVA.hull < 0) {
//         alert('you have quit the game');
//         return false;
//     }

//     return true;
// };
// const winCheck = () => {
//     if(ussNOVA.hull > 0 && alienShip <= 0){
//         alert(`WinCheck message`);
//         return true;
//     }
// };

//     if(ussNOVA){
//         ussNOVA.attack(alienShip);
//     }else{
//         alienShip.attack(ussNOVA);
//     }
//     userStart = !userStart;
//     if(ussNOVA.hull <= 0){
//         console.log(`USS Nova was destroyed. There were no survivors.`)
//         gameOver = false;
//     }
//     if(alienShip.hull <= 0){
//        console.log(`Something happens!`) 
//        gameOn = false;
//     }
// };


// const options = {
        // Y is the engage function
//     Y: () => {
//         gameOn = true;
//         alert(`You have engaged in an attack!`)
//     },
//     N: () => {
//         gameOn = false;
//         console.log(`Abandon all hope! USS Nova retreated.`)
//     },
//     i: () => alert(`That is not an option! Please enter Y or N.`)
// };

//////////////////////
// BROWSER PROMPTS

// alert(`Welcome to Space Destroyers!`)

// alert(`Earth has been attacked by a horde of aliens! 

// You are the captain of the USS Nova, on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.`);

// const input = prompt(`${ussNOVA.name} has a potential threat in it's crosshairs!

// Engage! (enter 'Y')
// or Retreat! (enter 'N')?`)

// // options[input.toUpperCase()] ? options[input.toUpperCase()] : options[i]();

// /////////////
// // Game Logic

// const 

// // const gameStats = {
// //     enemies: 6,
// //     retreat: false,
// // };

// let gameOn = true; 
// // let userStart = true;

// // Game options

// const options = {
        // Y is the engage function
//     Y: () => {
//         gameOn = true;
//         alert(`You have engaged in an attack!`)
//     },
//     N: () => {
//         gameOn = false;
//         console.log(`Abandon all hope! USS Nova retreated.`)
//     },
//     i: () => alert(`That is not an option! Please enter Y or N.`)
// };

// let gameOn = null;

// while (gameOn) {
//     if(ussNOVA){
//     ussNOVA.attack(alienShip);
//     }else{
//         alienShip.attack(ussNOVA);
//     }        
//     if(ussNOVA.hull <= 0){
//         console.log(`USS Nova was destroyed. There were no survivors.`)
//         gameOn = false;
//     }
//     if(alienShip.hull <= 0){
//         console.log(`Something happens!`) 
//         gameOn = false;
//     }
//     // const input = prompt(`${alienShip.name} has your ship in it's crosshairs!

//     // Engage! (enter Y)
//     // or Retreat! (enter N)?`);

//     options[input.toUpperCase()] ? options[input.toUpperCase()] : options[i]();
// };


/////////////
// Game Logic

// const gameStats = {
//     engage: 0,
//     retreat: false,
//     play: true,
// };

// let gameOn = true; 
// let userStart = true;
