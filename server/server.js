"use strict";

const express                       = require('express');
const socketIO                      = require('socket.io');
const path                          = require('path');
const http                          = require('http');

const publicPath = path.join(__dirname, '../client');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
    console.log('New player connected (from server)');

    socket.on('disconnect', () => {
        console.log('Player disconnected (from server)');
    });
});

server.listen(port, () => {
    console.log('Server listening at port ' + port);
});