// console.log('hello world')

const $body = $('body');
const $div = $('<div>').text('Add random image').attr('class', 'square').css('background-color', 'plum');
$body.append($div);

const cards = [
    'https://www.trustedtarot.com/img/cards/the-fool.png',
    'https://www.trustedtarot.com/img/cards/the-magician.png',
    'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
    'https://www.trustedtarot.com/img/cards/the-empress.png',
    'https://www.trustedtarot.com/img/cards/the-emperor.png',
    'https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'https://www.trustedtarot.com/img/cards/the-chariot.png',
    'https://www.trustedtarot.com/img/cards/strength.png',
    'https://www.trustedtarot.com/img/cards/the-hermit.png',
    'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
    'https://www.trustedtarot.com/img/cards/justice.png',
    'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
    'https://www.trustedtarot.com/img/cards/death.png',
    'https://www.trustedtarot.com/img/cards/temperance.png',
    'https://www.trustedtarot.com/img/cards/the-tower.png',
    'https://www.trustedtarot.com/img/cards/the-moon.png'
];

// console.log(cards[0]);

// =======> RANDOM CARD LOGIC
// console.log(cards[Math.floor(Math.random() * cards.length)]);
// console.log(cards.length)

const randomCard = () => {
    return cards[Math.floor(Math.random() * cards.length)];
};

// console.log(randomCard());

const addCard = () => {
    const $img = $('<img>');
    $img.attr('src', randomCard());
    $body.append($img)
};

$('.square').click(addCard);