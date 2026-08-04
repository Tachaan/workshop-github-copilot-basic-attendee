#!/usr/bin/env node
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const appRoot = path.resolve(__dirname, '..', 'app', 'support-ticket-dashboard');
const defaultPort = Number(process.env.PORT || 8000);
const port = (() => {
  const portArgIndex = process.argv.indexOf('--port');
  if (portArgIndex !== -1 && process.argv[portArgIndex + 1]) {
    return Number(process.argv[portArgIndex + 1]);
  }
  const portArgValue = process.argv.find((arg) => arg.startsWith('--port='));
  if (portArgValue) {
    return Number(portArgValue.split('=')[1]);
  }
  return defaultPort;
})();

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

function resolvePath(requestPath) {
  const cleanPath = requestPath === '/' ? '/index.html' : requestPath;
  const relativePath = cleanPath.replace(/^[/\\]+/, '');
  const resolved = path.resolve(appRoot, relativePath);
  if (resolved === appRoot || resolved.startsWith(appRoot + path.sep)) {
    return resolved;
  }
  return null;
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, 'http://127.0.0.1');
  const requestPath = decodeURIComponent(requestUrl.pathname);
  let targetPath = resolvePath(requestPath);

  if (!targetPath) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
    targetPath = path.join(targetPath, 'index.html');
  }

  if (!fs.existsSync(targetPath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(targetPath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  const content = fs.readFileSync(targetPath);

  res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-store' });
  res.end(content);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Dashboard server running at http://localhost:${port}/`);
  console.log(`Serving ${appRoot}`);
});
