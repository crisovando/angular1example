/* eslint-disable semi */

'use strict';


const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.use(express.static('./public'));

server.listen(8080);
