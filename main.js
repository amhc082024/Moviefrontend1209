console.log("Hello World");

// Spør serveren etter alle filmer
const baseUrl = "http://localhost:5172";

const response = fetch(
    baseUrl + "/movies",
    );
console.log(response);
const body = response.json()


// Konverter fra Felle Språk til JS

// For hver film

// Lage et HTML Element

// Hekte Elementet på nettsiden