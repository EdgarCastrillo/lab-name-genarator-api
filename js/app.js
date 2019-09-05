'use strict'

document.querySelector('#generate-names').addEventListener('submit', loadNames)

// Get ajax and print names
function loadNames(e) {
  e.preventDefault()

  // Read variables
  const origin = document.getElementById('origin')
  const selectOrigin = origin.options[origin.selectedIndex].value

  const genre = document.getElementById('genre')
  const selectGenre = genre.options[genre.selectedIndex].value

  const quantity = document.getElementById('number').value

  let url = ''
  url += 'http://uinames.com/api/?'

  // if there is origin add it to the url
  if(selectOrigin !== '') {
    url +=`region=${selectOrigin}&`
  }
  // if there is genre add it to the url
  if(selectGenre !== '') {
    url +=`genre=${selectGenre}&`
  }
  // if there is number add it to the url
  if(quantity !== '') {
    url +=`amount=${quantity}&`
  }
  console.log(url)
  console.log(selectGenre)
  console.log(number)

}