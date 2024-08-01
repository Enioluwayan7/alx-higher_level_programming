#!/usr/bin/node

const request = require('request');

// Get the Movie ID from the first argument
const movieId = process.argv[2];

// Check if Movie ID is provided
if (!movieId) {
  console.error('Movie ID is required as the first argument');
  process.exit(1);
}

// Define the API endpoint with the provided Movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Send GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Parse the response body as JSON
  const data = JSON.parse(body);

  // Check if the response contains characters
  if (!data.characters || data.characters.length === 0) {
    console.error('No characters found for this movie');
    return;
  }

  // Get character URLs and make requests to fetch character names
  const characterUrls = data.characters;
  characterUrls.forEach(url => {
    request.get(url, (err, res, characterBody) => {
      if (err) {
        console.error('Error:', err);
        return;
      }

      // Parse the character response body as JSON
      const characterData = JSON.parse(characterBody);

      // Print the character name
      console.log(characterData.name);
    });
  });
});
