// Sourced from stack overflow: https://stackoverflow.com/questions/18619785/counting-frequency-of-characters-in-a-string-using-javascript
// I realize it doesn't give back in the value you wanted it.
// My failed attempts are below.

function maxChar(string) {
    const frequency = {}
    for(let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    return frequency;

}

console.log(maxChar("apple 1231111"))



// function maxChar(string) {
//      let value = 0;
//      let max = '''
//     for(let i = 0; i < string.length; i++) {
//         let character = string.key[i];
//         console.log(key)
//     }
// }
            // console.log(string)
    // for(let item in string) {
    //     // console.log(string[item])
    //     string[item] = value
    //     console.log(string[item])
    //     string[item]++

    // }
//     }
// }

// console.log(maxChar("abcccccccd"))
