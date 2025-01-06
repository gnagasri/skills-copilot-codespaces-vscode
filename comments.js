// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  const filePath = path.join(__dirname, 'comments.html');
  const fileStream = fs.createReadStream(filePath);

  response.writeHead(200, { 'Content-Type': 'text/html' });
  fileStream.pipe(response);
});

server.listen(3000);