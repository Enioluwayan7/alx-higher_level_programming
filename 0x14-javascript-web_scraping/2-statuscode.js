#!/usr/bin/node

const request = require('request');

// Get the URL from the first argument
const url = process.argv[2];

// Check if URL is provided
if (!url) {
  console.error('URL is required as the first argument');
  process.exit(1);
}

// Send GET request to the URL
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  // Print the status code
  console.log('code:', response && response.statusCode);
});
