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

////////////////////////////////////////
//Populating Data to the Dom with Functions and Loops
////////////////////////////////////////

// Function to add one song to the unpicked list
const addToUnpicked = (data) => {
    const $newDiv = $('<div>'); // create the div
    $newDiv.text(`${data.song} by ${data.artist}`);
    $('.unpicked main').append($newDiv); // append the div
};

// addToUnpicked(songs[0]);

// Add ALL the songs, so you need a loop

const addAllSongsToUnpicked = (allSongs) => {
    for(song of songs){
        addToUnpicked(song);
    } // loops over songs array and adds each one to DOM
};

addAllSongsToUnpicked(songs);

////////////////////////////////////////
// Creating Events and Moving Data
/////////////////////////////////////

const moveUnpickedToPicked = (event) => {
    $theDiv = $(event.target) // turns what we clicked on to a jQuery object. This listener is added here. 
    $('.picked main').append($theDiv); 
    ///// adds the removePicked listener
    const removePicked = (event) => {
        $(event.target).remove();
    };
    $theDiv.on('click', removePicked);
};

$('.unpicked main div').on('click', moveUnpickedToPicked) // what are we listening for? a click. On the click, run the function. This is basically a callback.

// const $myDivs = $('.unpicked main div'); // array of divs under unpicked

// $myDivs.each(function(){
//     this.on('click', moveUnpickedToPicked)
// }) // loop through the array of divs and add the click listener to each one

///////////
// Exercise

// Make an event listener that is triggered when you click on a div under picked that then removes that div from DOM. 
