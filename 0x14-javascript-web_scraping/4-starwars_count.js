#!/usr/bin/node

const request = require('request');

// Get the API URL from the first argument
const apiUrl = process.argv[2];

// Check if API URL is provided
if (!apiUrl) {
  console.error('API URL is required as the first argument');
  process.exit(1);
}

// Character ID for Wedge Antilles
const wedgeAntillesId = 18;

// Send GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Parse the response body as JSON
  const data = JSON.parse(body);
  
  // Check if the response contains the films
  if (!data.results) {
    console.error('No films found');
    return;
  }

  // Count the number of films where Wedge Antilles is present
  const wedgeMovies = data.results.filter(film => 
    film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`)
  ).length;

  // Print the count
  console.log(wedgeMovies);
});
