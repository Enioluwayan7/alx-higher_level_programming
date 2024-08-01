#!/usr/bin/node

const fs = require('fs');

// Get the file path and string to write from the arguments
const filePath = process.argv[2];
const stringToWrite = process.argv[3];

// Write the string to the file in UTF-8 encoding
fs.writeFile(filePath, stringToWrite, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('The file has been saved!');
});
