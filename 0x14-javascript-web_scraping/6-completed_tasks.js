#!/usr/bin/node

const request = require('request');

// Get the API URL from the first argument
const apiUrl = process.argv[2];

// Check if API URL is provided
if (!apiUrl) {
  console.error('API URL is required as the first argument');
  process.exit(1);
}

// Send GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Parse the response body as JSON
  const data = JSON.parse(body);

  // Create an object to hold the count of completed tasks per user
  const completedTasks = {};

  // Iterate over the tasks
  data.forEach(task => {
    if (task.completed) {
      if (completedTasks[task.userId]) {
        completedTasks[task.userId]++;
      } else {
        completedTasks[task.userId] = 1;
      }
    }
  });

  // Print the users with completed tasks
  for (const userId in completedTasks) {
    console.log(`User ${userId} has completed ${completedTasks[userId]} tasks`);
  }
});
