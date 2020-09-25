// make vowelCheck function that accepts a word
vowelCheck = (word) => {
    // takes the word and splits it by letter
    const myArr = word.split('')
    // console.log(myArr)
    // loop through the array to break down by letter
    myArr.forEach((letter) => {
        console.log(letter)
        let result;
        result = letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"
        return result;
    })
    // initialize the vowels to check against
    const vowels = ['a', 'e', 'i', 'o', 'u'];
        //     // loop through the words
        //     vowels.forEach((letter) => {
        // if(letter === arrLetter) {
        // console.log(true)
        // }
    
        // check[letter] = vowels[letter]
        // return 
        // console.log(letter)
        // if the current word equals a key inside the array, in
    // })

    // returns a Boolean
}

console.log(vowelCheck('hello'))