///////////////////////////////
// Promises
//////////////////////////////
// An object with three states (pending, rejected, fulfilled)
// Purpose is to handle asynchronous or time consuming events without blocking the rest of your code.
// Promises are non-blocking so other code will run while the promise is pending
//Chain a .then(callback) function to trigger actions to happen when the promise is fulfilled
//Chain a .catch(callback) function to trigger actions to happen when a promise is rejected

//////////////////////////
//Promise Syntax
//////////////////////////
// const myPromise = new Promise((resolve, reject) => {})
// myPromise.then((result) => {}).catch((error) => {})

// Promises are used when you're not going to get the information right away. It says keep running code while the function resolves

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(false){
            resolve('Hey it worked!')
        }else{
            reject('oh no! It was rejected')
        }
    }, 5000);
})

myPromise
    .then((resolveData)=> { // When the promise succeeds, then any .then will run, otherwis
    console.log(resolveData)
    }).catch((rejectData)=> {  // runs the code when the promise is done in the bad way
    console.log(rejectData)
    })

console.log(myPromise);