// ### Assignment 3: Fetching Data

// Make an HTML page that fetches starwars data from an api and displays it:

// 1. Make an HTML file
// 2. Include a script
// 3. Fetch data about Luke Skywalker from the from the following url `https://swapi.co/api/people/1`
// 4. Display it on the page
// 5. Make a button with the text `DARTH VADER` on it
// 6. When you click the button it fetches data from `https://swapi.co/api/people/4/` and displays it on the page


// Creating destination element
const outputContainer = document.getElementById("swOutput");

// Fetching skywalker code
fetch("https://swapi.co/api/people/1/") 
  .then(response => response.json())
  .then(result => { 
    console.log (typeof(result));
    console.log (result);
    console.log (result.name);
    outputContainer.innerHTML = result.name;
  })

// Fetching vader code
const theDarkSide = function () {
  fetch("https://swapi.co/api/people/4")
  .then (response => response.json())
  .then (newResult => {
    console.log (newResult.name);
    outputContainer.innerHTML = newResult.name;
  })
}

// Button interaction
const vaderButtonPressed = document.getElementById("vaderButton")
vaderButtonPressed.addEventListener("click", runGetName => {
  // runGetName.preventDefault();
  theDarkSide()
})
