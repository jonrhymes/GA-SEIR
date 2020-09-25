<<<<<<< HEAD
// console.log('hello')

/////////////////////////////////
// Selecting Elements with Jquery


// document.querySelector('body')... becomes... <- Plain vanilla equivalent
// const $body = $('body');

=======
// console.log('hello');
// everything in Jquery is done with the $

////////////////
// Selecting Elements with JQuery
////////////////

// jQuery window onload function $(() => {} ) dollar sign function with a callback inside of it
// document.querySelector('body') <-- Plain Vanilla Equivalent to $('body') (not using  a library; the default) same as below
// const $body = ('body');
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
// console.log($body);

// $(() => {
//     const $body = $('body');

//     console.log($body);
<<<<<<< HEAD
//     console.log(document.querySelector('body'));
// });

const $divs = $('div')
const $divId = $('#cheese')
const $divClass = $('.cheese')

console.log($divs, $divId, $divClass)

$divs.eq(0).text('this is the first div'); //divs[0].innerText = 'this is the first div' // Selects the FIRST div // Select something from an array
$divId.text('Hello world'); // divId.innerText = 'Hello world'
$divClass.html('<h1>Goodbye world</h1>'); // divClass.innerHTML = 'Goodbye world'

///////////////////////////////
// Creating and Adding Elements

const $h1 = $('<h1>'); // document.createElementId('h1') // To make something new, use the carrots

console.log($h1);

$h1.text('I\'m the h1 you created!')

$divs.eq(3).append($h1) // divs[3].appendChild(h1)

$('body').append($('<div>').text('This is the new div')); // ALL on one line
// and it adds to the last of the children

$('body').prepend($('<div>').text('This is the new div')); // Adds to the first of the children

$('div').eq(0).remove(); // grab the array of divs, and removing the first one, which the div we just prepend.

// DON'T FORGET THE CARROTS! < > 

$('body').empty(); // removes all the children of whatever element you chose

/////////////
// Excercise - Create div inside body and inside that div create an h1 that says "I did the exercise"

// $('body').append($('<div>').append($('<h1>').text('I did the exercise')));

// select the body
$body = $('body')
// create our div and h1
$exDiv = $('<div>')
$exh1 = $('<h1>').text('I did the exercise')
// append my elements
$body.append($exDiv);
$exDiv.append($exh1);


///////////////////
// CSS and Styling

// $exh1.css('color', 'orange'); // sets CSS property Color to Orange for the h1

$exh1.addClass('test'); // adds class 'test' to the h1

$exh1.removeClass('test') // removes the class with the property 'test'

$exh1.attr('id', 'test') // set src on an image tag, set any attribute

// $exh1.hide(5000); // hide

// $exh1.show(1000); // show

const $img = $('<img>').attr('src', 'https://media.comicbook.com/2018/07/thanos-grimace-cosplay-1119672-1280x0.jpeg');
=======
//     document.querySelector('body')
// });

// add defer in the script tags
// const $body = $('body');

//     console.log($body);
//     console.log(document.querySelector('body'));


const $divs = $('div'); //document.querySelector('div')
const $divId = $('#cheese'); //document.querySelector('#cheese')
const $divClass = $('.cheese'); //document.querySelector('.cheese')

// console.log($divs, $divId, $divClass);

$divs.eq(0).text('this is the first div') //divs[0].innerText = 'this if the first div'
$divId.text('Hello World') // divId.innerText = 'Hello World' ;grab the text of the div or if you type something in it, change the text to whatever you typed
$divClass.html('<h1>Goodbye World</h1>') // divClass.innerHTML = '<h1>Goodbye World</h1>'


////////////////////
// Creating and Adding Elements
///////////////////

// $('<>')

const $h1 = $('<h1>') // document.createElement('h1')

$h1.text('I am the h1 you created')

$divs.eq(3).append($h1) //divs[3].appendChild(h1)

// $('body').append($('<div>').text('This is the new div')) // append to the body a new div that has the text "this is the new div" ;appending to the children of the body // document.querySelector('body').appendChild(document.createElement('div').innerText= "this is the new div")

$('body').prepend($('<div>').text('This is the new div')) // prepend adds element as first child, append adds element as last child

$('div').eq(0).remove() // grabbing the array of divs and removing the first one, which is the div we just prepended

$('body').empty(); // removes all the children of the body or whatever element you select


//////////////
// Exercise
//////////////
// Create a Div inside body, and inside that div create an h1 that says "I did the exercise"

// My solution
// const $div = $('<div>')
// $('body').append($div)
// $('div').append($('<h1>').text('I did the exercise'));

// Instructor's solution

// select the body
$body = $('body')
//create our div and h1
$exDiv = $('<div>')
$exH1 = $('<h1>').text("I did the exercise")
// append the elements
$body.append($exDiv)
$exDiv.append($exH1); // can technically put these 2 lines of code into 1 line but not good practice


//////////////////
// CSS and Styling
//////////////////
// .css(propety, value)


// $exH1.css('color', 'orange') // sets CSS property Color to Orange for the h1

$exH1.addClass('test') // adds class 'test' to the h1

$exH1.removeClass('test'); // remove the 'test' class

$exH1.attr('id', 'test'); // add an id with a value of 'test'

$exH1.hide(5000) // changes display: to none; adding value 5000  makes it disappear really slowly!

$exH1.show();

const $img = $('<img>').attr('src', 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');

$body.append($img);
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
