const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let file = '';
    if (req.url == '/') file = 'index.html';
    else if (req.url == '/about') file = 'about.html';
    else if (req.url == '/contact-me') file = 'contact-me.html';
    else file = '404.html';
    fs.readFile(file, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
    
}).listen(3000, () => {
    console.log('Server is running on port 3000');
});

