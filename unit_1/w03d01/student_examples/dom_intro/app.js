<<<<<<< HEAD
console.log('stranger things are coming!')

document.querySelector('h1').innerText = "Welcome to the Upside Down"

const image = document.querySelector('img'); 
// made a variable here to so we can change it

console.log(image)

image.style.display = 'none'; /* removes the image from the site */
=======
console.log('stranger things are coming');

document.querySelector('h1').innerText = "Welcome to the Upside Down"

const image = document.querySelector('img')

console.log(image)

image.style.display = 'none'; // wont show the image anymore on the page
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

console.log('image was gone');

image.style.display = 'block';

image.style.filter = 'grayscale(100%)';

image.style.width = '95%';

<<<<<<< HEAD
image.style.filter = ''; 
// unset the filter by creating an empty string

const eggos = document.createElement('img')
console.log(eggos)

// won't see it because you haven't added it to the page. must APPEND it to an element pre-existing on the page.

document.querySelector('.container').appendChild(eggos)

// give image source tag, 1st parameter is the elemnt you want to set and the 2nd parameter is the source. 1st is the KEY, second is the VALUE like OOM

eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg')
=======
image.style.filter = ''; //make it equal to nothing to unset it, will use its default

const eggos = document.createElement('img') // the type of element you want to create on the page is the thing you pass in the parantheses
console.log(eggos) // print it to the console, but we still didnt add the element to the page, we just CREATED it

document.querySelector('.container').appendChild(eggos) // no quotes in eggos since we're referring to the variable; adding this element to the container class; in the inspect -> elements tab, you'll see that the <img> tag was added but theres no actual image showing on the left since we didnt provide a src

eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg') // SetAttribute is a method we call on the eggos object and we are going to give it a src attribute as the first parameter, and the second one is the actual value so the link. So 'src' is the key, and the link is the value if we view it as an object
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b

eggos.style.width = '100%';

eggos.remove();

const lis = document.querySelectorAll('li')

console.log(lis)

<<<<<<< HEAD
lis[0].innerText = 'Demo Dog Hangout'
lis[0].innerHTML = '<h1>Demo Dog Hangout</h1>'

document.querySelectorAll('li')[4].style.color = 'hotpink'

document.querySelectorAll('li')[3].remove();
=======
lis[0].innerText = "1234567"
document.querySelectorAll('li')[4].style.color = 'hotpink';
// OR lis[4].style.color = 'blue';

document.querySelectorAll('li')[3].remove()
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
