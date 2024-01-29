#!/bin/bash

# Function to display usage message
display_usage() {
    echo "Usage: $0 <URL>"
}

# Check if a URL is provided as an argument
if [ -z "$1" ]; then
    display_usage
    exit 1
fi

url="$1"

# Use curl to send a request and retrieve the body size
response=$(curl -sI "$url")

# Extract content length from the response headers
content_length=$(echo "$response" | awk '/Content-Length/ {print $2}' | tr -d '\r\n')

# Check if Content-Length header is present
if [ -z "$content_length" ]; then
    echo "Content-Length header not found in the response."
    exit 1
fi

echo "Size of the body: ${content_length} bytes"

