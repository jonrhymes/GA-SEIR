console.log('Oh hey, I remember something like this')
console.log($) // this is how you check if JQuery is activated.

// $() // Step one! Do this first

// $(() => {}) // Callback function. Our function is our parameter.

/* $(()=> {

})
*/

/* $(()=> {
// place the body of your code
})
*/

const handOfCards = [];

$(() => {
    const $card = $('.card').on('click', (event)=> {
        console.log(event.currentTarget);

        // turns this into a JQuery object
        const $element = $(event.currentTarget)
        $element.toggleClass('card-back');
        playHand($element);
    })
}) // Clicks on one at a time because you're selecting currentTarget


// check if cards are matches
const playHand = (element) => {
    // if handOfCards has 2 cards that we can try to match

    // push the current card into the handOfCards array
    if(handOfCards.length >= 2){
        // console.log('checking', handOfCards)
        checkHand(handOfCards)
    }else{
        console.log('adding to', handOfCards)
        // handOfCards.push($(event.currentTarget).children().eq(1).text())
         handOfCards.push(element.children().eq(1).text())
         if(handOfCards.length === 2){
             playHand(element)
         }
    }
};

const checkHand = (hand) => {
    console.log('Ok I will check your cards', hand)

    if(hand[0] === hand[1]){
        $('body').append(`<h2>The ${hand[0]} matches ${hand[1]} </h2>`)
    }else{
        $('body').append(`<h2>The ${hand[0]} does not match the ${hand[1]} </h2>`)
    }
    // delete hand[0] // DELETE operator only works on an OBJECT , not an ARRAY
    // delete hand[1]
    // console.log(hand);
    while(hand.length > 0){
        hand.shift();
    }
    const $cards = $('.card').attr('card-back')
}




// const Obj = {
//     abe: 'polk',
//     emma: 'hall',
//     sheila: 'kelley',
// }
// delete Obj.abe

// console.log(Obj)

