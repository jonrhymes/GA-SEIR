// findWordFrequencies function
const findWordFrequencies = (sentence) => {
    // TAKE A STRING, ADD IT TO AN ARRAY, RETURN AN OBJECT

// initialize empty object to return at the end
const wordFrequencies = {}
// split the sentence into an array of its words
// lowercase all the words

const wordsArray = sentence.toLowerCase().split(' ')
// loop through the array of words
wordsArray.forEach((word) => {
    // if the current word is a key inside our wordFrequencies object, increment its value by 1, if not, make it one
    // console.log(wordFrequencies[word])
    wordFrequencies[word] 
        ? wordFrequencies[word]++ 
        : wordFrequencies[word]= 1
})
    return wordFrequencies

}

console.log(findWordFrequencies("I love love love lamp love"))

// highest frequency
const findHighestFrequency = (wordFrequencies) => {
    // define empty variable to use as counters
    let highestValue = 0
    let highestWords = {}
    // loop through the wordFrequencies object
    for(let word in wordFrequencies) {
        // if the current word's value > highestValue, set highestValue = current word's value, otherwise nothing
        wordFrequencies[word] > highestValue
        ? highestValue = wordFrequencies[word]
        : null
    }
    // loop through the wordFrequencies object again
    for(let word in wordFrequencies) {
        // if the current word's value is equal to the highestValue, set it as a key-value pair inside the highestWords object otherwise nothing
        wordFrequencies[word] === highestValue
        ? highestWords[word] = highestValue
        : null
    }
    return highestWords
}


console.log(findWordFrequencies("The quick quick brown fox jumps over the lazy dog"))
console.log(findHighestFrequency(findWordFrequencies("The quick quick brown fox jumps over the lazy dog")))



// string variable
// const string = "I love lamp";

// console.log(string.length)


// const browserType = "mOzIlLa";
// // console.log(browserType.slice(3, 6))

// browserType.toLowerCase();

// console.log(browserType.toUpperCase())

// console.log(browserType.length)
// console.log(browserType[browserType.length - 1]) 

// console.log(browserType.indexOf('vanilla'))

// if(browserType.indexOf('mozilla') !== -1){
//     console.log('yes')
// }



// function split(string){
//     const words = string.split(" ")
//     return words;
// }

// console.log(split(string))

// function findWordFrequencies(words){
// // create empty object
// const myObj = {};
// // loop through letters

// // split the words into array
// // console.log(words)

// myObj.forEach(function (key) {
//     // console.log(myObj[key])
//     if (myObj.hasOwnProperty(key)) {
//         myObj[key]++;
//     } else {
//         myObj[key] = 1;
//     }
//     });
//     return myObj;

// }



// for(let i = 0; i < words.length; i++) {

//     const myObj = {};
//     if (words[i + 1] != words[i]){
//         // assign 1 to the word when it appears once
//         words[i] = 1;
//         console.log(words)
//         // console.log(words[i])
//     } else {
//         return words[i];
//     }

//         // if one word appears twice
//     // if(words[i + 1] === words[i]){

//     //     console.log(words[i])
//     // }
//     }
// }

// db.bounties.insert(
//     {
//       name: 'Sadie',
//       wantedFor : 'Jumping on the bed',
//       client : 'Alison the Conqueror',
//       reward : 3000,
//       ship: 'HomeBase',
//       hunters :['Snakes', 'Squirrels', 'Birds'],
//       captured: false
//     }
//     )



