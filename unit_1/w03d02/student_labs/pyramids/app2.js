const $body = $('body')
// $body.append($triangle)

const addOne = () => {
    const $triangle = $('<div>').addClass('triangle')
    $body.append($triangle)
}

// $body.append($triangle)

const generatePyramid = (row) => {
    for (let i = 1; i <= row; i++) {
    addOne(i)
    }
};

generatePyramid(16);

// !! Problem: I'm not able to get the rows to push the number to the next row.