#!/usr/bin/node

const fs = require('fs');

// Get the file path from the first argument
const filePath = process.argv[2];

// Read the file in UTF-8 encoding
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
