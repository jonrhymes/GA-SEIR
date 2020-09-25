// Calculate the Cube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num) => {
    return num * num * num
}
console.log(calculateCube(5));
// Expected Output => 125

// Is a Vowel?
// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

/// FIGURE THIS OUT! 
// const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]

// const isAVowel = () => {
//     if(isAVowel[i] == vowels[i] true){
//         console.log("true")
//     }else{
//         console.log("false")
//     }
// }

function isAVowel(n) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; 
    for(let i = 0; i <= vowels.length; i++){
        if(n === vowels[i]){
            return true;
        }else{ 
            return false;
        }
    }
}
console.log(isAVowel('e'))

// // console.log(isAVowel("a"));
// // Expected Output => true



// Print Longest Word
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = () => {
    Array.length
}

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
// Expected Output => "Peanutbutter"
