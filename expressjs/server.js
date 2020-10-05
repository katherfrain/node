const fs = require('fs');
const data = require('./data');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const hostname = "127.0.0.1";
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1> Hello World </h1>')
});
app.get('/about', (req, res) => {
    res.send('<h2>This is a page about making things in Node using Express.</h2>')
})
app.get('/anything', (req, res) => {
    res.send("<h3>We are currently testing Nodemon's live-update capabilities!</h3>")
})
app.get('/friends/', (req, res)  => {
    let friends = '';
    for(let x = 0; x < data.length; x ++){
        friend = data[x];
        friends+= `<li><a href="/friends/${friend.handle}">${friend.name}</a></li>`
    }
    res.send(`<ul>
    ${friends}
    </ul>`)
})
app.get('/friends/:handle', (req, res) => {
    const { handle } = req.params;
    const isFriend = data.find(element => {
        if(element.handle === handle){
            return true;
        }
        return false;
    })
    if(!isFriend){
        res
        .status(404)
        .send(`<h1>No friend has been found at handle: ${handle}</h1>`)
    }
    res.send(`<p>Looks like you're looking for information on...</p>
    <h1>${isFriend.name}</h1>
    <h1>${isFriend.handle}</h1>
    <h1>${isFriend.skill}</h1>`)
})

app.get('*', (req, res) => {
    res
    .status(404)
    .send('<h2>404 Page Not Found</h2>')
})


// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end(`You are at ${req.url}, and this IS the home page`)
//     }
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(`You are at ${req.url}. This IS NOT the homepage`);
// })

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})