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
  
  // connect with AJAX
  // Start XMLHTTPRequest
  const xhr = new XMLHttpRequest
  // Open connection
  xhr.open('GET', url, true)
  // DATA and print template
  xhr.onload = function() {
    if(this.status === 200) {
      const names = JSON.parse(this.responseText)
      // Generate HTML
      let htmlNames = '<h2>Nombres generados</h2>'

      htmlNames += '<ul class="list>'

      // Print each name
      names.forEach(function(name) {
        htmlNames += `
          <li>${names.name}
        `    
      })
      console.log(names)
      htmlNames += '</ul>'

      document.getElementById('result').innerHTML = htmlNames
    }
  }
  // Send request
  xhr.send()

}