// const nonConsecutive = (arr) => {
//     // console.log(arr[0])
//     for(i = 0; i < arr.length - 1; i++) {
//         if(arr[i] < arr[i + 1]){
//             console.log(null)
//         } else {
//             console.log(arr[i])
//         }
//     }
// }

// nonConsecutive([1, 2, 9, 3, 4])

const abbreviate = (arg) => {

    const splitArg = arg.split(" ")
    console.log(splitArg)
    for(let i = 0; i < splitArg.length; i++) {
        // let eachWord = splitArg[i]
        // console.log(eachWord)
        let firstlet = splitArg[i].slice(0, 1).join(" ")
        console.log(firstlet)
    }
} 

abbreviate("constant repetition alignment proximity")