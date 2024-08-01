#!/usr/bin/node

const request = require('request');

// Get the movie ID from the first argument
const movieId = process.argv[2];

// Check if movie ID is provided
if (!movieId) {
  console.error('Movie ID is required as the first argument');
  process.exit(1);
}

// API URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Parse the response body as JSON
  const data = JSON.parse(body);

  // Print the title of the movie
  if (data.title) {
    console.log(data.title);
  } else {
    console.error('Movie not found');
  }
});
