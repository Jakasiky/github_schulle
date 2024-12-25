const http = require('http');

// Create a server to respond with "Hello, World!" and the current date/time
const server = http.createServer((req, res) => {
    const currentDateTime = new Date();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, World!\nCurrent Date and Time: ${currentDateTime}`);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
