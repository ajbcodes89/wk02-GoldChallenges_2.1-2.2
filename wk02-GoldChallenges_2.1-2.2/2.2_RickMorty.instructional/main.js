// 'https://rickandmortyapi.com/api/character'

/*
    - Use the provided HTML, CSS, and JS files to fetch images of two separate characters from the Rick and Morty API. You will not need to edit/change anything in the HTML file, everything you need is already there.

    - Your fetch call to the specified endpoint is already defined in the script.js file. Finish coding the necessary promise resolvers for your fetch to access character information from the API.

    - Once you are seeing character information in the console, define a function that will be used to display the data. Your jsonified data from the API will need to be passed to this function.

    Inside the display function you will need to:
    1. Declare two variables used to store the separate character image links from the API.
    2. Grab each image element from the index.html file, and set the src to be the image link you stored in a variable during step 1.

    After you are seeing images of two different characters, use the attached style.css file to style each image with the following properties:
    1. Each image must have a border-radius
    2. Each image must have a border
    3. Each image must be centered
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

const baseURL = 'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character';
const rick = document.querySelector('#imageOne');
const morty = document.querySelector('#imageTwo');

async function fetchRick(){
    await fetch(baseURL)
        .then(result => result.json())
        .then(json => {    
            displayFunc(json, json)
        }) .catch(err => console.log(err))
}
fetchRick();

function displayFunc(img1, img2){
    let person1 = img1.results[0].image
    let person2 = img2.results[1].image
    rick.src = person1
    morty.src = person2
    console.log(person1)
    console.log(person2)
}

