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

  let url = ''
  url += ''
  
  console.log(selectOrigin)
  console.log(selectGenre)
  console.log(selectNumber)

}