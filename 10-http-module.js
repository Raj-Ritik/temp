// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
    return; // Ensure no further code runs
  }

  if (req.url === '/about') {
    res.end('Here is our short history');
    return; // Ensure no further code runs
  }

  // Fallback for unmatched routes
  res.end(`
    <h1>Ooops!</h1>
    <p>We can't find the page you're looking for</p>
    <a href="/">Back to home page</a>
  `);
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
