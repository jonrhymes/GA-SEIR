/////////////////////////
// Our Data
/////////////////////////

const songs = [
    {song: 'Who Loves the Sun', artist: 'Lou Reed'},
    {song: 'Blister in the Sun', artist: 'Violent Femmes'},
    {song: 'Walkin\' on the Sun', artist: 'Smash Mouth'},
    {song: 'Here Comes the Sun', artist: 'The Beatles'},
    {song: 'Black Hole Sun', artist: 'Soundgarden'},
    {song: 'House of the Rising Sun', artist: 'The Animals'},
    {song: 'Walking on Sunshine', artist: 'Katrina & the Waves'},
    {song: 'Soak Up the Sun', artist: 'Sheryl Crow'},
    {song: 'People of the Sun', artist: 'Rage Against the Machine'},
    {song: 'You Are the Sunshine of My Life', artist: 'Stevie Wonder'},
];

const picked = [];

////////////////////////////////////////
//Populating Data to the Dom with Functions and Loops
////////////////////////////////////////

const addToUnpicked = (value, index) => {
    const div = document.createElement('div'); // this line creates the div
    div.innerText = `${value.song} by ${value.artist}`; // Add text to div
    document.querySelector('.unpicked main').appendChild(div);

    // ADD EVENT LISTENER
    div.addEventListener('click', (event) => {
        picked.push(...songs.splice(index, 1)) // splices from songs and pushes to Picked. Added Spread Operator because it returns an array.
        // console.log(songs);
        // console.log(picked);
        buildLists();
    })
};

// addToUnpicked(songs[0], 0);

const addToPicked = (value, index) => {
    const div = document.createElement('div'); // this line creates the div
    div.innerText = `${value.song} by ${value.artist}`; // Add text to div
    document.querySelector('.picked main').appendChild(div);
    // ADD EVENT LISTENER
    div.addEventListener('click', (event) => {
        songs.push(...picked.splice(index, 1)) // splices from songs and pushes to Picked. Added Spread Operator because it returns an array.
        // console.log(songs);
        // console.log(picked);
        buildLists();
        })
};

// addToPicked(songs[0], 0);

const buildLists = () => {
    const pickDiv = document.querySelector('.picked main') // storing picked main block
    const unpickDiv = document.querySelector('.unpicked main') // storing the unpicked main block
    pickDiv.innerHTML = ''; // clearing the picked div
    unpickDiv.innerHTML = ''; // clearing the upicked div
// =============> What is happening here? How is it simultaneously emptying out and filling it? 
    songs.forEach(addToUnpicked) // builds the unpicked list
    picked.forEach(addToPicked) // builds the picked list
}

buildLists();

// setInterval(() => {
//     picked.push(songs.pop()); // removes item from songs, adds to picked array
//     buildLists(); // this rebuilds the DOM
// }, 3000);

// Runs ONCE ...
// setTimeout(() => {
//     picked.push(songs.pop()); // removes item from songs, adds to picked array
//     buildLists(); // this rebuilds the DOM
// }, 3000);

////////////////
// Bonus: Web Component

// Creating our own custom HTML tags!~

// This class defines the behavior of the html tag
class HelloWorld extends HTMLElement { // HAS TO extend HTMLElement
    constructor(){ // boilerplate
        super(); // boilerplate
        this.innerHTML = '<h1>Hello World</h1>';
    }
}

// this links a custom tag with the class
window.customElements.define('hello-world', HelloWorld); // must have the hyphen or "kebab"