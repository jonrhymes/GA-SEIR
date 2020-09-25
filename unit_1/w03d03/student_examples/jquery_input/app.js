const list = [];

$(() => {
//   $('#submit-btn').on('click', ()=> {
//       console.log('clicked')
//       const inputValue = $('#person-name').val()
//       console.log(inputValue)
//   })
  $('form:first-of-type').on('submit', (event)=> {
      const inputValue = $('#person-name').val();
      list.push(inputValue)
      console.log(inputValue)
      event.preventDefault()
      $(event.currentTarget).trigger('reset')
    render(list)
  })
  
});

const render = (list) => {
    $('ul').empty() // empties out the child elements
    list.forEach((person)=> {
        const $li = $('<li>').text(person)
        $('ul').append($li)
    })
}

// val()
