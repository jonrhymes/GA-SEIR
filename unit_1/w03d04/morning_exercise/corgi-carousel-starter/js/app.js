// console.log('corgi carousel connected to app.js!');

// counter variable to keep track of the current image

$(() => {
    let currentImgIndex = 0

    const numOfImages = $('.carousel-images').children().length - 1
    // console.log(numOfImages)
    
    $('.next').on('click', () => {
        // console.log('next button works')
        // hide the current image
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    
    if(currentImgIndex < numOfImages) {
    // increment counter by 1
        currentImgIndex++
    }else{
        currentImgIndex = 0
    }
    
    // currentImgIndex < numOfImages ? currentImgIndex++ : currentImgIndex = 0 // COULD ALSO USE THE Ternary statement ^^^^^^^

        // show next image
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
    }) 

    // Previous button
    $('.previous').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        
        // if you want to decrement, else, reset
    if(currentImgIndex > 0) {
        currentImgIndex--
    }else{
        currentImgIndex = numOfImages

    // currentImgIndex > numOfImages ? currentImgIndex-- : currentImgIndex = 0 // COULD ALSO USE THE Ternary statement ^^^^^^^    

    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
    })
});