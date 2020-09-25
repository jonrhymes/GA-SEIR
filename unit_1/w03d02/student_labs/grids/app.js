// console.log('hello')

const $body = $('body');
const $div = $('<div>');
// // console.log($body)
// const $divBox = $('div').attr('class', 'fixed');
// // console.log($divBox)
// const $divRow = $('<div>').attr('class', 'row');
// // $body.append($divRow);
// const $divRed = $('<div>').attr('class', 'red');
// // $divRow.append($divRed)
// const $divBlack = $('<div>').attr('class', 'black');
// // $divRow.append($divBlack);

// const $body = $('body')
// const $div = $('<div>')

const addOne = () => {
    const $divRow = $('<div>').attr('class', 'row');
    const $divRed = $('<div>').attr('class', 'red');
    const $divBlack = $('<div>').attr('class', 'black');
    // const $divBox = $('<div>').attr('class', 'fixed');
    const $square = $divRow.append($divRed).append($divBlack)
    $body.append($square);
}

const makeDivs = (num) => {
    for(let i = 0; i < num; i++){
    addOne(i)
    }
};

// console.log(makeDivs(64));

makeDivs(64);

// !! Problem: I'm unable to make the rows sit close together. UGH!




// SCRATCH WORK BELOW ======
// const $divfirstRow = $divBox.append($divRow).append($divRed).append($divBlack);

// $body.append($divRed).append($divBlack)

// console.log($divfirstRow);

// const makeDivs = (num) => {
//     for(let i = 0; i < num; i++){
//         num * $divRow;  
//         $body.append()
//     }
// };

// makeDivs(64);




// const makeDivs = (num) => {
//     for(let i = 0; i < num; i++){
//         num * $divRow;
//         console.log($divRow)
//         // num * $body.append(($divRow.append($divRed).append($divBlack)))
//     }
// }

// makeDivs(64);


// function makeDivs(num){
//     for(let i = 0; i < num; i++){
//         return num 
//         // console.log(num);
//     $body.append(($divRow.append($divRed).append($divBlack))) * num;
//     }
// };

// console.log(makeDivs(64));