console.log("Hello World");

// Spør serveren etter alle filmer
const baseUrl = "http://localhost:5172";

const response = fetch(
    baseUrl + "/movies",
    );
console.log(response);
const body = response.json()


// Konverter fra Felle Språk til JS
const movies = await response.json()

// For hver film
for (const movie of movies) {
    

// Lage et HTML Element
console.log(movie.title)

const movieElement = document.createElement("li")
movieElement.textContent = movie.title
movieElement.className = "movie-card"

// Hekte Elementet på nettsiden

// Få tak i elementet vi ønsker å sette det inn under
const movieList = document.querySelector("#movie-list")

movieList.append(movieElement)
}

function createMovieCard(movie) {
const movieElement = document.createElement("li")
movieElement.textContent = movie.title
movieElement.className = "movie-card"

return movieElement
}