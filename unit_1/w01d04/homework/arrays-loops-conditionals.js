////////////////////////////////
// Part I: HTML & CSS
////////////////////////////////
// A: 4 - I feel pretty good about the material, but some extra review would help

////////////////////////////////
// Part II: JavaScript Reps
////////////////////////////////


////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++){
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 2; i <= 200; i+= 2){
    console.log(i);
}


////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0 && i % 5 !== 0){
            console.log("Fizz")
        }else if(i % 3 !== 0 && i % 5 === 0){
                console.log("Buzz")
            }else{
                console.log(i);
    }
}

////////////////////////////////
// Wild Wild Life - If this is a Talking Heads reference, I'm impressed! 
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.

plantee[2] = 5001;
console.log(plantee);

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

wolfy[3] = "Gotham City"
console.log(wolfy);

// 3. Give D'Art a second hometown by adding "Hawkins"

console.log(dart.push("Hawkins"), dart);

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

wolfy[0] = "Gameboy"
console.log(wolfy);


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// console.log(ninjaTurtles);

for(const upp of ninjaTurtles){
    console.log(upp.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log: the index of Titanic
console.log(favMovies.indexOf("Titanic"));

// Note: if you have to add to the array, feel free to add any movie you'd like
console.log(favMovies.sort(), favMovies);
console.log(favMovies.pop(), favMovies);
console.log(favMovies.push("Guardians of the Galaxy"), favMovies);
console.log(favMovies.reverse(), favMovies);
console.log(favMovies.shift(), favMovies);
console.log(favMovies.unshift(), favMovies);
// A: returns 18
console.log(favMovies.indexOf("Django Unchained"));
console.log(favMovies.splice(14, 1, "Avatar"), favMovies);
console.log(favMovies.length);
// console.log(favMovies.slice(Math.ceil(favMovies.length / 2)));
let newFavs = favMovies.slice(Math.ceil(favMovies.length / 2)); // should I use floor or ceil? 

console.log(newFavs);

// console.log(favMovies[19]); // Fast and Furious = undefined

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

console.log(whereIsWaldo.splice(1, 1), whereIsWaldo);
// console.log(whereIsWaldo[1][2]); // Neff check

whereIsWaldo[1][2] = "No One"

console.log(whereIsWaldo); // array check

console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////

const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..." ]

// console.log(kittyTalk[0])
// console.log(kittyTalk[1])
// console.log(kittyTalk[2])

for (let x = 0; x <= 20; x++){
    if (x % 2 === 0){
        console.log(kittyTalk[Math.floor(Math.random() * kittyTalk.length)])
    }else{
        console.log("Love me, pet me! HSSSSSS!");
    }
}

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

console.log(nums.sort());
console.log(nums[Math.floor(nums.length / 2)]);

