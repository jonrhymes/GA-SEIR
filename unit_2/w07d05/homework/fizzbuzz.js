// Write a javascript application that logs all numbers from 1 - 100.

function log() {
    for(let num = 1; num <= 100; num++){
    console.log(num)
    }
}

log();

// Or

// let i = 0;
// do {
//     i += 1;
//     console.log(i);
// } while (i < 100)

// If a number is divisible by 3 log "Fizz" instead of the number.

function fizz() {
    for(let num = 1; num <= 100; num++){
        if(num % 3 === 0){
            console.log('Fizz')
        } else {
            console.log(num)
        }
    }
}

fizz();

// If a number is divisible by 5 log "Buzz" instead of the number.

function buzz() {
    let num = 0;
    do{
        num += 1;
        if(num % 5 === 0){
            console.log('Buzz')
        } else {
            console.log(num)
        }
    } while (num < 100)
}

buzz();

// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

function fizzbuzz() {
    for(let num = 0; num <= 100; num++){
        if(num % 3 === 0 && num % 5 === 0) {
            console.log('FizzBuzz')
        } else if(num % 3 === 0) {
            console.log('Fizz')
        } else if(num % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(num)
        }
    }
}

fizzbuzz();