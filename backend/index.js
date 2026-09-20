// Historical UI prototype: unsafe persistence and authentication are retired.
const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(410, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Prototype backend retired. Login and audit storage are disabled.' }));
});
if (require.main === module) server.listen(5000, '127.0.0.1');
module.exports = server;
