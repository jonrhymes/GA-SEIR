// console.log('hello')
// console.log($)
// for(let index = 0; index < (Math.random() * (data.length - 10) + 10); index++){
// console.log(Math.floor(Math.random() * (data.length - 90)))
// console.log(Math.min(Math.max(parseInt(data.length), 1), 10))


// !! Problems... I can get an input value from the use, but I cannot use the input value to limit the number of results. Secondly, I'm unable to link the button to a class that will toggle and reveal the result, it just appears on screen at the same time as the button. I can't get results to stay under 10 because of the way I structured the random value of the index because I wanted a random return of the array. So I tried to put 10 divs in the html to limit that, but it didn't work.


$(()=> {
    $.ajax({
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
        type: "GET",
        data: {
            "$limit" : 1000,
        }
    })
    .then(function(data) {      
        // for(let index = 0; index < (Math.floor(Math.random() * data.length - 10) + 10); index++){
            // console.log(data)
        $('.manhattan').on('click', (borough)=> {
            
            const inputValue = $('input').val();
            // console.log(inputValue) 
            // console.log("Manhattan clicked!")
                for(let index = 0; index <= (Math.random() * (data.length - 10) + 10); index++){

// !! Problem: I can't limit the number of results to what the input value is. I'm guessing that the index should be less than a ternary expression that evaluates to whatever the inputValue is, or else equals 10... like inputValue ? inputValue : 10; 

                    // console.log(item.agency)
                    if(data[index].agency === 'NYPD' && data[index].borough === 'MANHATTAN'){
    
                        const $complaints = $('.complaints')
                        console.log('Manhattan works!')
                        $complaints.append(`<div>${data[index].descriptor}</div>`)

                        const $consequences = $('.consequences')
                        $consequences.append(`<button class="hidden">What did the police do?</button>`)

                            $consequences.append(`<div>${data[index].resolution_description}</div>`).addClass('display', 'none').toggleClass('display', 'inline')

                            // $('.hidden').on('click', (index)=> {
                            //     const $reveal = $('.hidden').toggleClass('reveal')

                            //     $reveal.append(`<div>${data[index].resolution_description}</div>`)
                            // })
                        
                        // append(`<div>${data[index].resolution_description}</div>`)
                        // $consequences.append(`<div>${data[index].resolution_description}</div>`).show()

// !! Problem: There should be a way to toggle the class to reveal the hidden data

                    }else{
                        console.log("do nothing!")
                    }
                } 
        })

        $('.brooklyn').on('click', (borough)=> {

                for(let index = 0; index <= (Math.random() * (data.length - 10) + 10); index++){
                    console.log("Brooklyn clicked!")
                        if(data[index].agency === 'NYPD' && data[index].borough === 'BROOKLYN'){
    
                    const $complaints = $('.complaints')
                    console.log('Manhattan works!')
                    $complaints.append(`<div>${data[index].descriptor}</div>`)

                    const $consequences = $('.consequences')
                    $consequences.append(`<button class="hidden">What did the police do?</button>`)

                            $consequences.append(`<div>${data[index].resolution_description}</div>`)

                    }else{
                        console.log("do nothing!")
                    }
                }
        })

        $('.queens').on('click', (borough)=> {
            console.log("Queens clicked!")
            for(let index = 0; index <= (Math.random() * (data.length - 10) + 10); index++){
                
                if(data[index].agency === 'NYPD' && data[index].borough === 'QUEENS'){

                    const $complaints = $('.complaints')
                        console.log('Manhattan works!')
                        $complaints.append(`<div>${data[index].descriptor}</div>`)

                        const $consequences = $('.consequences')
                        $consequences.append(`<button class="hidden">What did the police do?</button>`)

                            $consequences.append(`<div>${data[index].resolution_description}</div>`)

                    }else{
                        console.log("do nothing!")
                    }

                }
        })

        $('.bronx').on('click', (borough)=> {
            console.log("Bronx clicked!")
            for(let index = 0; index <= (Math.random() * (data.length - 10) + 10); index++){
                
                if(data[index].agency === 'NYPD' && data[index].borough === 'BRONX'){

                    const $complaints = $('.complaints')
                        console.log('Manhattan works!')
                        $complaints.append(`<div>${data[index].descriptor}</div>`)

                        const $consequences = $('.consequences')
                        $consequences.append(`<button class="hidden">What did the police do?</button>`)

                            $consequences.append(`<div>${data[index].resolution_description}</div>`)

                    }else{
                        console.log("do nothing!")
                    }
                }
        })

        $('.staten-island').on('click', (borough)=> {
            console.log("Staten Island clicked!")
            for(let index = 0; index <= (Math.random() * (data.length - 10) + 10); index++){
                if(data[index].agency === 'NYPD' && data[index].borough === 'STATEN ISLAND'){

                    const $complaints = $('.complaints')
                        $complaints.append(`<div>${data[index].descriptor}</div>`)

                        const $consequences = $('.consequences')
                        $consequences.append(`<button class="hidden">What did the police do?</button>`)

                            $consequences.append(`<div>${data[index].resolution_description}</div>`)

                    }else{
                        console.log("do nothing!")

                }
            }
        })
        
        // }
        // // console.log(data)
        // for(let index = 0; index < (Math.floor(Math.random() * data.length - 10) + 10); index++){
        //     // console.log(Math.floor(Math.random() * data.length))
        //     if(data[index].agency === 'NYPD'){
        //         // console.log(data[index])
        //         // console.log('it works')
        //         const $div = $('<div>')
        //         const $complaints = $('.complaints')
        //         const $consequences = $('.consequences')
        //         // console.log(`${data[index].descriptor}`)
        //         $complaints.append($div).append(`${data[index].descriptor}`).push($div)
        //         // console.log(data);
        //         $consequences.append(`${data[index].resolution_description}`)
        //         // console.log(`${data[0].resolution_description}`)
            // }else{
            //     // console.log('nothing works!');
            // }
        // } 
        // console.log(data[0].agency);
        // }
        
    })

    .catch((error)=> {
        console.log(error);
    })
});

