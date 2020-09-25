//////////////////////////
//  HeadLibrary
//  Random User Api Link: https://randomuser.me/api/?results=10
//  API Documentation: https://randomuser.me/documentation#format
//////////////////////////
//Psuedo Code:
//Pull Data from API
//Render user data to article element
//Make clicking on a user trigger a click event
//when event trigger user details populate in aside element

// Pulling the Data

// USING AJAX
$.ajax('https://randomuser.me/api/?results=10')

// USING FETCH
// fetch('https://randomuser.me/api/?results=10')
//     .then((initial) => initial.json()) 
    // MUST PUT THIS EXTRA STEP IN TO INITIALIZE. Doesn't need to load any library like JQuery

    // This makes a request and wraps it in a promise.

// USING AXIOS
// axios('https://randomuser.me/api/?results=10')
//     response = response.data;

    .then((response)=> {
        console.log(response) // This makes the promise
        const $userDisplay = $('article')
        const $aside = $('aside div')
        for (user of response.results){
        // creates the user
            const $div = $('<div>').html(`<img src=${user.picture.large}><h3>${user.name.first} ${user.name.last}</h3>`);
    
        // interpolate string with user data to rendering user detail

            const renderString = `<h1>${user.name.first} ${user.name.last}</h1><img src=${user.picture.large}
            <br/>
            <h3>${user.cell}</h3>
            <h3>${user.email}</h3>
            <h3>${user.location.country}</h3>`
            // make user clickable
            $div.on('click', (event)=> {
                // replace html in the div with the renderString
                $aside.html(renderString)
            });
            // append the user
                $userDisplay.append($div);
            }
    })
    .catch((error)=> {
        console.log(error);
    });

