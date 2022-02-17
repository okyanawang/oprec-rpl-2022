const http = require('http');
var fs = require('fs');
var path = require('path');
const { readFileSync, writeFileSync } = require("fs");

const homePage = readFileSync('./cv/index.html', {encoding:'utf8', flag:'r'});
const formPage = readFileSync('./forms/form.html', {encoding:'utf8', flag:'r'});

const server = http.createServer((req, res) => {
    if(req.method === 'GET'){
        if(req.url === '/') { 
            res.setHeader('Content-Type', 'text/html');
            res.write(homePage);
            res.end();
        }else if(req.url === '/public/styles/style.css'){
            res.setHeader('Content-Type', 'text/css');
            var fileContents = fs.readFileSync('./cv/public/styles/style.css', {encoding: 'utf8'});
            res.write(fileContents);
            res.end();
        }else if(req.url === '/public/img/bg.png'){
            fs.readFile(__dirname+'/cv/public/img/bg.png', function(err, data){
                if(err) console.log(err);
                res.write(data);
                res.end();
            });
        }else if(req.url === '/contact') { 
            res.setHeader('Content-Type', 'text/html');
            res.write(formPage);
            res.end();
        }else if(req.url === '/public/fstyles/style.css'){
            res.setHeader('Content-Type', 'text/css');
            var fileContents = fs.readFileSync('./forms/public/fstyles/style.css', {encoding: 'utf8'});
            res.write(fileContents);
            res.end();
        }
    }else if(req.method === 'POST'){
        if(req.url === '/contact') {
            var body = '';

            req.on('data', function (data) {
                body += data;

                if (body.length > 1e6)
                    request.connection.destroy();
            });

            req.on('end', function () {
                body += "\n";
                fs.writeFile("contacts.txt", body, { flag: "a" }, (err) => {
                    if(err) console.log(err);
                });
            });
            res.write(formPage);
            res.end();
        }
    }else{
        res.setHeader('content-type', 'text/plain');
        res.statusCode = 400;
        res.write('METHOD IS NOT SUPPORTED');
        res.end();
    }
});

server.listen(8000);