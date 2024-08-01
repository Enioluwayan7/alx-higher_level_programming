#!/usr/bin/node

const fs = require('fs');

// Get the file path and string to write from command-line arguments
const filePath = process.argv[2];
const stringToWrite = process.argv[3];

// Check if both arguments are provided
if (!filePath || !stringToWrite) {
  console.error('Usage: ./writeToFile.js <file-path> <string-to-write>');
  process.exit(1);
}

// Write the string to the file with UTF-8 encoding
fs.writeFile(filePath, stringToWrite, 'utf8', (error) => {
  if (error) {
    console.error('Error writing to file:', error);
    return;
  }

  console.log(`Successfully written to ${filePath}`);
});
