// const express = require('express')
// // just write express, the name, here

// // Require it ^ , then Create it >

// const app = express()
// // Run express

// const anagrams = require('./anagram.js')
// // use the file path

// const path = require('path')

// // request (req) is when user asks for something, response (res) is what the server responds with
// // app.get('/', (req, res) => {
// //     res.send({message: "You're super awesome"})
// // })

// /*const runanagram = (string1, string2) => {
//     return anagrams(string1, string2)
// }*/

// app.get('/anagrams/:string1/:string2', (req, res) => {
//     // colon : is a parameter
//     // console.log(req.params.string1)
//     // console.log(req.params.string2)

//     console.log(`:string1 becomes ${req.params.string1}`)
//     console.log(`:string2 becomes ${req.params.string2}`)
//     console.log(req.params)
//     console.log(anagrams)

//     res.send(anagrams(req.params.string1, req.params.string2))
// });

// app.get('/add/:num1/:num2', (req, res) => {
//     const num1 = parseInt(req.params.num1, 10)
//     const num2 = parseInt(req.params.num2, 10)
//     const ans = num1 + num2
//     res.send({
//         ans: ans
//     })
// })

// app.get('/sayHello', (req, res) => {
//     res.send('Hello from Express')
// })




// app.get('/', (req, res) => {
//     // res.sendFile('./index.html')
//     // const thing = "YAY"
//     // res.send(`<h1>HELLOWORLD ${thing}<h1>`)
//     // res.sendFile('index.html', {root: path.join(__dirname)})

// })

// app.listen(3000, () => {
//     console.log("I made a server")
// })

