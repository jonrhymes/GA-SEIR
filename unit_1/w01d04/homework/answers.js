////////////////////////////////
// Easy Going
////////////////////////////////
for (let a = 1; a <=20; a++) {
    console.log(a);
};

////////////////////////////////
// Get Even
////////////////////////////////
for (let b = 0; b <= 200; b+=2) {
    console.log(b);
};

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let c = 1; c <= 100; c++) {
    if (c % 3 === 0 && c % 5 === 0) {
        console.log('FizzBuzz');
    } else if (c % 3 === 0) {
        console.log('Fizz');
    } else if (c % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(c);
    }
};

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001;
console.log(plantee);
wolfy[3] = "Gotham City";
console.log(wolfy);
dart.push("Hawkins");
console.log(dart);
wolfy.shift();
wolfy.unshift('Gameboy');
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (const caps of ninjTurtles) {
    console.log(caps.toUpperCase());
};

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'));
favMovies.sort();
//console.log(favMovies);
favMovies.pop();
//console.log(favMovies);
favMovies.push('Guardians of the Galaxy');
favMovies.reverse();
//console.log(favMovies);
favMovies.shift();
favMovies.unshift(); 
console.log(favMovies);// returns nothing changed because there was no argument passed in it, I don't know what I should be adding to the array as the first element
//console.log(favMovies.indexOf('Django Unchained')); // logs 14
favMovies.splice(14, 1, 'Avatar');
console.log(favMovies);
//console.log(favMovies.length); //logs 18
const halfMovies = favMovies.slice(favMovies.length/2,favMovies.length-1);
console.log(halfMovies);
console.log(favMovies.indexOf('Fast and Furious')); //When did we get rid of this? I can only think of getting rid of Guardians of the Galaxy.


////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);
//console.log(whereIsWaldo.indexOf('Neff'));
//console.log(whereIsWaldo[1][2]); //found Neff
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);


//////////////////////////////
//Excited Kitten
//////////////////////////////
const attention = "Love me, pet me! HSSSSSS!"
const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
let meow = Math.floor(Math.random()*3);
for (let i = 1; i <=20; i++) {
    if (i % 2 === 0) {
        console.log(kittyTalk[meow]);
    } else {
        console.log(attention);
    }
};


//////////////////////////////
//Find the Median
//////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort();
console.log(Math.floor(nums.length/2)); // 12
console.log(nums[12]);