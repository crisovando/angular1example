/* eslint-disable semi */

'use strict';


const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const config = require('config');
app.use(express.static('./public'));

<<<<<<< HEAD
server.listen(8080);
=======
app.all('*', (req, res)=>{
    res.sendFile(process.cwd()+'/public/index.html');
});

server.listen(process.PORT || 3500);


>>>>>>> e6e4b8f7c87a229f9cd442fdb49fa06b5b1c72a8
