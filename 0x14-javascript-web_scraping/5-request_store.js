#!/usr/bin/env node

const request = require('request');
const fs = require('fs');

// Get the URL and file path from the arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Check if URL and file path are provided
if (!url || !filePath) {
  console.error('URL and file path are required as arguments');
  process.exit(1);
}

// Send GET request to the URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Write the body response to the file in UTF-8 encoding
  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    console.log(`The content has been saved to ${filePath}`);
  });
});
