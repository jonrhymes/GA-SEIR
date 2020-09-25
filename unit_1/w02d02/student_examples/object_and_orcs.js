// const sharon = {
//     name: "sharon",
//     friend: {
//         name: "james",
//     friend: { // make an array of objects
//         name: "andy",
//     friends: [{
//         name: "jessica"
//     },]
//         }
//     }
// }

// // !! objects should define a noun

// console.log(sharon.name);
// console.log(sharon.friend.friends.name[0]);

// const arr = [];
// console.dir(arr)

const adventurer = {
    name: "Jon",
    hitpoints: 200,
    power: 30,
    belongings: ["fire sword", "shield", "invisibility"],
    companion: {
        name: "cheesyburger",
        type: "miniature lion",
        companion: {
            name: "bear",
            type: "grizzly",
            belongings: ["vicious bark", "thirst for blood", "loyalty"],
        }
    },
    // !! To created Method (or function) inside of an object, don't use Arrow or colon
    // attack: (enemy) => {
    attack(enemy) {
        enemy.hitpoints = enemy.hitpoints - this.power
        console.log(`I have attacked ${enemy.name} and they now have ${enemy.hitpoints}`)
        if(enemy.hitpoints < 0){
            console.log(`${enemy.name} has been defeated`)
        }
    },
    level: 10
}

// after key value pair of object, you need a comma

// for(let i=0; i <adventurer.belongings.length; i++){
//     console.log(adventurer.belongings[i]);}

// same way to do ^ above
// for(let item of adventurer.belongings){
//     console.log(item)
// }

// console.log(adventurer.companion.type)
// console.log(adventurer.companion.type)
// console.log(adventurer.companion.companion.name)
// console.log(adventurer.companion.companion.belongings[1])


/////////////
// Make two objects communicate with each other through Methods! == function that belongs to an object
////////////

// const adventurer2 = {
//     name: 'Sheila',
//     hitpoints: 250,
//     belongings: ['enchanted sword', 'health potion', 'ibuprofen'],
//     companion: {
//         name: 'Agrippa',
//         type: 'Feline Familiar',
//         companion: {
//             name: 'Neptune',
//             type: 'Creature of the Night'
//         }
//     }
// }

// adventurer.attack(adventurer2)
// adventurer.attack(adventurer2)
// adventurer.attack(adventurer2)

// const foo = {
//     someArray:[1,2,3]
// };

// for(let element of foo.someArray){
//     console.log(element);
// }
// //same as above
// for (let i = 0; i < foo.someArray.length; i++) {
//     console.log(foo.someArray[i]);
// }

// This is THE MATRIX ... turn any table into two dimensional array
// const foo = [
//     ["0,0", "0,1", "0,2"], // row 1
//     ["1,0", "1,1", "1,2"], // row 2
//     ["2,0", "2,1", "2,2"], //dangling commas, won't break code
// ]
// console.log(foo[1][0])

// const foo = [
//     ["title", "date", "info"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"],
// ]

// for(let row of foo) {
//     console.log(row);
//     for(let element of row){
//         console.log(`${element}`);
//     }
// }
// how is JS defining row and element.. ? 

// ^ You'll get this 
// [ 'title', 'date', 'info' ]
// title
// date
// info
// [ '1,0', '1,1', '1,2' ]
// 1,0
// 1,1
// 1,2
// [ '2,0', '2,1', '2,2' ]
// 2,0
// 2,1
// 2,2

// const summonBird = (name) =>{
//     return {
//         name: name,
//         color: 'blue'
//     }
// };

// console.log(summonBird("falcon").color.split("")); 
// // JavaScript evaluates left to right.
// console.log(summonBird("falcon").color.split("")[1]); 
// console.log(summonBird("falcon").name); 

// const createBag = ()=>{
//     return ['apple','banana','pear'];
// };

// // console.log(createBag()[1]);

// // !! Changes strings into two dimensionsal array
// const arr = createBag()

// // arr[0] = arr[0].split("");
// // arr[1] = arr[1].split("");
// // arr[2] = arr[2].split("");

// // console.log(arr)

// for(let element of arr){
//     element = element.split("")
// }
// console.log(arr)

// Anonymous function
// const generateSpell = (spellName) =>{
//     return ()=>{ // anonymous function because it's an empty parentheses
//         console.log(spellName);
//     }
// }

const generateSpell = (spellName) =>{
    return function superfunction() { // anonymous function
        console.log(spellName);
    }
}


generateSpell("fireball!")(); // without the (), it returns the definiton and doesn't invoke it

adventurer.spell = generateSpell("Obliterate")
adventurer.spell();
console.log(adventurer)

// returns: 
// {
//     name: 'Jon',
//     hitpoints: 200,
//     power: 30,
//     belongings: [ 'fire sword', 'shield', 'invisibility' ],
//     companion: {
//       name: 'cheesyburger',
//       type: 'miniature lion',
//       companion: { name: 'bear', type: 'grizzly', belongings: [Array] }
//     },
//     attack: [Function: attack],
//     level: 10,
//     spell: [Function (anonymous)]
//   }