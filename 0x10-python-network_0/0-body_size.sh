#!/bin/bash

# Check if a URL is provided as an argument
if [ -z "$1" ]; then
    echo "Usage: $0 <URL>"
    exit 1
fi

url="$1"

# Use curl to send a request and retrieve the body size
body_size=$(curl -sI "$url" | grep -i "content-length" | awk '{print $2}' | tr -d '\r\n')

# Check if the Content-Length header is present in the response
if [ -z "$body_size" ]; then
    echo "Content-Length header not found in the response."
    exit 1
fi

echo "Size of the body: ${body_size} bytes"
