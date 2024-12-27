import http from 'http';

export function add(a, b) {
    return a + b;
}

// Create the server
const server = http.createServer((req, res) => {
    // Define a route
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!');
    } else if (req.url === '/add') {
        const sum = add(5, 3); // Example: Add two numbers
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ result: sum }));
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
